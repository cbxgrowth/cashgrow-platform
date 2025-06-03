
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
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import { DashboardSidebar } from './dashboard/DashboardSidebar';
import { DashboardHeader } from './dashboard/DashboardHeader';

interface DashboardLayoutProps {
  userType: 'client' | 'company';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
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
      {isMobile && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
      )}

      <DashboardSidebar
        userType={userType}
        menuItems={menuItems}
        userInfo={userInfo}
        onLogout={handleLogout}
        loading={loading}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-64">
        <DashboardHeader
          userType={userType}
          menuItems={menuItems}
        />

        {/* Page Content */}
        <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
