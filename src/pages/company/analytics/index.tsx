
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, Target, Award, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CompanyAnalytics: React.FC = () => {
  const analyticsData = {
    revenue: [
      { name: 'Jan', value: 12000 },
      { name: 'Fev', value: 15000 },
      { name: 'Mar', value: 18000 },
      { name: 'Abr', value: 22000 },
      { name: 'Mai', value: 25000 },
      { name: 'Jun', value: 28000 }
    ],
    customers: [
      { name: 'Jan', value: 120 },
      { name: 'Fev', value: 150 },
      { name: 'Mar', value: 180 },
      { name: 'Abr', value: 220 },
      { name: 'Mai', value: 250 },
      { name: 'Jun', value: 280 }
    ],
    transactions: [
      { name: 'Jan', value: 450 },
      { name: 'Fev', value: 620 },
      { name: 'Mar', value: 780 },
      { name: 'Abr', value: 950 },
      { name: 'Mai', value: 1200 },
      { name: 'Jun', value: 1450 }
    ]
  };

  const metrics = [
    {
      title: "Receita Total",
      value: "R$ 120.000",
      change: "+23%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Clientes Ativos",
      value: "1.247",
      change: "+18%", 
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Taxa de Conversão",
      value: "12.5%",
      change: "+5%",
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Ticket Médio",
      value: "R$ 96.30",
      change: "+8%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const SimpleChart = ({ data }: { data: { name: string; value: number }[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Análise detalhada do desempenho da sua empresa
          </p>
        </div>
      </div>

      {/* Métricas Principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.color}`}>
                {metric.change} em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráficos e Análises */}
      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Receita</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Evolução da Receita</CardTitle>
              <CardDescription>
                Receita mensal nos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleChart data={analyticsData.revenue} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crescimento de Clientes</CardTitle>
              <CardDescription>
                Novos clientes adquiridos mensalmente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleChart data={analyticsData.customers} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Volume de Transações</CardTitle>
              <CardDescription>
                Número total de transações por mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleChart data={analyticsData.transactions} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Produtos</CardTitle>
                <CardDescription>Produtos mais vendidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Produto A", sales: 234, revenue: "R$ 12.450" },
                    { name: "Produto B", sales: 189, revenue: "R$ 9.780" },
                    { name: "Produto C", sales: 156, revenue: "R$ 8.340" },
                    { name: "Produto D", sales: 123, revenue: "R$ 6.890" }
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.sales} vendas</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{product.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metas do Mês</CardTitle>
                <CardDescription>Progresso das metas estabelecidas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { goal: "Receita", current: 85, target: 100, unit: "%" },
                    { goal: "Novos Clientes", current: 92, target: 100, unit: "%" },
                    { goal: "Transações", current: 78, target: 100, unit: "%" },
                    { goal: "Satisfação", current: 95, target: 100, unit: "%" }
                  ].map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{goal.goal}</span>
                        <span>{goal.current}{goal.unit}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${goal.current}%` }}
                        />
                      </div>
                    </div>
                  ))}
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
