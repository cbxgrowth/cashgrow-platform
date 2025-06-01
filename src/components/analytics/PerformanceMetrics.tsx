
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingCart, DollarSign, Target, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      title: "Taxa de Conversão",
      value: "15.8%",
      change: "+2.3%",
      trend: "up",
      icon: Target,
      description: "Clientes que fizeram compras após ver ofertas"
    },
    {
      title: "Ticket Médio",
      value: "R$ 289,50",
      change: "+8.1%",
      trend: "up",
      icon: ShoppingCart,
      description: "Valor médio por transação"
    },
    {
      title: "Retenção de Clientes",
      value: "68.2%",
      change: "+5.4%",
      trend: "up",
      icon: Users,
      description: "Clientes que retornaram no último mês"
    },
    {
      title: "ROI do Cashback",
      value: "285%",
      change: "+12.7%",
      trend: "up",
      icon: DollarSign,
      description: "Retorno sobre investimento em cashback"
    },
    {
      title: "Tempo de Resgate",
      value: "18 dias",
      change: "-3 dias",
      trend: "down",
      icon: Clock,
      description: "Tempo médio para resgate do cashback"
    }
  ];

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-blue-600';
  };

  const getTrendBg = (trend: string) => {
    return trend === 'up' ? 'bg-green-500/20 text-green-600' : 'bg-blue-500/20 text-blue-600';
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Métricas de Performance</h3>
        <p className="text-muted-foreground text-sm">
          Acompanhe indicadores chave do seu programa de cashback
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <metric.icon className="h-4 w-4 text-primary" />
                  {metric.title}
                </CardTitle>
                <Badge className={getTrendBg(metric.trend)}>
                  {metric.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${getTrendColor(metric.trend)}`}>
                  {metric.value}
                </div>
                <CardDescription className="text-xs">
                  {metric.description}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Análise de Tendências
          </CardTitle>
          <CardDescription>
            Insights automáticos baseados nos dados dos últimos 30 dias
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950/20">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-400">
                    Crescimento Consistente
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-500">
                    Suas campanhas de cashback estão gerando 23% mais conversões que o mês anterior
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <h4 className="font-medium text-blue-800 dark:text-blue-400">
                    Oportunidade Detectada
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-500">
                    Clientes da categoria "Eletrônicos" respondem 40% melhor a cashback de 10%+
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                <div>
                  <h4 className="font-medium text-orange-800 dark:text-orange-400">
                    Sugestão de Melhoria
                  </h4>
                  <p className="text-sm text-orange-700 dark:text-orange-500">
                    Considere criar campanhas específicas para fins de semana (conversão 18% maior)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;
