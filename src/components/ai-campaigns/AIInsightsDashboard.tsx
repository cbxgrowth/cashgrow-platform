
import React from 'react';
import { SalesPerformanceCards, LocationIntelligence, AIPredictions } from './insights';

interface AIInsightsDashboardProps {
  companyId: string;
}

export const AIInsightsDashboard: React.FC<AIInsightsDashboardProps> = ({ companyId }) => {
  // Dados mockados - em produção viriam da análise da IA
  const insights = {
    salesTrends: {
      trend: 'up' as const,
      percentage: 15.8,
      description: 'Vendas aumentaram com campanhas de proximidade',
      timeframe: 'últimos 30 dias'
    },
    customerBehavior: {
      retentionRate: 78,
      averageOrderValue: 145.50,
      frequencyIncrease: 12.3
    },
    locationInsights: {
      peakHours: '14:00 - 18:00',
      bestPerformingRadius: '10km',
      conversionByDistance: [
        { radius: '0-10km', conversion: 8.5 },
        { radius: '10-50km', conversion: 4.2 },
        { radius: '50-100km', conversion: 1.8 }
      ]
    },
    predictions: [
      {
        id: 1,
        title: 'Pico de Vendas Esperado',
        description: 'Baseado em padrões históricos, esperamos 25% mais vendas na próxima semana',
        confidence: 85,
        type: 'sales'
      },
      {
        id: 2,
        title: 'Oportunidade de Retenção',
        description: '127 clientes com risco de churn nos próximos 15 dias',
        confidence: 92,
        type: 'retention'
      },
      {
        id: 3,
        title: 'Expansão Geográfica',
        description: 'Nova região identificada com 300+ usuários potenciais',
        confidence: 74,
        type: 'expansion'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <SalesPerformanceCards insights={insights} />
      <LocationIntelligence locationInsights={insights.locationInsights} />
      <AIPredictions predictions={insights.predictions} />
    </div>
  );
};
