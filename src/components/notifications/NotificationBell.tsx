
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import NotificationList from './NotificationList';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NotificationBell: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { unreadCount } = useNotifications();
  const location = useLocation();
  
  const userType = location.pathname.includes('/client/') ? 'client' : 'company';
  const notificationsPath = `/${userType}/notifications`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex flex-col">
          <NotificationList onClose={() => setOpen(false)} />
          <div className="p-2 border-t">
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to={notificationsPath} onClick={() => setOpen(false)}>
                Ver todas notificações
              </Link>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
