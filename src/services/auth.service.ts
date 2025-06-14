
// Este arquivo foi refatorado e movido para src/features/auth/
// Redirecionamento para manter compatibilidade
export { 
  authService, 
  type AuthResponse 
} from '@/features/auth';

// Mantendo interfaces para compatibilidade
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
