
import { useNotifications } from '@/contexts/NotificationContext';
import { Notification } from '@/types/notifications';
import { supabase } from '@/integrations/supabase/client';
import { UserType } from '@/types/auth';

export interface NotificationOptions {
  /**
   * Time in milliseconds after which the notification will be automatically marked as read
   * If not provided, the notification will remain until the user interacts with it
   */
  autoDismissAfter?: number;
  
  /**
   * Function to be executed when the user clicks on the notification
   */
  onClick?: () => void;
  
  /**
   * Additional data related to the notification action
   */
  actionData?: any;
}

export const useAddNotification = () => {
  const { addNotification, markAsRead } = useNotifications();
  
  const sendNotification = async (
    title: string, 
    message: string, 
    type: 'info' | 'success' | 'warning' | 'error' = 'info',
    linkOrOptions?: string | NotificationOptions,
    options?: NotificationOptions
  ) => {
    // Get current user session
    const { data: { session } } = await supabase.auth.getSession();
    const userId = session?.user?.id || 'anonymous';
    const userType = session?.user?.user_metadata?.user_type as UserType;
    
    if (!userType) {
      console.error('User type not found in session metadata');
      return '';
    }
    
    // Determine if the parameter linkOrOptions is a link or options
    const link = typeof linkOrOptions === 'string' ? linkOrOptions : undefined;
    const finalOptions = typeof linkOrOptions === 'object' ? linkOrOptions : options;
    
    const notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'> = {
      userId,
      userType,
      title,
      message,
      type,
      link,
      metadata: finalOptions?.onClick || finalOptions?.actionData ? {
        hasAction: !!finalOptions.onClick,
        actionData: finalOptions?.actionData
      } : undefined
    };
    
    const notificationId = addNotification(notification);
    
    // Configure auto-dismiss if specified
    if (finalOptions?.autoDismissAfter && finalOptions.autoDismissAfter > 0) {
      setTimeout(() => {
        markAsRead(notificationId);
      }, finalOptions.autoDismissAfter);
    }
    
    return notificationId;
  };
  
  return sendNotification;
};
