
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart2, 
  TrendingUp, 
  CircleDollarSign, 
  Users, 
  Target, 
  Calendar, 
  ShoppingCart,
  ArrowUp,
  ArrowDown,
  Percent,
  Download,
  FileBarChart,
  Filter
} from "lucide-react";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { toast } from "sonner";

const CompanyPerformance: React.FC = () => {
  // Dados simulados para os gráficos
  const cashbackData = [
    { month: 'Jan', cashbackValue: 12500, transactions: 320 },
    { month: 'Fev', cashbackValue: 14200, transactions: 345 },
    { month: 'Mar', cashbackValue: 15800, transactions: 390 },
    { month: 'Abr', cashbackValue: 16300, transactions: 410 },
    { month: 'Mai', cashbackValue: 18700, transactions: 458 },
    { month: 'Jun', cashbackValue: 17500, transactions: 432 },
    { month: 'Jul', cashbackValue: 19200, transactions: 475 },
  ];

  const conversionData = [
    { day: '01/07', withCashback: 78, withoutCashback: 42 },
    { day: '02/07', withCashback: 76, withoutCashback: 40 },
    { day: '03/07', withCashback: 82, withoutCashback: 43 },
    { day: '04/07', withCashback: 85, withoutCashback: 45 },
    { day: '05/07', withCashback: 75, withoutCashback: 41 },
    { day: '06/07', withCashback: 80, withoutCashback: 44 },
    { day: '07/07', withCashback: 87, withoutCashback: 46 },
    { day: '08/07', withCashback: 90, withoutCashback: 47 },
    { day: '09/07', withCashback: 88, withoutCashback: 46 },
    { day: '10/07', withCashback: 84, withoutCashback: 45 },
    { day: '11/07', withCashback: 83, withoutCashback: 43 },
    { day: '12/07', withCashback: 86, withoutCashback: 44 },
    { day: '13/07', withCashback: 89, withoutCashback: 47 },
    { day: '14/07', withCashback: 91, withoutCashback: 48 },
  ];

  const keyMetrics = [
    {
      title: "Cashback Distribuído",
      value: "R$ 19.245",
      change: "+12.4%",
      positive: true,
      icon: CircleDollarSign,
      color: "text-green-600"
    },
    {
      title: "Transações com Cashback",
      value: "475",
      change: "+9.8%",
      positive: true,
      icon: ShoppingCart,
      color: "text-primary"
    },
    {
      title: "Taxa de Retorno",
      value: "68%",
      change: "+5.2%",
      positive: true,
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Ticket Médio",
      value: "R$ 235",
      change: "+8.7%",
      positive: true,
      icon: Target,
      color: "text-amber-600"
    }
  ];

  const handleDownloadReport = () => {
    toast.success("Relatório sendo gerado. Em breve estará disponível para download.");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
          <p className="text-muted-foreground mt-1">
            Análise detalhada do desempenho do seu programa de cashback
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Jul/2025
          </Button>
          <Button onClick={handleDownloadReport} className="gap-2">
            <Download className="h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                  <CardTitle>{metric.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {metric.positive ? (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1">
                    <ArrowUp className="h-3 w-3" />
                    {metric.change}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 gap-1">
                    <ArrowDown className="h-3 w-3" />
                    {metric.change}
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main charts */}
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-primary" />
            <CardTitle>Métricas de Cashback</CardTitle>
          </div>
          <CardDescription>
            Análise da distribuição de cashback e transações ao longo do tempo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cashflow" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="cashflow">Fluxo de Cashback</TabsTrigger>
              <TabsTrigger value="conversion">Taxa de Conversão</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cashflow" className="mt-4">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Cashback vs. Transações</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Filter className="h-3.5 w-3.5" />
                      Filtrar
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <FileBarChart className="h-3.5 w-3.5" />
                      Mais Métricas
                    </Button>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={cashbackData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="cashbackValue" name="Cashback (R$)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="right" dataKey="transactions" name="Transações" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Cashback Total</p>
                          <p className="text-2xl font-bold">R$ 114.200</p>
                        </div>
                        <CircleDollarSign className="h-8 w-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Transações</p>
                          <p className="text-2xl font-bold">2.830</p>
                        </div>
                        <ShoppingCart className="h-8 w-8 text-amber-600" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Média por Transação</p>
                          <p className="text-2xl font-bold">R$ 40,35</p>
                        </div>
                        <Percent className="h-8 w-8 text-green-600" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="conversion" className="mt-4">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Taxa de Conversão com Cashback</h3>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filtrar Período
                  </Button>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={conversionData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="withCashback"
                        name="Com Cashback (%)"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="withoutCashback"
                        name="Sem Cashback (%)" 
                        stroke="#9ca3af"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Média com Cashback</p>
                          <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold text-blue-600">84.2%</p>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1">
                              <ArrowUp className="h-3 w-3" />
                              +43.7%
                            </Badge>
                          </div>
                        </div>
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Média sem Cashback</p>
                          <p className="text-2xl font-bold text-gray-600">44.6%</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-gray-600" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* ROI Analysis */}
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <CardTitle>Análise de ROI</CardTitle>
          </div>
          <CardDescription>
            Retorno sobre investimento do programa de cashback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="border rounded-lg p-6 h-full">
                <h3 className="text-lg font-medium mb-4">ROI por Segmento</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { segmento: 'Eletrônicos', roi: 315 },
                        { segmento: 'Vestuário', roi: 245 },
                        { segmento: 'Alimentação', roi: 280 },
                        { segmento: 'Serviços', roi: 390 },
                        { segmento: 'Outros', roi: 210 }
                      ]}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 400]} />
                      <YAxis dataKey="segmento" type="category" width={90} />
                      <Tooltip />
                      <Bar 
                        dataKey="roi" 
                        name="ROI (%)" 
                        fill="#3b82f6" 
                        radius={[0, 4, 4, 0]}
                        label={{ position: 'right', formatter: (value) => `${value}%` }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-full border rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">ROI Global</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-green-600">285%</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1 mb-1">
                      <ArrowUp className="h-3 w-3" />
                      +18%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Baseado no último trimestre
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Resumo de Métricas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Investimento em Cashback</span>
                      <span className="font-medium">R$ 114.200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Receita Adicional</span>
                      <span className="font-medium">R$ 325.470</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Frequência de Retorno</span>
                      <span className="font-medium">+42%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Ticket Médio</span>
                      <span className="font-medium">+22%</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Ver Análise Completa</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyPerformance;
