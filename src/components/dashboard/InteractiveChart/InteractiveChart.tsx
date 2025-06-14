
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartType } from './types';
import { cashbackData, categoriesData, chartStats } from './data';
import {
  AreaChartComponent,
  BarChartComponent,
  CategoriesChart,
  ChartHeader,
  ChartStats
} from './components';

export const InteractiveChart: React.FC = () => {
  const [chartType, setChartType] = useState<ChartType>('area');

  const renderChart = () => {
    switch (chartType) {
      case 'area':
        return <AreaChartComponent data={cashbackData} />;
      case 'bar':
        return <BarChartComponent data={cashbackData} />;
      case 'categories':
        return <CategoriesChart data={categoriesData} />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="pb-3">
        <ChartHeader chartType={chartType} onChartTypeChange={setChartType} />
      </CardHeader>
      <CardContent className="p-2 sm:p-4 pt-0">
        <div className="w-full overflow-hidden">
          {renderChart()}
        </div>
        <ChartStats stats={chartStats} />
      </CardContent>
    </Card>
  );
};
