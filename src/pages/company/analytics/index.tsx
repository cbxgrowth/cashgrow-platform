
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Calendar,
  Download,
  Filter,
  Target,
  Zap,
  Award,
  Eye
} from "lucide-react";

const CompanyAnalytics = () => {
  const kpiData = [
    { title: 'Receita Total', value: 'R$ 127.450', change: '+23%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Clientes Ativos', value: '1.247', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Transações', value: '3.891', change: '+18%', icon: ShoppingCart, color: 'text-purple-600' },
    { title: 'Taxa Conversão', value: '8.4%', change: '+2.1%', icon: Target, color: 'text-orange-600' }
  ];

  const customerSegments = [
    { segment: 'VIP Elite', count: 156, revenue: 'R$ 45.200', percentage: 35 },
    { segment: 'Premium', count: 423, revenue: 'R$ 52.100', percentage: 41 },
    { segment: 'Regular', count: 668, revenue: 'R$ 30.150', percentage: 24 }
  ];

  const topProducts = [
    { name: 'iPhone 15 Pro', sales: 89, revenue: 'R$ 89.000', margin: '12%' },
    { name: 'MacBook Air M2', sales: 45, revenue: 'R$ 67.500', margin: '15%' },
    { name: 'AirPods Pro', sales: 234, revenue: 'R$ 23.400', margin: '28%' },
    { name: 'iPad Air', sales: 67, revenue: 'R$ 40.200', margin: '18%' }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            Analytics Empresarial
          </h1>
          <p className="text-muted-foreground">Insights avançados sobre performance e clientes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Relatório
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                {kpi.title}
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs ${kpi.color}`}>{kpi.change} vs mês anterior</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Mensal</CardTitle>
                <CardDescription>Receita e transações dos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map((month, index) => {
                    const revenue = [85000, 92000, 78000, 105000, 118000, 127450][index];
                    const maxRevenue = 127450;
                    const percentage = (revenue / maxRevenue) * 100;
                    
                    return (
                      <div key={month} className="flex items-center justify-between">
                        <span className="text-sm font-medium w-12">{month}</span>
                        <div className="flex-1 mx-4">
                          <Progress value={percentage} className="h-2" />
                        </div>
                        <span className="text-sm">R$ {revenue.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Cashback</CardTitle>
                <CardDescription>Como o cashback está sendo distribuído</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cashback Pago</span>
                    <span className="font-bold">R$ 8.947</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cashback Pendente</span>
                    <span className="font-bold">R$ 2.156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Taxa Média</span>
                    <span className="font-bold">7.2%</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-2">Impacto no ROI</div>
                    <div className="text-lg font-bold text-green-600">+34% em retenção</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Segmentação de Clientes</CardTitle>
                <CardDescription>Distribuição por tipo de plano</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerSegments.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{segment.segment}</span>
                        <div className="flex items-center gap-2">
                          <span>{segment.count} clientes</span>
                          <Badge variant="outline">{segment.revenue}</Badge>
                        </div>
                      </div>
                      <Progress value={segment.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de Engajamento</CardTitle>
                <CardDescription>Como os clientes interagem com sua marca</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Taxa de Retenção</div>
                      <div className="text-sm text-muted-foreground">Últimos 90 dias</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">84.2%</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Frequência Média</div>
                      <div className="text-sm text-muted-foreground">Compras por mês</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">3.7x</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Ticket Médio</div>
                      <div className="text-sm text-muted-foreground">Por transação</div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">R$ 327</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Produtos</CardTitle>
              <CardDescription>Produtos com melhor performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.sales} vendas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{product.revenue}</div>
                      <div className="text-sm text-green-600">{product.margin} margem</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Campanhas Ativas
                </CardTitle>
                <CardDescription>Performance das campanhas em andamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Black Friday 2024</h4>
                      <Badge className="bg-green-100 text-green-700">Ativa</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>Conversão: <span className="font-bold">12.3%</span></div>
                      <div>ROI: <span className="font-bold text-green-600">+287%</span></div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Natal Generoso</h4>
                      <Badge variant="outline">Programada</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>Início: <span className="font-bold">15 Dez</span></div>
                      <div>Orçamento: <span className="font-bold">R$ 25K</span></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Melhores Resultados
                </CardTitle>
                <CardDescription>Campanhas com melhor performance histórica</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cyber Monday 2023</span>
                    <span className="font-bold text-purple-600">+445% ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Volta às Aulas</span>
                    <span className="font-bold text-blue-600">+312% ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Dia das Mães</span>
                    <span className="font-bold text-green-600">+298% ROI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAnalytics;
