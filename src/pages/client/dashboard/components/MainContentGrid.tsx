
import React from 'react';
import { BalanceCard } from './BalanceCard';
import { TransactionsCard } from './TransactionsCard';
import { ConnectedBusinessesCard } from './ConnectedBusinessesCard';
import { InteractiveChart } from '@/components/dashboard/InteractiveChart';

interface MainContentGridProps {
  nextLevelProgress: number;
}

export const MainContentGrid: React.FC<MainContentGridProps> = ({ nextLevelProgress }) => {
  return (
    <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6 w-full min-w-0">
      <BalanceCard balance="R$ 2.847,90" nextLevelProgress={nextLevelProgress} />
      
      <div className="dashboard-card opacity-0 translate-y-4 w-full">
        <InteractiveChart />
      </div>
      
      <TransactionsCard />
      <ConnectedBusinessesCard />
    </div>
  );
};
