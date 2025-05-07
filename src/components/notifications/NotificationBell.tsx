
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';

interface NotificationBellProps {
  onClick?: () => void;
}

const NotificationBell: React.FC<NotificationBellProps> = ({ onClick }) => {
  const { unreadCount } = useNotifications();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="relative"
      aria-label="Notifications"
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
