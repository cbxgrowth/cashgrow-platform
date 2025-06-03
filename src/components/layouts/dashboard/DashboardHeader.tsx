
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Home, ChevronRight } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import NotificationPopover from '@/components/notifications/NotificationPopover';

interface MenuItem {
  title: string;
  url: string;
}

interface DashboardHeaderProps {
  userType: 'client' | 'company';
  menuItems: MenuItem[];
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userType,
  menuItems
}) => {
  const location = useLocation();
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border/40 bg-background/95 backdrop-blur-xl shadow-sm">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggle} 
            className="hover:bg-accent/50 transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Home className="h-4 w-4" />
              <ChevronRight className="h-3 w-3" />
              <span className="font-medium text-foreground">
                {menuItems.find(item => location.pathname === item.url)?.title || 'Dashboard'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <NotificationPopover />
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-primary">
              {userType === 'client' ? 'Cliente Ativo' : 'Empresa Verificada'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
