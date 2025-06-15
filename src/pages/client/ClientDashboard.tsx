
import React from 'react';
import { AdvancedStats } from '@/components/dashboard/AdvancedStats';
import { useProximityNotifications } from '@/hooks/useProximityNotifications';
import { useDashboardAnimations } from './dashboard/hooks/useDashboardAnimations';
import { nearbyCompanies } from './dashboard/data/nearbyCompanies';
import { 
  DashboardHeader, 
  QuickActionsGrid, 
  MainContentGrid, 
  SidebarContent 
} from './dashboard/components';

const ClientDashboard: React.FC = () => {
  // Hook para animações
  useDashboardAnimations();
  
  // Hook para notificações de proximidade
  const { userLocation, locationError, isLocationEnabled } = useProximityNotifications(nearbyCompanies);

  const nextLevelProgress = 75;
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-full mx-auto px-2 sm:px-4">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <DashboardHeader isLocationEnabled={isLocationEnabled} />

          <div className="dashboard-card opacity-0 translate-y-4 w-full">
            <AdvancedStats />
          </div>

          <QuickActionsGrid />
          
          <div className="grid gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 w-full">
            <MainContentGrid nextLevelProgress={nextLevelProgress} />
            <SidebarContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
