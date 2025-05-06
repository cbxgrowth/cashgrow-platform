
import React from 'react';
import { useNotifications } from '@/contexts/NotificationContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const NotificationsPage: React.FC = () => {
  const { notifications, markAsRead, markAllAsRead, executeAction } = useNotifications();

  const handleNotificationClick = (notificationId: string) => {
    markAsRead(notificationId);
    
    const notification = notifications.find(n => n.id === notificationId);
    
    // Execute action if exists
    if (notification?.metadata?.hasAction) {
      executeAction(notificationId);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Notificações</h1>
        <div className="flex gap-2">
          {notifications.some(n => !n.isRead) && (
            <Button
              variant="outline"
              onClick={markAllAsRead}
              className="text-sm"
            >
              <Check className="mr-2 h-4 w-4" />
              Marcar todas como lidas
            </Button>
          )}
          
          <Button variant="secondary" size="sm" asChild>
            <Link to="./examples">
              Ver exemplos
            </Link>
          </Button>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-8">
        Gerencie suas notificações e preferências de alerta
      </p>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border rounded-lg ${
                !notification.isRead ? 'bg-muted/20 border-primary/30' : 'bg-card'
              } cursor-pointer hover:border-primary/30 transition-colors`}
              onClick={() => handleNotificationClick(notification.id)}
            >
              <h4 className="text-lg font-medium">{notification.title}</h4>
              <p className="text-muted-foreground mt-2">{notification.message}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(notification.createdAt), {
                    addSuffix: true,
                    locale: ptBR
                  })}
                </span>
                {notification.link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      markAsRead(notification.id);
                    }}
                  >
                    <Link to={notification.link}>Ver detalhes</Link>
                  </Button>
                )}
                {!notification.isRead && (
                  <span className="inline-block w-2 h-2 bg-primary rounded-full" />
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 border rounded-lg bg-muted/10">
            <p className="text-muted-foreground">Você não tem notificações</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
