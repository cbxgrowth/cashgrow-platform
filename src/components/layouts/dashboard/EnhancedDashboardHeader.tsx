
import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { MenuItem } from '@/types/dashboard';
import { UserType } from '@/types/auth';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';
import {
  MobileMenu,
  SearchBar,
  ThemeToggle,
  UserMenu
} from './components';

interface EnhancedDashboardHeaderProps {
  userType: UserType;
  menuItems: MenuItem[];
}

export const EnhancedDashboardHeader: React.FC<EnhancedDashboardHeaderProps> = ({ 
  userType, 
  menuItems 
}) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6 w-full max-w-full">
        {/* Left Side */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {/* Mobile Menu Button */}
          {isMobile && (
            <MobileMenu
              userType={userType}
              menuItems={menuItems}
              isOpen={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            />
          )}

          {/* Mobile Logo */}
          {isMobile && <Logo size="sm" />}

          {/* Search Bar */}
          {!isMobile && <SearchBar isMobile={false} />}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Mobile Search */}
          {isMobile && <SearchBar isMobile={true} />}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Help - Hidden on small mobile */}
          {!isMobile && (
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <HelpCircle className="h-4 w-4" />
            </Button>
          )}

          {/* Notifications */}
          <NotificationCenter />

          {/* User Menu */}
          <UserMenu userType={userType} isMobile={isMobile} />
        </div>
      </div>
    </header>
  );
};
