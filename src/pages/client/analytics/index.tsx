
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, DollarSign, ShoppingCart, Calendar, Download, Filter, Eye } from "lucide-react";

const ClientAnalytics = () => {
  const spendingData = [
    { category: 'Alimentação', amount: 1250.80, percentage: 35, trend: '+12%' },
    { category: 'Roupas & Acessórios', amount: 680.50, percentage: 19, trend: '-5%' },
    { category: 'Eletrônicos', amount: 950.00, percentage: 27, trend: '+23%' },
    { category: 'Casa & Jardim', amount: 420.30, percentage: 12, trend: '+8%' },
    { category: 'Saúde & Beleza', amount: 235.90, percentage: 7, trend: '-2%' }
  ];

  const monthlySpending = [
    { month: 'Jan', amount: 2800 },
    { month: 'Fev', amount: 3200 },
    { month: 'Mar', amount: 2950 },
    { month: 'Abr', amount: 3400 },
    { month: 'Mai', amount: 3537 }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            Análise de Gastos
          </h1>
          <p className="text-muted-foreground">Entenda seus padrões de consumo e otimize seu cashback</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gasto Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 3.537,50</div>
            <p className="text-xs text-green-600">+12% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Ganho</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 247,63</div>
            <p className="text-xs text-green-600">7% de média</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Transações</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-blue-600">2.9 por dia em média</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Melhor Categoria</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Alimentação</div>
            <p className="text-xs text-purple-600">35% dos gastos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Spending by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Gastos por Categoria</CardTitle>
            <CardDescription>Distribuição dos seus gastos nos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {spendingData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center gap-2">
                    <span>R$ {item.amount.toFixed(2)}</span>
                    <Badge variant={item.trend.startsWith('+') ? 'default' : 'secondary'}>
                      {item.trend}
                    </Badge>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Tendência Mensal</CardTitle>
            <CardDescription>Evolução dos seus gastos ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlySpending.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.month}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(item.amount / 4000) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm">R$ {item.amount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights & Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Insights Personalizados
          </CardTitle>
          <CardDescription>Recomendações baseadas no seu comportamento de compra</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-blue-50">
              <h4 className="font-semibold text-blue-900">💡 Oportunidade de Cashback</h4>
              <p className="text-sm text-blue-700 mt-1">
                Você pode ganhar até R$ 89 extras comprando eletrônicos na TechStore esta semana (12% cashback).
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50">
              <h4 className="font-semibold text-green-900">📊 Padrão Identificado</h4>
              <p className="text-sm text-green-700 mt-1">
                Seus gastos com alimentação aumentam 20% nos fins de semana. Considere o plano Premium para mais cashback.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-purple-50">
              <h4 className="font-semibold text-purple-900">🎯 Meta Sugerida</h4>
              <p className="text-sm text-purple-700 mt-1">
                Reduza 15% dos gastos com roupas e aumente seu cashback mensal em R$ 45.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50">
              <h4 className="font-semibold text-orange-900">⭐ Melhores Horários</h4>
              <p className="text-sm text-orange-700 mt-1">
                Você recebe mais cashback às terças e quintas. Programe suas compras!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientAnalytics;
