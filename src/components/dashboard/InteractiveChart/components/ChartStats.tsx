
import React from 'react';
import { ChartStats as ChartStatsType } from '../types';

interface ChartStatsProps {
  stats: ChartStatsType;
}

export const ChartStats: React.FC<ChartStatsProps> = ({ stats }) => {
  return (
    <div className="mt-4 pt-4 border-t border-border/50">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Total Cashback</p>
          <p className="text-sm sm:text-base font-bold text-primary">{stats.totalCashback}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Média Mensal</p>
          <p className="text-sm sm:text-base font-bold text-green-600">{stats.monthlyAverage}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Melhor Mês</p>
          <p className="text-sm sm:text-base font-bold text-purple-600">{stats.bestMonth}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Crescimento</p>
          <p className="text-sm sm:text-base font-bold text-blue-600">{stats.growth}</p>
        </div>
      </div>
    </div>
  );
};
