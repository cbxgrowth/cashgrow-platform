
import React from 'react';
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { ChartType } from '../types';

interface ChartHeaderProps {
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({ chartType, onChartTypeChange }) => {
  const getButtonVariant = (type: ChartType) => chartType === type ? 'default' : 'outline';
  
  const getDescription = () => {
    switch (chartType) {
      case 'area': return 'Evolução mensal com meta';
      case 'bar': return 'Comparativo cashback vs gastos';
      case 'categories': return 'Distribuição por categoria';
      default: return '';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <CardTitle className="text-base sm:text-lg">Análise de Cashback</CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {getDescription()}
        </p>
      </div>
      <div className="flex gap-1 sm:gap-2 w-full sm:w-auto">
        <Button
          variant={getButtonVariant('area')}
          size="sm"
          onClick={() => onChartTypeChange('area')}
          className="flex-1 sm:flex-none text-xs h-8"
        >
          Evolução
        </Button>
        <Button
          variant={getButtonVariant('bar')}
          size="sm"
          onClick={() => onChartTypeChange('bar')}
          className="flex-1 sm:flex-none text-xs h-8"
        >
          Comparativo
        </Button>
        <Button
          variant={getButtonVariant('categories')}
          size="sm"
          onClick={() => onChartTypeChange('categories')}
          className="flex-1 sm:flex-none text-xs h-8"
        >
          Categorias
        </Button>
      </div>
    </div>
  );
};
