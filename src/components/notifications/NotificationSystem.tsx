
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, X, CheckCircle, DollarSign, Gift, TrendingUp, Users, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  type: 'company' | 'client';
  category: 'sale' | 'cashback' | 'offer' | 'system' | 'referral';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  data?: any;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  removeNotification: (id: string) => void;
  unreadCount: number;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { toast } = useToast();

  // Mock notifications for demonstration
  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: '1',
        type: 'company',
        category: 'sale',
        title: 'Nova Venda Registrada',
        message: 'Cliente João Silva realizou uma compra de R$ 299,90',
        timestamp: new Date(Date.now() - 300000),
        read: false,
        data: { amount: 299.90, customer: 'João Silva' }
      },
      {
        id: '2',
        type: 'client',
        category: 'cashback',
        title: 'Cashback Confirmado',
        message: 'Você recebeu R$ 24,50 de cashback da TechStore',
        timestamp: new Date(Date.now() - 600000),
        read: false,
        data: { amount: 24.50, store: 'TechStore' }
      },
      {
        id: '3',
        type: 'client',
        category: 'offer',
        title: 'Oferta Especial VIP',
        message: '20% de desconto + 10% cashback na Nike até sexta-feira',
        timestamp: new Date(Date.now() - 3600000),
        read: true,
        data: { discount: 20, cashback: 10, store: 'Nike' }
      }
    ];
    setNotifications(mockNotifications);
  }, []);

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev]);
    
    // Show toast for new notification
    toast({
      title: newNotification.title,
      description: newNotification.message,
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      markAsRead,
      removeNotification,
      unreadCount
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const NotificationPanel: React.FC<{ userType: 'company' | 'client' }> = ({ userType }) => {
  const { notifications, markAsRead, removeNotification } = useNotifications();
  
  const userNotifications = notifications.filter(n => n.type === userType);

  const getNotificationIcon = (category: string) => {
    switch (category) {
      case 'sale': return <DollarSign className="h-4 w-4 text-green-600" />;
      case 'cashback': return <Gift className="h-4 w-4 text-blue-600" />;
      case 'offer': return <TrendingUp className="h-4 w-4 text-purple-600" />;
      case 'referral': return <Users className="h-4 w-4 text-orange-600" />;
      default: return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      sale: 'Venda',
      cashback: 'Cashback',
      offer: 'Oferta',
      referral: 'Indicação',
      system: 'Sistema'
    };
    return labels[category] || 'Notificação';
  };

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {userNotifications.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p>Nenhuma notificação</p>
        </div>
      ) : (
        userNotifications.map((notification) => (
          <Card key={notification.id} className={`
            transition-all duration-200 hover:shadow-md
            ${!notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''}
          `}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getNotificationIcon(notification.category)}
                  <Badge variant="outline" className="text-xs">
                    {getCategoryLabel(notification.category)}
                  </Badge>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeNotification(notification.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <CardTitle className="text-sm">{notification.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm mb-2">
                {notification.message}
              </CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {notification.timestamp.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                {!notification.read && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => markAsRead(notification.id)}
                    className="text-xs"
                  >
                    Marcar como lida
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

// Company-specific notification templates
export const companyNotificationTemplates = {
  newSale: (data: { customer: string; amount: number }) => ({
    type: 'company' as const,
    category: 'sale' as const,
    title: 'Nova Venda Registrada',
    message: `Cliente ${data.customer} realizou uma compra de R$ ${data.amount.toFixed(2)}`,
    data
  }),
  
  cashbackPaid: (data: { customer: string; amount: number }) => ({
    type: 'company' as const,
    category: 'cashback' as const,
    title: 'Cashback Pago',
    message: `R$ ${data.amount.toFixed(2)} de cashback foi pago para ${data.customer}`,
    data
  }),

  newClient: (data: { client: string }) => ({
    type: 'company' as const,
    category: 'referral' as const,
    title: 'Novo Cliente Cadastrado',
    message: `${data.client} se cadastrou na sua loja`,
    data
  })
};

// Client-specific notification templates
export const clientNotificationTemplates = {
  cashbackReceived: (data: { store: string; amount: number }) => ({
    type: 'client' as const,
    category: 'cashback' as const,
    title: 'Cashback Confirmado',
    message: `Você recebeu R$ ${data.amount.toFixed(2)} de cashback da ${data.store}`,
    data
  }),

  cashbackUsed: (data: { store: string; amount: number }) => ({
    type: 'client' as const,
    category: 'cashback' as const,
    title: 'Cashback Utilizado',
    message: `R$ ${data.amount.toFixed(2)} de cashback foi usado na ${data.store}`,
    data
  }),

  exclusiveOffer: (data: { store: string; discount: number; cashback?: number }) => ({
    type: 'client' as const,
    category: 'offer' as const,
    title: 'Oferta Exclusiva VIP',
    message: `${data.discount}% de desconto${data.cashback ? ` + ${data.cashback}% cashback` : ''} na ${data.store}`,
    data
  }),

  missionCompleted: (data: { mission: string; reward: string }) => ({
    type: 'client' as const,
    category: 'system' as const,
    title: 'Missão Concluída',
    message: `Parabéns! Você completou "${data.mission}" e ganhou ${data.reward}`,
    data
  })
};
