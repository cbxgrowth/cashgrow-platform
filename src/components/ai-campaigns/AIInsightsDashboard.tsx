
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MapPin, 
  Calendar,
  Target,
  Brain,
  BarChart3,
  DollarSign,
  Clock
} from "lucide-react";

interface AIInsightsDashboardProps {
  companyId: string;
}

export const AIInsightsDashboard: React.FC<AIInsightsDashboardProps> = ({ companyId }) => {
  // Dados mockados - em produção viriam da análise da IA
  const insights = {
    salesTrends: {
      trend: 'up',
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
      {/* Sales Performance */}
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

      {/* Location Intelligence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            Inteligência de Localização
          </CardTitle>
          <CardDescription>
            Análise comportamental baseada em proximidade geográfica
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">Conversão por Distância</h4>
              <div className="space-y-3">
                {insights.locationInsights.conversionByDistance.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{item.radius}</span>
                    <div className="flex items-center gap-2 flex-1 ml-4">
                      <Progress value={item.conversion * 10} className="h-2" />
                      <span className="text-sm font-medium">{item.conversion}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Insights Temporais</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Horário de pico: {insights.locationInsights.peakHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Melhor raio: {insights.locationInsights.bestPerformingRadius}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Previsões da IA
          </CardTitle>
          <CardDescription>
            Análises preditivas para otimização de estratégias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.predictions.map((prediction) => (
              <div key={prediction.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{prediction.title}</h4>
                  <Badge variant={prediction.confidence > 80 ? 'default' : 'secondary'}>
                    {prediction.confidence}% confiança
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{prediction.description}</p>
                <div className="flex items-center gap-2">
                  <Progress value={prediction.confidence} className="h-2 flex-1" />
                  <span className="text-xs text-gray-500">Precisão da previsão</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
