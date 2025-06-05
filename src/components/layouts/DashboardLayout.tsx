
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { 
  Home, 
  ShoppingCart, 
  User, 
  Settings, 
  FileText, 
  CreditCard, 
  BarChart2, 
  Users, 
  Brain, 
  Building2, 
  Award, 
  Gift, 
  TrendingUp,
  Loader2
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { DashboardSidebar } from './dashboard/DashboardSidebar';
import { EnhancedDashboardHeader } from './dashboard/EnhancedDashboardHeader';
import { 
  getCurrentSession, 
  validateUserType, 
  handleUnauthorizedAccess, 
  performLogout,
  type AuthSession 
} from '@/utils/auth.utils';
import { MenuItem } from '@/types/dashboard';

interface DashboardLayoutProps {
  userType: 'client' | 'company';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<AuthSession['user'] | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // Configuração dos menus com tipagem corrigida
  const clientMenuItems: MenuItem[] = [
    { title: 'Dashboard', icon: Home, url: '/client/dashboard', badge: null },
    { title: 'Transações', icon: CreditCard, url: '/client/transactions', badge: null },
    { title: 'Perfil', icon: User, url: '/client/profile', badge: null },
    { title: 'Empresas', icon: ShoppingCart, url: '/client/companies', badge: 'Novo' },
    { title: 'Recomendações', icon: Brain, url: '/client/recommendations', badge: null },
    { title: 'Missões', icon: Award, url: '/client/missions', badge: '3' },
    { title: 'Clube VIP', icon: Gift, url: '/client/vip-club', badge: null },
  ];

  const companyMenuItems: MenuItem[] = [
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

  // Função de verificação de autenticação melhorada
  const checkAuthentication = async () => {
    try {
      setLoading(true);
      
      const session = await getCurrentSession();
      
      if (!session) {
        const redirectTo = handleUnauthorizedAccess(undefined, userType);
        navigate(redirectTo);
        return;
      }
      
      if (!validateUserType(session, userType)) {
        const currentUserType = session.user.user_metadata?.user_type;
        const redirectTo = handleUnauthorizedAccess(currentUserType, userType);
        navigate(redirectTo);
        return;
      }
      
      setUserInfo(session.user);
      setAuthenticated(true);
    } catch (error) {
      console.error('Erro na verificação de autenticação:', error);
      navigate('/auth/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    
    const success = await performLogout();
    
    if (success) {
      navigate('/auth/login');
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, [navigate, userType]);

  // Enhanced Loading Screen
  const LoadingScreen = () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="text-center space-y-6">
        <div className="relative">
          <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary" />
          <div className="absolute inset-0 h-16 w-16 rounded-full border-2 border-primary/20 mx-auto animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <p className="text-xl font-semibold text-foreground">Carregando sua área...</p>
          <p className="text-sm text-muted-foreground">Verificando permissões e preparando dashboard</p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <LoadingScreen />;
  }

  if (!authenticated) {
    return null;
  }

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
      {/* Mobile Overlay */}
      {isMobile && !sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={() => setSidebarCollapsed(true)}
          aria-label="Fechar menu"
        />
      )}

      <DashboardSidebar
        userType={userType}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <main className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        <EnhancedDashboardHeader
          userType={userType}
          menuItems={menuItems}
        />

        {/* Page Content */}
        <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
