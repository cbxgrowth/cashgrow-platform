
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Menu,
  Search,
  ChevronDown,
  Moon,
  Sun,
  Globe,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { performLogout } from '@/utils/auth.utils';
import { MenuItem } from '@/types/dashboard';
import { UserType } from '@/types/auth';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

interface EnhancedDashboardHeaderProps {
  userType: UserType;
  menuItems: MenuItem[];
}

export const EnhancedDashboardHeader: React.FC<EnhancedDashboardHeaderProps> = ({ 
  userType, 
  menuItems 
}) => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = async () => {
    try {
      const success = await performLogout();
      if (success) {
        toast.success('Logout realizado com sucesso!');
        navigate('/auth/login');
      }
    } catch (error) {
      console.error('Erro no logout:', error);
      toast.error('Erro ao fazer logout');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Buscando por: ${searchQuery}`);
      // Implementar lógica de busca aqui
    }
  };

  const userInitials = userType === 'company' ? 'EM' : 'CL';
  const userLabel = userType === 'company' ? 'Empresa' : 'Cliente';
  const userEmail = 'usuario@exemplo.com'; // Pegar do contexto de auth

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6 w-full max-w-full">
        {/* Left Side */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {/* Mobile Menu Button */}
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
                            onClick={() => setMobileMenuOpen(false)}
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
          )}

          {/* Mobile Logo */}
          {isMobile && <Logo size="sm" />}

          {/* Search Bar - Hidden on mobile */}
          {!isMobile && (
            <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-sm min-w-0 flex-1">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar..." 
                  className="pl-10 h-9 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Mobile Search Button */}
          {isMobile && (
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="flex-shrink-0">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Help - Hidden on small mobile */}
          {!isMobile && (
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <HelpCircle className="h-4 w-4" />
            </Button>
          )}

          {/* Notifications */}
          <NotificationCenter />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 h-auto min-w-0">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="text-xs font-medium">{userInitials}</AvatarFallback>
                </Avatar>
                {!isMobile && (
                  <div className="hidden md:flex flex-col items-start text-left min-w-0">
                    <span className="text-sm font-medium truncate">{userLabel}</span>
                    <span className="text-xs text-muted-foreground truncate max-w-[100px]">
                      {userEmail}
                    </span>
                  </div>
                )}
                <ChevronDown className="h-3 w-3 text-muted-foreground flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userLabel}</p>
                  <p className="text-xs leading-none text-muted-foreground truncate">{userEmail}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to={`/${userType}/profile`} className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Meu Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/${userType}/settings`} className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Configurações
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Globe className="h-4 w-4 mr-2" />
                Idioma: Português
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Sair da conta
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
