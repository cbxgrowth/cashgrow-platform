
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
  link?: string;
  userType: 'client' | 'company'; // Novo campo para definir o destinatário
  metadata?: {
    hasAction?: boolean;
    actionParams?: Record<string, any>;
    icon?: string;
    category?: 'transaction' | 'account' | 'promotion' | 'system' | 'client-management' | 'performance';
    priority?: 'low' | 'medium' | 'high';
    expiresAt?: string;
    actionData?: any;
  };
}

export interface NotificationSettings {
  enableEmailNotifications: boolean;
  enablePushNotifications: boolean;
  notifyOnTransactions: boolean;
  notifyOnPromotions: boolean;
  notifyOnAccountChanges: boolean;
  notifyOnSystemUpdates: boolean;
  // Configurações específicas para empresas
  notifyOnNewClients?: boolean;
  notifyOnClientTransactions?: boolean;
  notifyOnPerformanceReports?: boolean;
  // Configurações específicas para clientes
  notifyOnCashbackReceived?: boolean;
  notifyOnNewPromotions?: boolean;
  notifyOnLevelUp?: boolean;
}
