
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";

interface SalesInsights {
  salesTrends: {
    trend: 'up' | 'down';
    percentage: number;
    description: string;
    timeframe: string;
  };
  customerBehavior: {
    retentionRate: number;
    averageOrderValue: number;
    frequencyIncrease: number;
  };
}

interface SalesPerformanceCardsProps {
  insights: SalesInsights;
}

export const SalesPerformanceCards: React.FC<SalesPerformanceCardsProps> = ({ insights }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            {insights.salesTrends.trend === 'up' ? 
              <TrendingUp className="h-4 w-4 text-green-600" /> :
              <TrendingDown className="h-4 w-4 text-red-600" />
            }
            Performance de Vendas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            +{insights.salesTrends.percentage}%
          </div>
          <p className="text-xs text-green-700">{insights.salesTrends.description}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" />
            Retenção de Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">
            {insights.customerBehavior.retentionRate}%
          </div>
          <p className="text-xs text-blue-700">+{insights.customerBehavior.frequencyIncrease}% frequência</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-purple-600" />
            Ticket Médio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-600">
            R$ {insights.customerBehavior.averageOrderValue.toFixed(2)}
          </div>
          <p className="text-xs text-purple-700">Otimizado por IA</p>
        </CardContent>
      </Card>
    </div>
  );
};
