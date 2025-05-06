
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
    actionData?: any;
    [key: string]: any;
  };
}
