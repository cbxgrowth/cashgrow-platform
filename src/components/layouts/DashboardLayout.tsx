
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Home, ShoppingCart, User, Settings, FileText, CreditCard, BarChart2, Users, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  userType: 'client' | 'company';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const navigate = useNavigate();

  const clientMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/client/dashboard' },
    { title: 'Transações', icon: CreditCard, url: '/client/transactions' },
    { title: 'Perfil', icon: User, url: '/client/profile' },
    { title: 'Empresas', icon: ShoppingCart, url: '/client/companies' },
  ];

  const companyMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/company/dashboard' },
    { title: 'Regras de Cashback', icon: FileText, url: '/company/cashback-rules' },
    { title: 'Clientes', icon: Users, url: '/company/clients' },
    { title: 'Transações', icon: CreditCard, url: '/company/transactions' },
    { title: 'Relatórios', icon: BarChart2, url: '/company/reports' },
    { title: 'Configurações', icon: Settings, url: '/company/settings' },
  ];

  const menuItems = userType === 'client' ? clientMenuItems : companyMenuItems;

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{userType === 'client' ? 'Cliente' : 'Empresa'}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="text-destructive hover:text-destructive">
                    <button 
                      onClick={() => {
                        // Implementar logout aqui
                        navigate('/auth/login');
                      }} 
                      className="flex items-center gap-2 w-full"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sair</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
