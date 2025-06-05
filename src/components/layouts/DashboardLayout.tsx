
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar/sidebar-provider';
import DashboardSidebar from './dashboard/DashboardSidebar';
import { EnhancedDashboardHeader } from './dashboard/EnhancedDashboardHeader';
import { OnboardingProvider } from '../onboarding/OnboardingProvider';
import { UserType } from '@/types/auth';

interface DashboardLayoutProps {
  userType: UserType;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <OnboardingProvider userType={userType}>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar 
            userType={userType}
            isCollapsed={sidebarCollapsed}
            onToggle={handleSidebarToggle}
          />
          <div className="flex-1 flex flex-col">
            <EnhancedDashboardHeader userType={userType} />
            <main className="flex-1 p-6 bg-muted/30">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </OnboardingProvider>
  );
};

export default DashboardLayout;
