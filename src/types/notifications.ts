
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
  link?: string;
  metadata?: {
    hasAction?: boolean;
    actionParams?: Record<string, any>;
    icon?: string;
    category?: 'transaction' | 'account' | 'promotion' | 'system';
    priority?: 'low' | 'medium' | 'high';
    expiresAt?: string;
    actionData?: any; // Adding the missing actionData property
  };
}

export interface NotificationSettings {
  enableEmailNotifications: boolean;
  enablePushNotifications: boolean;
  notifyOnTransactions: boolean;
  notifyOnPromotions: boolean;
  notifyOnAccountChanges: boolean;
  notifyOnSystemUpdates: boolean;
}
