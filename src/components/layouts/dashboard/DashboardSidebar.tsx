
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';
import { UserType } from '@/types/auth';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardSidebarProps {
  userType: UserType;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ 
  userType, 
  isCollapsed, 
  onToggle 
}) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const clientMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/client/dashboard' },
    { icon: Wallet, label: 'Carteira', href: '/client/wallet' },
    { icon: History, label: 'Transações', href: '/client/transactions' },
    { icon: Target, label: 'Missões', href: '/client/missions' },
    { icon: Lightbulb, label: 'Recomendações', href: '/client/recommendations' },
    { icon: Crown, label: 'Planos', href: '/client/plans' },
    { icon: Crown, label: 'Clube VIP', href: '/client/vip-club' },
    { icon: Building2, label: 'Empresas', href: '/client/companies' },
    { icon: Bell, label: 'Notificações', href: '/client/notifications' },
    { icon: User, label: 'Perfil', href: '/client/profile' },
  ];

  const companyMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/company/dashboard' },
    { icon: Package, label: 'Produtos', href: '/company/products' },
    { icon: Users, label: 'Clientes', href: '/company/clients' },
    { icon: History, label: 'Transações', href: '/company/transactions' },
    { icon: BarChart3, label: 'Relatórios', href: '/company/reports' },
    { icon: TrendingUp, label: 'Performance', href: '/company/performance' },
    { icon: Zap, label: 'Campanhas IA', href: '/company/ai-campaigns' },
    { icon: Building2, label: 'Corporativo', href: '/company/corporate' },
    { icon: CreditCard, label: 'Cashback', href: '/company/cashback-rules' },
    { icon: Puzzle, label: 'Integrações', href: '/company/integrations' },
    { icon: User, label: 'Perfil', href: '/company/profile' },
    { icon: Settings, label: 'Configurações', href: '/company/settings' },
  ];

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  // Don't render sidebar on mobile - it will be handled by mobile navigation
  if (isMobile) return null;

  return (
    <div className={cn(
      "bg-background border-r border-border h-screen flex flex-col transition-all duration-300 fixed left-0 top-0 z-30 shadow-lg",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border flex-shrink-0">
        <div className="flex items-center justify-between">
          {!isCollapsed && <Logo size="sm" />}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="ml-auto hover:bg-accent/20 touch-target"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Navigation with ScrollArea */}
      <ScrollArea className="flex-1 p-4">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 touch-target",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/80",
                      isCollapsed && "justify-center px-2"
                    )}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
};

export default DashboardSidebar;
