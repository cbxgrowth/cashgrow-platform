
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
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
import { 
  Home, 
  ShoppingCart, 
  User, 
  Settings, 
  FileText, 
  CreditCard, 
  BarChart2, 
  Users, 
  LogOut, 
  Brain, 
  Building2, 
  Award, 
  Gift, 
  TrendingUp,
  Loader2,
  Sun,
  Moon,
  Bell,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  PanelLeftClose,
  PanelLeft
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import NotificationPopover from '@/components/notifications/NotificationPopover';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  userType: 'client' | 'company';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const { theme, setTheme } = useTheme();
  const { isOpen, isCollapsed, toggle, setCollapsed } = useSidebar();
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error || !data.session) {
        toast.error("Sessão expirada ou usuário não autenticado");
        navigate('/auth/login');
        return;
      }
      
      const currentUserType = data.session.user.user_metadata?.user_type;
      
      if (currentUserType && currentUserType !== userType) {
        toast.error(`Você não tem acesso ao painel de ${userType === 'client' ? 'cliente' : 'empresa'}`);
        navigate(`/${currentUserType}/dashboard`);
        return;
      }
      
      setUserInfo(data.session.user);
      setAuthenticated(true);
      setLoading(false);
    };
    
    checkAuth();
  }, [navigate, userType]);

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast.error("Erro ao sair", {
        description: error.message,
      });
      setLoading(false);
      return;
    }
    
    toast.success("Logout realizado com sucesso");
    navigate('/auth/login');
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMenuItemClick = () => {
    // Fechar menu automaticamente no mobile
    if (isMobile && isOpen) {
      toggle();
    }
  };

  const clientMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/client/dashboard', badge: null },
    { title: 'Transações', icon: CreditCard, url: '/client/transactions', badge: null },
    { title: 'Perfil', icon: User, url: '/client/profile', badge: null },
    { title: 'Empresas', icon: ShoppingCart, url: '/client/companies', badge: 'Novo' },
    { title: 'Recomendações', icon: Brain, url: '/client/recommendations', badge: null },
    { title: 'Missões', icon: Award, url: '/client/missions', badge: '3' },
    { title: 'Clube VIP', icon: Gift, url: '/client/vip-club', badge: null },
  ];

  const companyMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/company/dashboard', badge: null },
    { title: 'Regras de Cashback', icon: FileText, url: '/company/cashback-rules', badge: null },
    { title: 'Clientes', icon: Users, url: '/company/clients', badge: null },
    { title: 'Transações', icon: CreditCard, url: '/company/transactions', badge: null },
    { title: 'Relatórios', icon: BarChart2, url: '/company/reports', badge: null },
    { title: 'Campanhas IA', icon: Brain, url: '/company/ai-campaigns', badge: 'Beta' },
    { title: 'B2B & Corporativo', icon: Building2, url: '/company/corporate', badge: null },
    { title: 'Desempenho', icon: TrendingUp, url: '/company/performance', badge: null },
    { title: 'Integrações', icon: Settings, url: '/company/integrations', badge: null },
    { title: 'Configurações', icon: Settings, url: '/company/settings', badge: null },
  ];

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  const isActiveRoute = (url: string) => {
    return location.pathname === url;
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted/30">
        <div className="text-center space-y-4">
          <div className="relative">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-primary/20 mx-auto"></div>
          </div>
          <p className="text-lg font-medium text-muted-foreground">Carregando sua área...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <Sidebar className={`z-50 border-r border-border/40 bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        isCollapsed ? 'lg:w-16' : 'lg:w-64'
      }`}>
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
            
            {/* Desktop Collapse Button */}
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
            
            {/* Mobile Close Button */}
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

        <SidebarContent className="px-2 py-4">
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
                        } ${isCollapsed ? 'justify-center px-2' : ''}`}
                      >
                        <Link 
                          to={item.url} 
                          className={`flex items-center gap-3 p-3 ${isCollapsed ? 'justify-center' : ''}`}
                          onClick={handleMenuItemClick}
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

          {/* Quick Actions */}
          <SidebarGroup className="mt-8">
            <SidebarGroupLabel className={`px-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase ${isCollapsed ? 'sr-only' : ''}`}>
              Ações Rápidas
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu className="space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`group rounded-xl transition-all duration-200 hover:bg-accent/50 ${isCollapsed ? 'justify-center px-2' : ''}`}>
                    <button 
                      onClick={toggleTheme} 
                      className={`flex items-center gap-3 p-3 w-full ${isCollapsed ? 'justify-center' : ''}`}
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
                  <SidebarMenuButton asChild className={`group rounded-xl transition-all duration-200 hover:bg-accent/50 ${isCollapsed ? 'justify-center px-2' : ''}`}>
                    <Link 
                      to={`/${userType}/notifications`} 
                      className={`flex items-center gap-3 p-3 ${isCollapsed ? 'justify-center' : ''}`}
                      onClick={handleMenuItemClick}
                    >
                      <Bell className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-transform group-hover:scale-110 flex-shrink-0" />
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
            {/* User Info */}
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
            
            {/* User Avatar when collapsed */}
            {isCollapsed && (
              <div className="flex justify-center">
                <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xs">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
            
            {/* Logout Button */}
            <SidebarMenuButton 
              asChild 
              className={`group rounded-xl transition-all duration-200 hover:bg-destructive/10 hover:text-destructive ${isCollapsed ? 'justify-center px-2' : ''}`}
            >
              <button 
                onClick={handleLogout} 
                className={`flex items-center gap-3 p-3 w-full ${isCollapsed ? 'justify-center' : ''}`}
                disabled={loading}
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

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
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
                    {menuItems.find(item => isActiveRoute(item.url))?.title || 'Dashboard'}
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

        {/* Page Content */}
        <div className="p-6 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
