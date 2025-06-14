
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar/sidebar-provider';
import DashboardSidebar from './dashboard/DashboardSidebar';
import { EnhancedDashboardHeader } from './dashboard/EnhancedDashboardHeader';
import { OnboardingProvider } from '../onboarding/OnboardingProvider';
import { UserType } from '@/types/auth';
import CompanySupport from '../plugins/CompanySupport';
import ClientSupport from '../plugins/ClientSupport';
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
  Bell
} from 'lucide-react';

interface DashboardLayoutProps {
  userType: UserType;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const clientMenuItems = [
    { icon: LayoutDashboard, title: 'Dashboard', url: '/client/dashboard' },
    { icon: Wallet, title: 'Carteira', url: '/client/wallet' },
    { icon: History, title: 'Transações', url: '/client/transactions' },
    { icon: Target, title: 'Missões', url: '/client/missions' },
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
    { icon: BarChart3, title: 'Relatórios', url: '/company/reports' },
    { icon: TrendingUp, title: 'Performance', url: '/company/performance' },
    { icon: Zap, title: 'Campanhas IA', url: '/company/ai-campaigns' },
    { icon: Building2, title: 'Corporativo', url: '/company/corporate' },
    { icon: CreditCard, title: 'Cashback', url: '/company/cashback-rules' },
    { icon: Puzzle, title: 'Integrações', url: '/company/integrations' },
    { icon: User, title: 'Perfil', url: '/company/profile' },
    { icon: Settings, title: 'Configurações', url: '/company/settings' },
  ];

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  return (
    <OnboardingProvider userType={userType}>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar 
            userType={userType}
            isCollapsed={sidebarCollapsed}
            onToggle={handleSidebarToggle}
          />
          <div 
            className={`flex-1 flex flex-col transition-all duration-300 ${
              sidebarCollapsed ? 'ml-16' : 'ml-64'
            }`}
          >
            <EnhancedDashboardHeader 
              userType={userType} 
              menuItems={menuItems}
            />
            <main className="flex-1 overflow-auto p-6 bg-muted/30">
              <Outlet />
            </main>
          </div>
        </div>
        
        {/* Conditional Support Plugin */}
        {userType === 'company' ? <CompanySupport /> : <ClientSupport />}
      </SidebarProvider>
    </OnboardingProvider>
  );
};

export default DashboardLayout;
