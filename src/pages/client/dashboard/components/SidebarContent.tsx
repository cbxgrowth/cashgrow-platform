
import React from 'react';
import { SummaryCard } from './SummaryCard';
import { AchievementsCard } from './AchievementsCard';

export const SidebarContent: React.FC = () => {
  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full min-w-0">
      <SummaryCard />
      <AchievementsCard />
    </div>
  );
};
