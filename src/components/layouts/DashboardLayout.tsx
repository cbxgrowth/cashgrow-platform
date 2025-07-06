
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { EnhancedDashboardHeader } from './dashboard/EnhancedDashboardHeader';
import { DashboardSidebar } from './dashboard/DashboardSidebar';
import { UserType } from '@/types/auth';
import { getMenuItems } from '@/data/menuItems';
import ChatPlugin from '@/components/chat/ChatPlugin';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { SidebarProvider } from '@/hooks/use-sidebar';

interface DashboardLayoutProps {
  userType: UserType;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuItems = getMenuItems(userType);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarProvider>
      <NotificationProvider>
        <div className="min-h-screen bg-background">
          <EnhancedDashboardHeader userType={userType} menuItems={menuItems} />
          
          <div className="flex">
            <DashboardSidebar 
              userType={userType} 
              isCollapsed={isCollapsed} 
              onToggle={handleToggleSidebar} 
            />
            
            <main className={`flex-1 overflow-hidden transition-all duration-300 ${
              isCollapsed ? 'ml-16' : 'ml-64'
            }`}>
              <div className="h-full overflow-y-auto">
                <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                  <Outlet />
                </div>
              </div>
            </main>
          </div>

          <ChatPlugin />
        </div>
      </NotificationProvider>
    </SidebarProvider>
  );
};

export default DashboardLayout;
