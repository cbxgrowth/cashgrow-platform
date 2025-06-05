
// Utilitário para funções de autenticação - centraliza lógica comum
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface AuthUser {
  id: string;
  email?: string;
  user_metadata?: Record<string, any>;
}

export interface AuthSession {
  user: AuthUser;
  access_token: string;
}

/**
 * Verifica se o usuário está autenticado
 * @returns Promise<AuthSession | null>
 */
export const getCurrentSession = async (): Promise<AuthSession | null> => {
  try {
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Erro ao obter sessão:', error);
      return null;
    }
    
    return data.session;
  } catch (error) {
    console.error('Erro na verificação de sessão:', error);
    return null;
  }
};

/**
 * Verifica se o usuário tem o tipo correto
 * @param session - Sessão atual
 * @param requiredType - Tipo de usuário necessário
 * @returns boolean
 */
export const validateUserType = (
  session: AuthSession | null, 
  requiredType: 'client' | 'company'
): boolean => {
  if (!session?.user?.user_metadata?.user_type) {
    return false;
  }
  
  return session.user.user_metadata.user_type === requiredType;
};

/**
 * Redireciona usuário não autorizado
 * @param userType - Tipo de usuário atual
 * @param requiredType - Tipo necessário
 */
export const handleUnauthorizedAccess = (
  userType: string | undefined,
  requiredType: 'client' | 'company'
): string => {
  if (userType && userType !== requiredType) {
    const targetRoute = `/${userType}/dashboard`;
    toast.error(`Você não tem acesso ao painel de ${requiredType === 'client' ? 'cliente' : 'empresa'}`);
    return targetRoute;
  }
  
  toast.error("Sessão expirada ou usuário não autenticado");
  return '/auth/login';
};

/**
 * Realiza logout seguro
 * @returns Promise<boolean> - Sucesso do logout
 */
export const performLogout = async (): Promise<boolean> => {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Erro no logout:', error);
      toast.error("Erro ao sair", { description: error.message });
      return false;
    }
    
    toast.success("Logout realizado com sucesso");
    return true;
  } catch (error) {
    console.error('Erro inesperado no logout:', error);
    toast.error("Erro inesperado ao fazer logout");
    return false;
  }
};
