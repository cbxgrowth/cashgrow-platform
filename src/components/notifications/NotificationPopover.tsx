
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import NotificationList from './NotificationList';
import { NotificationBell } from './NotificationBell';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const NotificationPopover: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleViewAll = () => {
    // Determine user type based on current path
    const path = location.pathname;
    const userType = path.includes('/client/') ? 'client' : 'company';
    navigate(`/${userType}/notifications`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <NotificationBell />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <NotificationList limit={5} />
        <div className="p-2 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full"
            onClick={handleViewAll}
          >
            Ver todas notificações
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
