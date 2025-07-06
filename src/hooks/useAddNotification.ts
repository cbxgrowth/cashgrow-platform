
import { useNotifications } from '@/contexts/NotificationContext';
import { Notification } from '@/types/notifications';

export const useAddNotification = () => {
  const { addNotification } = useNotifications();

  return (
    title: string, 
    message: string, 
    type: Notification['type'] = 'info',
    link?: string,
    metadata?: Record<string, any>
  ) => {
    return addNotification({
      title,
      message,
      type,
      link,
      metadata,
      userId: 'current-user', // This should be replaced with actual user ID
      userType: 'client' // This should be replaced with actual user type
    });
  };
};
