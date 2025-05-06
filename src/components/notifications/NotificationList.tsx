
import React from 'react';
import { useNotifications } from '@/contexts/NotificationContext';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, Info, AlertCircle, CheckCircle, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Notification } from '@/types/notifications';

interface NotificationListProps {
  onClose?: () => void;
  limit?: number;
}

const NotificationList: React.FC<NotificationListProps> = ({ 
  onClose,
  limit
}) => {
  const { notifications, markAsRead, markAllAsRead, executeAction } = useNotifications();
  const navigate = useNavigate();
  
  const displayNotifications = limit ? notifications.slice(0, limit) : notifications;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification.id);
    
    try {
      // Verificar se a notificação tem uma ação personalizada
      if (notification.metadata?.hasAction) {
        executeAction(notification.id);
      } 
      // Caso contrário, se tiver um link, navegar para ele
      else if (notification.link) {
        navigate(notification.link);
      }
    } catch (error) {
      console.error('Error handling notification click:', error);
    }
    
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-medium">Notificações</h3>
        {notifications.some(n => !n.isRead) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllAsRead}
            className="text-xs text-primary"
          >
            <Check className="mr-1 h-3 w-3" />
            Marcar todas como lidas
          </Button>
        )}
      </div>
      <ScrollArea className="h-[300px]">
        {displayNotifications.length > 0 ? (
          <div>
            {displayNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                  !notification.isRead ? 'bg-muted/20' : ''
                }`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getIcon(notification.type)}</div>
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium ${!notification.isRead ? 'text-primary' : ''}`}>
                      {notification.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatDistanceToNow(new Date(notification.createdAt), { 
                        addSuffix: true,
                        locale: ptBR
                      })}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center text-muted-foreground">
            <Bell className="h-10 w-10 text-muted-foreground/50 mb-3" />
            <p>Você não tem notificações</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default NotificationList;
