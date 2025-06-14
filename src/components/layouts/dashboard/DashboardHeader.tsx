
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Menu,
  Search,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { performLogout } from '@/utils/auth.utils';
import { MenuItem } from '@/types/dashboard';
import { UserType } from '@/types/auth';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

interface DashboardHeaderProps {
  userType: UserType;
  menuItems: MenuItem[];
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  userType, 
  menuItems 
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const success = await performLogout();
      if (success) {
        navigate('/auth/login');
      }
    } catch (error) {
      console.error('Erro no logout:', error);
      toast.error('Erro ao fazer logout');
    }
  };

  const userInitials = userType === 'company' ? 'EM' : 'CL';
  const userLabel = userType === 'company' ? 'Empresa' : 'Cliente';

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6">
        {/* Left Side - Mobile menu + Logo for mobile */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Menu Button */}
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="touch-target">
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
                  <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                      {menuItems.map((item) => (
                        <li key={item.url}>
                          <Link
                            to={item.url}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted touch-target"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-5 w-5" />
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs">
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
          )}

          {/* Mobile Logo */}
          {isMobile && <Logo size="sm" />}

          {/* Search Bar - Hidden on small mobile */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar..." 
                  className="pl-10 h-9 focus-ring"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Search Button */}
          {isMobile && (
            <Button variant="ghost" size="icon" className="touch-target">
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative touch-target">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 sm:px-3 py-2 touch-target">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="text-xs bg-primary/10 text-primary">{userInitials}</AvatarFallback>
                </Avatar>
                {!isMobile && (
                  <div className="hidden sm:flex flex-col items-start">
                    <span className="text-sm font-medium">{userLabel}</span>
                    <span className="text-xs text-muted-foreground">
                      {userType === 'company' ? 'Administrador' : 'Usuário'}
                    </span>
                  </div>
                )}
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur">
              <DropdownMenuItem asChild>
                <Link to={`/${userType}/profile`} className="flex items-center gap-2 touch-target">
                  <User className="h-4 w-4" />
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/${userType}/settings`} className="flex items-center gap-2 touch-target">
                  <Settings className="h-4 w-4" />
                  Configurações
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive touch-target">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
