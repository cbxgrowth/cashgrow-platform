
import { supabase } from '@/integrations/supabase/client';
import { AuthError, AuthResponse, User } from '@supabase/supabase-js';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends AuthCredentials {
  confirmPassword: string;
  metadata?: Record<string, any>;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: User;
}

export class AuthRepository {
  async signInWithPassword(credentials: AuthCredentials): Promise<AuthResult> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password,
    });

    return {
      success: !error,
      error: error?.message,
      user: data.user || undefined,
    };
  }

  async signUp(data: RegisterData): Promise<AuthResult> {
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email.trim().toLowerCase(),
      password: data.password,
      options: {
        data: data.metadata || {},
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    });

    return {
      success: !error,
      error: error?.message,
      user: authData.user || undefined,
    };
  }

  async signInWithOAuth(provider: 'google'): Promise<AuthResult> {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      }
    });

    return {
      success: !error,
      error: error?.message,
    };
  }

  async resetPassword(email: string): Promise<AuthResult> {
    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase(), 
      {
        redirectTo: `${window.location.origin}/auth/reset-password`
      }
    );

    return {
      success: !error,
      error: error?.message,
    };
  }

  async signOut(): Promise<AuthResult> {
    const { error } = await supabase.auth.signOut();
    
    return {
      success: !error,
      error: error?.message,
    };
  }

  async getCurrentSession() {
    const { data, error } = await supabase.auth.getSession();
    
    return {
      success: !error,
      error: error?.message,
      session: data.session,
    };
  }

  async updateUser(updates: { data?: Record<string, any>; password?: string }) {
    const { data, error } = await supabase.auth.updateUser(updates);
    
    return {
      success: !error,
      error: error?.message,
      user: data.user || undefined,
    };
  }
}

export const authRepository = new AuthRepository();
