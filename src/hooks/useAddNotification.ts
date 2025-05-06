
import { useNotifications } from '@/contexts/NotificationContext';
import { Notification } from '@/types/notifications';

export const useAddNotification = () => {
  const { addNotification } = useNotifications();
  
  const sendNotification = (
    title: string, 
    message: string, 
    type: 'info' | 'success' | 'warning' | 'error' = 'info',
    link?: string
  ) => {
    const notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'> = {
      userId: 'current-user', // In a real implementation, this would be the actual user ID
      title,
      message,
      type,
      link
    };
    
    addNotification(notification);
  };
  
  return sendNotification;
};
