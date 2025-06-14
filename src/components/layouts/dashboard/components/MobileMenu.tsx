
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuItem } from '@/types/dashboard';
import { UserType } from '@/types/auth';
import Logo from '@/components/Logo';

interface MobileMenuProps {
  userType: UserType;
  menuItems: MenuItem[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  userType,
  menuItems,
  isOpen,
  onOpenChange
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b bg-gradient-to-r from-primary/10 to-accent/10">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground mt-2">
              {userType === 'company' ? 'Painel Empresa' : 'Painel Cliente'}
            </p>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.url}>
                  <Link
                    to={item.url}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted group w-full min-w-0"
                    onClick={() => onOpenChange(false)}
                  >
                    <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="flex-1 truncate">{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs flex-shrink-0">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
