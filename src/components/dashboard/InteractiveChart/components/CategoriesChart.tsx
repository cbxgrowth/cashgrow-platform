
import React from 'react';
import { CategoryData } from '../types';

interface CategoriesChartProps {
  data: CategoryData[];
}

export const CategoriesChart: React.FC<CategoriesChartProps> = ({ data }) => {
  return (
    <div className="flex items-center justify-center h-[280px] p-4">
      <div className="w-full max-w-md space-y-3">
        {data.map((category, index) => (
          <div 
            key={index} 
            className="group hover:bg-muted/50 transition-all duration-200 p-3 rounded-lg border border-transparent hover:border-border/50"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full shadow-sm" 
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <span className="text-sm font-bold text-primary">{category.value}%</span>
            </div>
            <div className="ml-7">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>R$ {category.amount}</span>
                <span>cashback</span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${category.value}%`,
                    backgroundColor: category.color,
                    opacity: 0.8
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
