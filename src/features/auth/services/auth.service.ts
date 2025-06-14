
import { authRepository, AuthCredentials, RegisterData } from '@/repositories/auth.repository';
import { validationService } from './validation.service';
import { errorService } from './error.service';
import { userService } from './user.service';

export interface AuthResponse {
  success: boolean;
  error?: string;
}

export class AuthService {
  async signIn(credentials: AuthCredentials): Promise<AuthResponse> {
    try {
      // Validação usando o serviço de validação
      const validation = validationService.validateLoginCredentials(
        credentials.email, 
        credentials.password
      );

      if (!validation.isValid) {
        return { 
          success: false, 
          error: validation.error 
        };
      }

      // Operação através do repository
      const result = await authRepository.signInWithPassword(credentials);

      if (!result.success) {
        return { 
          success: false, 
          error: errorService.handleAuthError(result.error) 
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

  async signUp(data: RegisterData): Promise<AuthResponse> {
    try {
      // Validação usando o serviço de validação
      const validation = validationService.validateRegisterData(
        data.email, 
        data.password, 
        data.confirmPassword
      );

      if (!validation.isValid) {
        return { success: false, error: validation.error };
      }

      // Operação através do repository
      const result = await authRepository.signUp(data);

      if (!result.success) {
        return { 
          success: false, 
          error: errorService.handleAuthError(result.error) 
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

  async signInWithGoogle(): Promise<AuthResponse> {
    try {
      const result = await authRepository.signInWithOAuth('google');

      if (!result.success) {
        return { 
          success: false, 
          error: errorService.handleAuthError(result.error) 
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

  async resetPassword(email: string): Promise<AuthResponse> {
    try {
      const validation = validationService.validateEmail(email);
      if (!validation.isValid) {
        return { success: false, error: validation.error };
      }

      const result = await authRepository.resetPassword(email);

      if (!result.success) {
        return { 
          success: false, 
          error: errorService.handleAuthError(result.error) 
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
}

export const authService = new AuthService();
