
import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Settings, 
  ShoppingCart, 
  CreditCard, 
  BarChart, 
  Menu, 
  X,
  LogOut
} from "lucide-react";
import Logo from '../Logo';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  end?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, children, end }) => {
  const location = useLocation();
  const isActive = end 
    ? location.pathname === to
    : location.pathname.startsWith(to);

  return (
    <NavLink 
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )
      }
      end={end}
    >
      {icon}
      {children}
    </NavLink>
  );
};

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isCompanyDashboard = location.pathname.startsWith('/company');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <Logo size="sm" />
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-background shadow-lg p-6 z-50">
            <div className="flex items-center justify-between mb-8">
              <Logo size="sm" />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleSidebar}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <SidebarContent isCompanyDashboard={isCompanyDashboard} />
          </div>
        </div>
      )}
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r">
        <div className="flex flex-col flex-grow pt-5 bg-background overflow-y-auto">
          <div className="px-4 mb-6">
            <Logo size="sm" />
          </div>
          <div className="flex-1 px-3">
            <SidebarContent isCompanyDashboard={isCompanyDashboard} />
          </div>
          <div className="p-3">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <LogOut className="mr-2 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 md:pl-64">
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarContent: React.FC<{isCompanyDashboard: boolean}> = ({ isCompanyDashboard }) => {
  return isCompanyDashboard ? (
    <nav className="space-y-1">
      <SidebarLink to="/company/dashboard" icon={<Home className="h-4 w-4" />} end>
        Dashboard
      </SidebarLink>
      <SidebarLink to="/company/customers" icon={<Users className="h-4 w-4" />}>
        Clientes
      </SidebarLink>
      <SidebarLink to="/company/transactions" icon={<ShoppingCart className="h-4 w-4" />}>
        Transações
      </SidebarLink>
      <SidebarLink to="/company/cashback-rules" icon={<CreditCard className="h-4 w-4" />}>
        Regras de Cashback
      </SidebarLink>
      <SidebarLink to="/company/reports" icon={<BarChart className="h-4 w-4" />}>
        Relatórios
      </SidebarLink>
      <SidebarLink to="/company/settings" icon={<Settings className="h-4 w-4" />}>
        Configurações
      </SidebarLink>
    </nav>
  ) : (
    <nav className="space-y-1">
      <SidebarLink to="/client/dashboard" icon={<Home className="h-4 w-4" />} end>
        Dashboard
      </SidebarLink>
      <SidebarLink to="/client/transactions" icon={<ShoppingCart className="h-4 w-4" />}>
        Transações
      </SidebarLink>
      <SidebarLink to="/client/cards" icon={<CreditCard className="h-4 w-4" />}>
        Cartões e Pagamentos
      </SidebarLink>
      <SidebarLink to="/client/settings" icon={<Settings className="h-4 w-4" />}>
        Configurações
      </SidebarLink>
    </nav>
  );
};

export default DashboardLayout;
