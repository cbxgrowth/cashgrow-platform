
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Settings, 
  FileText, 
  BarChart3,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: Users, label: 'Usuários', href: '/admin/users' },
  { icon: Building2, label: 'Empresas', href: '/admin/companies' },
  { icon: FileText, label: 'Audit Logs', href: '/admin/audit-logs' },
  { icon: Settings, label: 'Configurações', href: '/admin/settings' },
];

export const AdminSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-background border-r border-border h-screen flex flex-col w-64 fixed left-0 top-0 z-40">
      <div className="p-4 border-b border-border">
        <Logo size="sm" />
        <div className="flex items-center gap-2 mt-2">
          <Shield className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium text-red-500">Super Admin</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
