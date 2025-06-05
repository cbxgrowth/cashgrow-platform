
// Serviço de autenticação centralizado para melhor organização
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  metadata?: Record<string, any>;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
}

class AuthService {
  /**
   * Realiza login com email e senha
   */
  async signIn(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        console.error('Erro no login:', error);
        return { 
          success: false, 
          error: this.getErrorMessage(error.message) 
        };
      }

      return { success: true };
    } catch (error) {
      console.error('Erro inesperado no login:', error);
      return { 
        success: false, 
        error: 'Erro inesperado. Tente novamente.' 
      };
    }
  }

  /**
   * Realiza registro de novo usuário
   */
  async signUp(data: RegisterData): Promise<AuthResponse> {
    try {
      // Validação de senhas
      if (data.password !== data.confirmPassword) {
        return { 
          success: false, 
          error: 'As senhas não coincidem' 
        };
      }

      // Validação de força da senha
      if (data.password.length < 6) {
        return { 
          success: false, 
          error: 'A senha deve ter pelo menos 6 caracteres' 
        };
      }

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: data.metadata || {}
        }
      });

      if (error) {
        console.error('Erro no registro:', error);
        return { 
          success: false, 
          error: this.getErrorMessage(error.message) 
        };
      }

      return { success: true };
    } catch (error) {
      console.error('Erro inesperado no registro:', error);
      return { 
        success: false, 
        error: 'Erro inesperado. Tente novamente.' 
      };
    }
  }

  /**
   * Login com Google
   */
  async signInWithGoogle(): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        console.error('Erro no login Google:', error);
        return { 
          success: false, 
          error: this.getErrorMessage(error.message) 
        };
      }

      return { success: true };
    } catch (error) {
      console.error('Erro inesperado no login Google:', error);
      return { 
        success: false, 
        error: 'Erro inesperado. Tente novamente.' 
      };
    }
  }

  /**
   * Recuperação de senha
   */
  async resetPassword(email: string): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });

      if (error) {
        console.error('Erro na recuperação:', error);
        return { 
          success: false, 
          error: this.getErrorMessage(error.message) 
        };
      }

      return { success: true };
    } catch (error) {
      console.error('Erro inesperado na recuperação:', error);
      return { 
        success: false, 
        error: 'Erro inesperado. Tente novamente.' 
      };
    }
  }

  /**
   * Traduz mensagens de erro para português
   */
  private getErrorMessage(errorMessage: string): string {
    const errorMap: Record<string, string> = {
      'Invalid login credentials': 'Credenciais inválidas',
      'User already registered': 'Usuário já cadastrado',
      'Email not confirmed': 'Email não confirmado',
      'Invalid email': 'Email inválido',
      'Password should be at least 6 characters': 'A senha deve ter pelo menos 6 caracteres',
      'Too many requests': 'Muitas tentativas. Tente novamente mais tarde',
    };

    return errorMap[errorMessage] || 'Erro desconhecido. Tente novamente.';
  }
}

// Singleton pattern
export const authService = new AuthService();
