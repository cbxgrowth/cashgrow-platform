
import { useNotifications } from '@/contexts/NotificationContext';
import { Notification } from '@/types/notifications';

export interface NotificationOptions {
  /**
   * Tempo em milissegundos após o qual a notificação será automaticamente marcada como lida
   * Se não for fornecido, a notificação permanecerá até o usuário interagir com ela
   */
  autoDismissAfter?: number;
  
  /**
   * Função a ser executada quando o usuário clicar na notificação
   */
  onClick?: () => void;
}

export const useAddNotification = () => {
  const { addNotification, markAsRead } = useNotifications();
  
  const sendNotification = (
    title: string, 
    message: string, 
    type: 'info' | 'success' | 'warning' | 'error' = 'info',
    linkOrOptions?: string | NotificationOptions,
    options?: NotificationOptions
  ) => {
    // Determinar se o parâmetro linkOrOptions é um link ou opções
    const link = typeof linkOrOptions === 'string' ? linkOrOptions : undefined;
    const finalOptions = typeof linkOrOptions === 'object' ? linkOrOptions : options;
    
    const notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'> = {
      userId: 'current-user', // Em uma implementação real, este seria o ID do usuário atual
      title,
      message,
      type,
      link,
      metadata: finalOptions?.onClick ? { hasAction: true } : undefined
    };
    
    const notificationId = addNotification(notification);
    
    // Configurar auto-dismiss se especificado
    if (finalOptions?.autoDismissAfter && finalOptions.autoDismissAfter > 0) {
      setTimeout(() => {
        markAsRead(notificationId);
      }, finalOptions.autoDismissAfter);
    }
    
    return notificationId;
  };
  
  return sendNotification;
};
