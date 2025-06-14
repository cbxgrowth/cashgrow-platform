
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Notification } from '@/types/notifications';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { UserType } from '@/types/auth';

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => string;
  registerActionHandler: (notificationId: string, handler: () => void) => void;
  executeAction: (notificationId: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [actionHandlers, setActionHandlers] = useState<Record<string, () => void>>({});
  const [currentUserType, setCurrentUserType] = useState<UserType | null>(null);

  // Function to get mock notifications based on user type
  const getMockNotifications = (userId: string, userType: UserType): Notification[] => {
    const baseNotifications: Notification[] = [];

    if (userType === 'client') {
      baseNotifications.push(
        {
          id: '1',
          userId,
          userType: 'client',
          title: 'Bem-vindo ao sistema de cashback!',
          message: 'Comece a explorar empresas parceiras e ganhe cashback em suas compras.',
          type: 'info',
          isRead: false,
          createdAt: new Date().toISOString(),
          metadata: { category: 'system' }
        },
        {
          id: '2',
          userId,
          userType: 'client',
          title: 'Cashback disponível',
          message: 'Você tem R$ 25,00 em cashback disponível para resgate.',
          type: 'success',
          isRead: false,
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          link: '/client/dashboard',
          metadata: { category: 'transaction' }
        },
        {
          id: '3',
          userId,
          userType: 'client',
          title: 'Nova promoção disponível!',
          message: 'Dobro de cashback no Mercado Verde até domingo!',
          type: 'info',
          isRead: true,
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          link: '/client/companies',
          metadata: { category: 'promotion' }
        }
      );
    } else if (userType === 'company') {
      baseNotifications.push(
        {
          id: '4',
          userId,
          userType: 'company',
          title: 'Novo cliente cadastrado',
          message: 'João Silva se cadastrou em sua empresa e já realizou a primeira compra.',
          type: 'success',
          isRead: false,
          createdAt: new Date().toISOString(),
          link: '/company/clients',
          metadata: { category: 'client-management' }
        },
        {
          id: '5',
          userId,
          userType: 'company',
          title: 'Relatório de performance disponível',
          message: 'Seu relatório mensal de cashback está pronto para análise.',
          type: 'info',
          isRead: false,
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          link: '/company/reports',
          metadata: { category: 'performance' }
        },
        {
          id: '6',
          userId,
          userType: 'company',
          title: 'Meta de transações atingida',
          message: 'Parabéns! Você atingiu a meta de 100 transações este mês.',
          type: 'success',
          isRead: true,
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          metadata: { category: 'performance' }
        }
      );
    }

    return baseNotifications;
  };

  // Function to fetch user's notifications
  const fetchNotifications = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session?.session?.user) return;

    const userType = session.session.user.user_metadata?.user_type as UserType;
    setCurrentUserType(userType);

    // In a real implementation, you would fetch from a notifications table with userType filter
    const mockNotifications = getMockNotifications(session.session.user.id, userType);

    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.isRead).length);
  };

  useEffect(() => {
    fetchNotifications();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        fetchNotifications();
      } else if (event === 'SIGNED_OUT') {
        setNotifications([]);
        setUnreadCount(0);
        setCurrentUserType(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
    setUnreadCount(0);
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => {
    // Ensure the notification matches the current user type
    if (currentUserType && notification.userType !== currentUserType) {
      console.warn('Trying to add notification for different user type');
      return '';
    }

    const id = Date.now().toString();
    const newNotification: Notification = {
      ...notification,
      id,
      createdAt: new Date().toISOString(),
      isRead: false,
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setUnreadCount(prev => prev + 1);
    
    // Show toast for new notifications
    toast(notification.title, {
      description: notification.message,
    });
    
    return id;
  };
  
  const registerActionHandler = (notificationId: string, handler: () => void) => {
    setActionHandlers(prev => ({
      ...prev,
      [notificationId]: handler
    }));
  };
  
  const executeAction = (notificationId: string) => {
    if (actionHandlers[notificationId]) {
      actionHandlers[notificationId]();
      // Remove the handler after execution
      setActionHandlers(prev => {
        const { [notificationId]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification,
        registerActionHandler,
        executeAction
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
