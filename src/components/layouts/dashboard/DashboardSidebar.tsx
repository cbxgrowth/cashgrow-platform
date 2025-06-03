
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  useSidebar
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChevronRight, PanelLeftClose, PanelLeft, X, Sun, Moon, Bell, LogOut, Loader2 } from 'lucide-react';
import { useTheme } from '@/components/ui/theme-provider';
import { useIsMobile } from '@/hooks/use-mobile';

interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  badge?: string | null;
}

interface DashboardSidebarProps {
  userType: 'client' | 'company';
  menuItems: MenuItem[];
  userInfo: any;
  onLogout: () => void;
  loading: boolean;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  userType,
  menuItems,
  userInfo,
  onLogout,
  loading
}) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { isOpen, isCollapsed, toggle, setCollapsed } = useSidebar();
  const isMobile = useIsMobile();

  const isActiveRoute = (url: string) => location.pathname === url;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMenuItemClick = () => {
    if (isMobile && isOpen) {
      toggle();
    }
  };

  const getUserDisplayName = () => {
    if (!userInfo) return 'Usuário';
    
    if (userType === 'company') {
      return userInfo.user_metadata?.company_name || 
             userInfo.user_metadata?.full_name || 
             userInfo.email?.split('@')[0] || 'Empresa';
    } else {
      return userInfo.user_metadata?.full_name || 
             userInfo.email?.split('@')[0] || 'Cliente';
    }
  };

  const getUserInitials = () => {
    const name = getUserDisplayName();
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <Sidebar className={`z-50 border-r border-border/40 bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-300 fixed inset-y-0 left-0 ${
      isCollapsed ? 'w-16' : 'w-64'
    } ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
      <SidebarHeader className="border-b border-border/40 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${
              userType === 'client' 
                ? 'from-blue-500 to-cyan-500' 
                : 'from-purple-500 to-pink-500'
            } flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
              {userType === 'client' ? 'C' : 'E'}
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {userType === 'client' ? 'Área do Cliente' : 'Área da Empresa'}
                </h2>
              </div>
            )}
          </div>
          
          {!isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              className="hidden lg:flex h-8 w-8 hover:bg-primary/10"
              onClick={() => setCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <PanelLeft className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </Button>
          )}
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden h-8 w-8 hover:bg-primary/10"
              onClick={toggle}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className={`px-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase ${isCollapsed ? 'sr-only' : ''}`}>
            Navegação Principal
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const isActive = isActiveRoute(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`group relative overflow-hidden rounded-xl transition-all duration-200 hover:shadow-md ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25' 
                          : 'hover:bg-accent/50 hover:text-accent-foreground'
                      } ${isCollapsed ? 'justify-center px-2 w-12 h-12 mx-auto' : ''}`}
                    >
                      <Link 
                        to={item.url} 
                        className={`flex items-center gap-3 p-3 ${isCollapsed ? 'justify-center' : ''}`}
                        onClick={handleMenuItemClick}
                        title={isCollapsed ? item.title : undefined}
                      >
                        <item.icon className={`h-5 w-5 transition-transform group-hover:scale-110 flex-shrink-0 ${
                          isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
                        }`} />
                        {!isCollapsed && (
                          <>
                            <span className="font-medium flex-1 truncate">{item.title}</span>
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <Badge 
                                  variant={isActive ? "secondary" : "outline"} 
                                  className="text-xs px-2 py-0.5"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                              {isActive && (
                                <ChevronRight className="h-4 w-4 text-primary-foreground/70" />
                              )}
                            </div>
                          </>
                        )}
                        {isActive && (
                          <div className="absolute inset-y-0 left-0 w-1 bg-primary-foreground/30 rounded-r-full"></div>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className={`px-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase ${isCollapsed ? 'sr-only' : ''}`}>
            Ações Rápidas
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={`group rounded-xl transition-all duration-200 hover:bg-accent/50 ${isCollapsed ? 'justify-center px-2 w-12 h-12 mx-auto' : ''}`}>
                  <button 
                    onClick={toggleTheme} 
                    className={`flex items-center gap-3 p-3 w-full ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? (theme === 'dark' ? 'Modo Claro' : 'Modo Escuro') : undefined}
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-transform group-hover:scale-110 flex-shrink-0" />
                        {!isCollapsed && <span className="font-medium">Modo Claro</span>}
                      </>
                    ) : (
                      <>
                        <Moon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-transform group-hover:scale-110 flex-shrink-0" />
                        {!isCollapsed && <span className="font-medium">Modo Escuro</span>}
                      </>
                    )}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={`group rounded-xl transition-all duration-200 hover:bg-accent/50 ${isCollapsed ? 'justify-center px-2 w-12 h-12 mx-auto' : ''}`}>
                  <Link 
                    to={`/${userType}/notifications`} 
                    className={`flex items-center gap-3 p-3 ${isCollapsed ? 'justify-center' : ''}`}
                    onClick={handleMenuItemClick}
                    title={isCollapsed ? 'Notificações' : undefined}
                  >
                    <div className="relative">
                      <Bell className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-transform group-hover:scale-110 flex-shrink-0" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                        3
                      </div>
                    </div>
                    {!isCollapsed && (
                      <>
                        <span className="font-medium flex-1">Notificações</span>
                        <Badge variant="destructive" className="text-xs px-2 py-0.5">3</Badge>
                      </>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 bg-gradient-to-r from-muted/50 to-muted/30">
        <div className="p-4 space-y-3">
          {!isCollapsed && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{getUserDisplayName()}</p>
                <p className="text-xs text-muted-foreground truncate">{userInfo?.email}</p>
              </div>
            </div>
          )}
          
          {isCollapsed && (
            <div className="flex justify-center">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20" title={getUserDisplayName()}>
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xs">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
            </div>
          )}
          
          <SidebarMenuButton 
            asChild 
            className={`group rounded-xl transition-all duration-200 hover:bg-destructive/10 hover:text-destructive ${isCollapsed ? 'justify-center px-2 w-12 h-12 mx-auto' : ''}`}
          >
            <button 
              onClick={onLogout} 
              className={`flex items-center gap-3 p-3 w-full ${isCollapsed ? 'justify-center' : ''}`}
              disabled={loading}
              title={isCollapsed ? 'Sair' : undefined}
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin flex-shrink-0" />
              ) : (
                <LogOut className="h-5 w-5 transition-transform group-hover:scale-110 flex-shrink-0" />
              )}
              {!isCollapsed && <span className="font-medium">Sair</span>}
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
