
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Notification } from '@/types/notifications';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => void;
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

  // Function to fetch user's notifications
  const fetchNotifications = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session?.session?.user) return;

    // In a real implementation, you would fetch from a notifications table
    // For now, we'll use mock data
    const mockNotifications: Notification[] = [
      {
        id: '1',
        userId: session.session.user.id,
        title: 'Bem-vindo ao sistema de cashback!',
        message: 'Comece a explorar empresas parceiras e ganhe cashback em suas compras.',
        type: 'info',
        isRead: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        userId: session.session.user.id,
        title: 'Cashback disponível',
        message: 'Você tem R$ 25,00 em cashback disponível para resgate.',
        type: 'success',
        isRead: false,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        link: '/client/dashboard',
      }
    ];

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
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      isRead: false,
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setUnreadCount(prev => prev + 1);
    
    // Show toast for new notifications
    toast(notification.title, {
      description: notification.message,
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
