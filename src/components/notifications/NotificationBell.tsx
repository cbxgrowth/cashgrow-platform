
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';

const NotificationBell = () => {
  const navigate = useNavigate();
  const { unreadCount } = useNotifications();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        // Detecta automaticamente se é cliente ou empresa com base na URL atual
        const path = window.location.pathname;
        const userType = path.includes('/client/') ? 'client' : 'company';
        navigate(`/${userType}/notifications`);
      }}
      className="relative"
    >
      <Bell className="h-5 w-5" />
      {unreadCount > 0 && (
        <div className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
          <span className="text-[10px] text-primary-foreground font-bold">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        </div>
      )}
    </Button>
  );
};

export default NotificationBell;
