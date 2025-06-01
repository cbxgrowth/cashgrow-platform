
import React from 'react';
import PerformanceMetrics from '@/components/analytics/PerformanceMetrics';

const CompanyPerformance: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
        <p className="text-muted-foreground">
          Análise detalhada da performance do seu programa de cashback
        </p>
      </div>
      
      <PerformanceMetrics />
    </div>
  );
};

export default CompanyPerformance;
