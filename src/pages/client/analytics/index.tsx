
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Calendar,
  PieChart,
  BarChart3,
  Target,
  Award,
  Filter
} from "lucide-react";

const ClientAnalytics = () => {
  const monthlyData = [
    { month: 'Jan', spent: 1250, cashback: 75, transactions: 12 },
    { month: 'Fev', spent: 1580, cashback: 95, transactions: 18 },
    { month: 'Mar', spent: 2100, cashback: 150, transactions: 24 },
    { month: 'Abr', spent: 1890, cashback: 135, transactions: 21 },
    { month: 'Mai', spent: 2350, cashback: 180, transactions: 28 },
    { month: 'Jun', spent: 2180, cashback: 165, transactions: 25 }
  ];

  const categories = [
    { name: 'Alimentação', spent: 850, percentage: 32, color: 'bg-blue-500' },
    { name: 'Transporte', spent: 420, percentage: 16, color: 'bg-green-500' },
    { name: 'Lazer', spent: 380, percentage: 14, color: 'bg-purple-500' },
    { name: 'Saúde', spent: 320, percentage: 12, color: 'bg-orange-500' },
    { name: 'Educação', spent: 280, percentage: 11, color: 'bg-red-500' },
    { name: 'Outros', spent: 400, percentage: 15, color: 'bg-gray-500' }
  ];

  const currentMonth = monthlyData[monthlyData.length - 1];
  const previousMonth = monthlyData[monthlyData.length - 2];
  const spentGrowth = ((currentMonth.spent - previousMonth.spent) / previousMonth.spent) * 100;
  const cashbackGrowth = ((currentMonth.cashback - previousMonth.cashback) / previousMonth.cashback) * 100;

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Análise de Gastos</h1>
          <p className="text-muted-foreground">Acompanhe seus gastos e otimize seu cashback</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Este mês
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gasto Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {currentMonth.spent.toLocaleString()}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              {spentGrowth > 0 ? (
                <TrendingUp className="h-3 w-3 text-red-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-green-500" />
              )}
              <span className={spentGrowth > 0 ? 'text-red-500' : 'text-green-500'}>
                {Math.abs(spentGrowth).toFixed(1)}% vs mês anterior
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback Ganho</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ {currentMonth.cashback}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">
                +{cashbackGrowth.toFixed(1)}% vs mês anterior
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transações</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.transactions}</div>
            <p className="text-xs text-muted-foreground">
              Ticket médio: R$ {(currentMonth.spent / currentMonth.transactions).toFixed(0)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa Cashback</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{((currentMonth.cashback / currentMonth.spent) * 100).toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              Média do período
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Gastos por Categoria */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Gastos por Categoria
            </CardTitle>
            <CardDescription>Distribuição dos seus gastos este mês</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{category.name}</span>
                  <span>R$ {category.spent} ({category.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${category.color}`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Evolução Mensal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Evolução Mensal
            </CardTitle>
            <CardDescription>Gastos e cashback nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{data.month}</span>
                    <div className="text-right">
                      <div>R$ {data.spent}</div>
                      <div className="text-green-600 text-xs">+R$ {data.cashback}</div>
                    </div>
                  </div>
                  <Progress value={(data.spent / 2500) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights e Recomendações */}
      <Card>
        <CardHeader>
          <CardTitle>Insights e Recomendações</CardTitle>
          <CardDescription>Dicas personalizadas para maximizar seu cashback</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-blue-50">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Oportunidade de Economia</h4>
              <p className="text-sm text-blue-700">
                Você gasta mais em alimentação. Considere usar cartões com cashback maior nesta categoria.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50">
              <h4 className="font-semibold text-green-800 mb-2">🎯 Meta de Cashback</h4>
              <p className="text-sm text-green-700">
                Você está próximo de atingir R$ 200 em cashback este mês. Faltam apenas R$ 35!
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-purple-50">
              <h4 className="font-semibold text-purple-800 mb-2">📈 Tendência</h4>
              <p className="text-sm text-purple-700">
                Seus gastos aumentaram 15% este mês, mas seu cashback cresceu 18%. Excelente!
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50">
              <h4 className="font-semibold text-orange-800 mb-2">⚡ Ação Recomendada</h4>
              <p className="text-sm text-orange-700">
                Considere ativar notificações para ofertas exclusivas em suas categorias favoritas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientAnalytics;
