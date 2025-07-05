
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
          title: 'Cashback Confirmado!',
          message: 'Você recebeu R$ 15,50 de cashback da sua compra no Supermercado ABC.',
          type: 'success',
          isRead: false,
          createdAt: new Date().toISOString(),
          link: '/client/transactions',
          metadata: { category: 'transaction', priority: 'medium' }
        },
        {
          id: '2',
          userId,
          userType: 'client',
          title: 'Resgate Disponível',
          message: 'Você tem R$ 45,00 disponíveis para resgate via PIX.',
          type: 'info',
          isRead: false,
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          link: '/client/wallet',
          metadata: { category: 'account', priority: 'high' }
        },
        {
          id: '3',
          userId,
          userType: 'client',
          title: 'Promoção Especial!',
          message: 'Triplo cashback na Farmácia Saúde até domingo!',
          type: 'info',
          isRead: false,
          createdAt: new Date(Date.now() - 7200000).toISOString(),
          link: '/client/companies',
          metadata: { category: 'promotion', priority: 'medium' }
        },
        {
          id: '4',
          userId,
          userType: 'client',
          title: 'Nível VIP Desbloqueado!',
          message: 'Parabéns! Você atingiu o nível VIP e agora tem 15% de cashback em todas as compras.',
          type: 'success',
          isRead: true,
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          link: '/client/vip-club',
          metadata: { category: 'account', priority: 'high' }
        },
        {
          id: '5',
          userId,
          userType: 'client',
          title: 'Compra Processada',
          message: 'Sua compra de R$ 89,90 foi processada e o cashback será creditado em até 24h.',
          type: 'info',
          isRead: true,
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          metadata: { category: 'transaction', priority: 'low' }
        }
      );
    } else if (userType === 'company') {
      baseNotifications.push(
        {
          id: '6',
          userId,
          userType: 'company',
          title: 'Nova Venda Registrada',
          message: 'Cliente Maria Silva realizou uma compra de R$ 156,80 com 12% de cashback aplicado.',
          type: 'success',
          isRead: false,
          createdAt: new Date().toISOString(),
          link: '/company/transactions',
          metadata: { category: 'client-management', priority: 'medium' }
        },
        {
          id: '7',
          userId,
          userType: 'company',
          title: 'Novo Cliente Cadastrado',
          message: 'João Santos se cadastrou em sua empresa e já realizou a primeira compra.',
          type: 'success',
          isRead: false,
          createdAt: new Date(Date.now() - 1800000).toISOString(),
          link: '/company/clients',
          metadata: { category: 'client-management', priority: 'high' }
        },
        {
          id: '8',
          userId,
          userType: 'company',
          title: 'Meta Mensal Atingida',
          message: 'Parabéns! Sua empresa atingiu 500 transações este mês, superando a meta em 25%.',
          type: 'success',
          isRead: false,
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          link: '/company/performance',
          metadata: { category: 'performance', priority: 'high' }
        },
        {
          id: '9',
          userId,
          userType: 'company',
          title: 'Relatório de Cashback Disponível',
          message: 'Seu relatório semanal de cashback está pronto para download.',
          type: 'info',
          isRead: true,
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          link: '/company/reports',
          metadata: { category: 'performance', priority: 'medium' }
        },
        {
          id: '10',
          userId,
          userType: 'company',
          title: 'Integração ERP Pendente',
          message: 'Sua integração com o sistema ERP precisa ser atualizada para continuar sincronizando.',
          type: 'warning',
          isRead: true,
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          link: '/company/integrations',
          metadata: { category: 'system', priority: 'high' }
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
