
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
      // Validação básica
      if (!credentials.email?.trim() || !credentials.password?.trim()) {
        return { 
          success: false, 
          error: 'Email e senha são obrigatórios' 
        };
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: credentials.email.trim().toLowerCase(),
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
      // Validações de entrada
      if (!data.email?.trim()) {
        return { success: false, error: 'Email é obrigatório' };
      }

      if (!data.password?.trim()) {
        return { success: false, error: 'Senha é obrigatória' };
      }

      if (data.password !== data.confirmPassword) {
        return { success: false, error: 'As senhas não coincidem' };
      }

      if (data.password.length < 6) {
        return { success: false, error: 'A senha deve ter pelo menos 6 caracteres' };
      }

      // Validação básica de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return { success: false, error: 'Email inválido' };
      }

      const { error } = await supabase.auth.signUp({
        email: data.email.trim().toLowerCase(),
        password: data.password,
        options: {
          data: data.metadata || {},
          emailRedirectTo: `${window.location.origin}/auth/callback`
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
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
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
      if (!email?.trim()) {
        return { success: false, error: 'Email é obrigatório' };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { success: false, error: 'Email inválido' };
      }

      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim().toLowerCase(), 
        {
          redirectTo: `${window.location.origin}/auth/reset-password`
        }
      );

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
      'Email rate limit exceeded': 'Limite de emails excedido. Tente novamente mais tarde',
      'Signup disabled': 'Cadastro desabilitado temporariamente',
    };

    return errorMap[errorMessage] || 'Erro desconhecido. Tente novamente.';
  }
}

// Singleton pattern
export const authService = new AuthService();
