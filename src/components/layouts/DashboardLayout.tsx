
// Layout refatorado com melhor organização e tratamento de erro
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
import { DashboardHeader } from './dashboard/DashboardHeader';
import { 
  getCurrentSession, 
  validateUserType, 
  handleUnauthorizedAccess, 
  performLogout,
  type AuthSession 
} from '@/utils/auth.utils';

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

  // Configuração dos menus com tipagem melhorada
  const clientMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/client/dashboard', badge: null },
    { title: 'Transações', icon: CreditCard, url: '/client/transactions', badge: null },
    { title: 'Perfil', icon: User, url: '/client/profile', badge: null },
    { title: 'Empresas', icon: ShoppingCart, url: '/client/companies', badge: 'Novo' },
    { title: 'Recomendações', icon: Brain, url: '/client/recommendations', badge: null },
    { title: 'Missões', icon: Award, url: '/client/missions', badge: '3' },
    { title: 'Clube VIP', icon: Gift, url: '/client/vip-club', badge: null },
  ] as const;

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
  ] as const;

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

  // Handler de logout melhorado
  const handleLogout = async () => {
    setLoading(true);
    
    const success = await performLogout();
    
    if (success) {
      navigate('/auth/login');
    } else {
      setLoading(false);
    }
  };

  // Effect para verificação inicial
  useEffect(() => {
    checkAuthentication();
  }, [navigate, userType]);

  // Componente de loading melhorado
  const LoadingScreen = () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="text-center space-y-4">
        <div className="relative">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
          <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-primary/20 mx-auto"></div>
        </div>
        <div>
          <p className="text-lg font-medium text-muted-foreground">Carregando sua área...</p>
          <p className="text-sm text-muted-foreground mt-1">Verificando permissões</p>
        </div>
      </div>
    </div>
  );

  // Estados de carregamento e não autenticado
  if (loading) {
    return <LoadingScreen />;
  }

  if (!authenticated) {
    return null;
  }

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Overlay para mobile */}
      {isMobile && sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setSidebarCollapsed(false)}
          aria-label="Fechar menu"
        />
      )}

      <DashboardSidebar
        userType={userType}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Conteúdo principal */}
      <main className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        <DashboardHeader
          userType={userType}
          menuItems={menuItems}
        />

        {/* Conteúdo da página */}
        <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
