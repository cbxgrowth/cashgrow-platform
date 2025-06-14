
// Redirecionamento para os novos serviços refatorados
export { authRepository } from '@/repositories/auth.repository';
export { userService } from '@/features/auth/services/user.service';
export { AUTH_CONSTANTS } from '@/constants/auth.constants';

// Função de logout mantida para compatibilidade
import { authRepository } from '@/repositories/auth.repository';
import { userService } from '@/features/auth/services/user.service';
import { toast } from 'sonner';

export const performLogout = async (): Promise<boolean> => {
  try {
    const result = await authRepository.signOut();
    
    if (!result.success) {
      toast.error("Erro ao sair", { description: result.error });
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

// Funções redirecionadas para os novos serviços
export const getCurrentSession = () => authRepository.getCurrentSession();

export const validateUserType = (
  session: any, 
  requiredType: 'client' | 'company'
): boolean => {
  return userService.validateUserType(session?.user?.user_metadata?.user_type, requiredType);
};

export const handleUnauthorizedAccess = (
  userType: string | undefined,
  requiredType: 'client' | 'company'
): string => {
  if (userType && userType !== requiredType) {
    const targetRoute = userService.getRedirectPath(userType as any);
    toast.error(`Você não tem acesso ao painel de ${requiredType === 'client' ? 'cliente' : 'empresa'}`);
    return targetRoute;
  }
  
  toast.error("Sessão expirada ou usuário não autenticado");
  return '/auth/login';
};
