import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar/sidebar-provider';
import DashboardSidebar from './dashboard/DashboardSidebar';
import { EnhancedDashboardHeader } from './dashboard/EnhancedDashboardHeader';
import { OnboardingProvider } from '../onboarding/OnboardingProvider';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { UserType } from '@/types/auth';
import CompanySupport from '../plugins/CompanySupport';
import ClientSupport from '../plugins/ClientSupport';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  LayoutDashboard, 
  Wallet, 
  History, 
  Target, 
  Lightbulb, 
  Crown, 
  Building2, 
  User,
  Package,
  Users,
  BarChart3,
  Settings,
  Puzzle,
  TrendingUp,
  CreditCard,
  Zap,
  Bell,
  MapPin
} from 'lucide-react';

interface DashboardLayoutProps {
  userType: UserType;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const clientMenuItems = [
    { icon: LayoutDashboard, title: 'Dashboard', url: '/client/dashboard' },
    { icon: Wallet, title: 'Carteira', url: '/client/wallet' },
    { icon: History, title: 'Transações', url: '/client/transactions' },
    { icon: Target, title: 'Missões', url: '/client/missions' },
    { icon: BarChart3, title: 'Análise de Gastos', url: '/client/analytics' },
    { icon: Lightbulb, title: 'Recomendações', url: '/client/recommendations' },
    { icon: Crown, title: 'Planos', url: '/client/plans' },
    { icon: Crown, title: 'Clube VIP', url: '/client/vip-club' },
    { icon: Building2, title: 'Empresas', url: '/client/companies' },
    { icon: Bell, title: 'Notificações', url: '/client/notifications' },
    { icon: User, title: 'Perfil', url: '/client/profile' },
  ];

  const companyMenuItems = [
    { icon: LayoutDashboard, title: 'Dashboard', url: '/company/dashboard' },
    { icon: Package, title: 'Produtos', url: '/company/products' },
    { icon: Users, title: 'Clientes', url: '/company/clients' },
    { icon: History, title: 'Transações', url: '/company/transactions' },
    { icon: BarChart3, title: 'Analytics', url: '/company/analytics' },
    { icon: TrendingUp, title: 'Performance', url: '/company/performance' },
    { icon: Zap, title: 'Campanhas IA', url: '/company/ai-campaigns' },
    { icon: Building2, title: 'Corporativo', url: '/company/corporate' },
    { icon: CreditCard, title: 'Cashback', url: '/company/cashback-rules' },
    { icon: MapPin, title: 'Usuários Próximos', url: '/company/proximity' },
    { icon: Puzzle, title: 'Integrações API', url: '/company/api-integration' },
    { icon: User, title: 'Perfil', url: '/company/profile' },
    { icon: Settings, title: 'Configurações', url: '/company/settings' },
  ];

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  return (
    <NotificationProvider>
      <OnboardingProvider userType={userType}>
        <SidebarProvider>
          <div className="min-h-screen flex w-full overflow-x-hidden">
            {/* Mobile-aware sidebar */}
            {!isMobile && (
              <DashboardSidebar 
                userType={userType}
                isCollapsed={sidebarCollapsed}
                onToggle={handleSidebarToggle}
              />
            )}
            
            <div 
              className={`flex-1 flex flex-col transition-all duration-300 w-full min-w-0 ${
                !isMobile ? (sidebarCollapsed ? 'ml-16' : 'ml-64') : 'ml-0'
              }`}
            >
              <EnhancedDashboardHeader 
                userType={userType} 
                menuItems={menuItems}
              />
              <main className="flex-1 overflow-auto bg-muted/30 safe-area-inset w-full">
                <div className="w-full">
                  <Outlet />
                </div>
              </main>
            </div>
          </div>
          
          {/* Conditional Support Plugin */}
          {userType === 'company' ? <CompanySupport /> : <ClientSupport />}
        </SidebarProvider>
      </OnboardingProvider>
    </NotificationProvider>
  );
};

export default DashboardLayout;
