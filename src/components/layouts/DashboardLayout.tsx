
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
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
  Menu
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import NotificationBell from '@/components/notifications/NotificationBell';

interface DashboardLayoutProps {
  userType: 'client' | 'company';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isCollapsed, setCollapsed } = useSidebar();

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error || !data.session) {
        toast.error("Sessão expirada ou usuário não autenticado");
        navigate('/auth/login');
        return;
      }
      
      // Verificar se o tipo de usuário corresponde à rota
      const currentUserType = data.session.user.user_metadata?.user_type;
      
      if (currentUserType && currentUserType !== userType) {
        toast.error(`Você não tem acesso ao painel de ${userType === 'client' ? 'cliente' : 'empresa'}`);
        navigate(`/${currentUserType}/dashboard`);
        return;
      }
      
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

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  const clientMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/client/dashboard' },
    { title: 'Transações', icon: CreditCard, url: '/client/transactions' },
    { title: 'Perfil', icon: User, url: '/client/profile' },
    { title: 'Empresas', icon: ShoppingCart, url: '/client/companies' },
    { title: 'Recomendações', icon: Brain, url: '/client/recommendations' },
    { title: 'Missões', icon: Award, url: '/client/missions' },
    { title: 'Clube VIP', icon: Gift, url: '/client/vip-club' },
  ];

  const companyMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/company/dashboard' },
    { title: 'Regras de Cashback', icon: FileText, url: '/company/cashback-rules' },
    { title: 'Clientes', icon: Users, url: '/company/clients' },
    { title: 'Transações', icon: CreditCard, url: '/company/transactions' },
    { title: 'Relatórios', icon: BarChart2, url: '/company/reports' },
    { title: 'Campanhas IA', icon: Brain, url: '/company/ai-campaigns' },
    { title: 'B2B & Corporativo', icon: Building2, url: '/company/corporate' },
    { title: 'Desempenho', icon: TrendingUp, url: '/company/performance' },
    { title: 'Configurações', icon: Settings, url: '/company/settings' },
  ];

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar responsiva com toggle */}
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <div className="p-4 flex items-center justify-between">
              <SidebarGroupLabel className="text-lg font-bold">
                {isCollapsed ? null : (userType === 'client' ? 'Cliente' : 'Empresa')}
              </SidebarGroupLabel>
              {!isCollapsed && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="md:hidden"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-4 w-4" />
                </Button>
              )}
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                
                {/* Theme toggle button */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button 
                      onClick={toggleTheme} 
                      className="flex items-center gap-2 w-full"
                    >
                      {theme === 'dark' ? (
                        <>
                          <Sun className="h-5 w-5" />
                          {!isCollapsed && <span>Modo claro</span>}
                        </>
                      ) : (
                        <>
                          <Moon className="h-5 w-5" />
                          {!isCollapsed && <span>Modo escuro</span>}
                        </>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                {/* Notifications */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to={`/${userType}/notifications`} className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      {!isCollapsed && <span>Notificações</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="text-destructive hover:text-destructive">
                    <button 
                      onClick={handleLogout} 
                      className="flex items-center gap-2 w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <LogOut className="h-5 w-5" />
                      )}
                      {!isCollapsed && <span>Sair</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 h-16 border-b bg-background/95 backdrop-blur flex items-center px-4 gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="md:flex hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="ml-auto flex items-center gap-2">
            <NotificationBell />
            <Button variant="ghost" size="sm" className="font-medium">
              {userType === 'client' ? 'Área do Cliente' : 'Área da Empresa'}
            </Button>
          </div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
