
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  Globe
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { performLogout } from '@/utils/auth.utils';
import { UserType } from '@/types/auth';
import { toast } from 'sonner';

interface UserMenuProps {
  userType: UserType;
  isMobile: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = ({ userType, isMobile }) => {
  const navigate = useNavigate();

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

  const userInitials = userType === 'company' ? 'EM' : 'CL';
  const userLabel = userType === 'company' ? 'Empresa' : 'Cliente';
  const userEmail = 'usuario@exemplo.com';

  return (
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
  );
};
