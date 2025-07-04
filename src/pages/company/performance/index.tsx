
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Target, Award, Users, DollarSign, Calendar, Activity } from 'lucide-react';

const CompanyPerformance: React.FC = () => {
  const performanceMetrics = {
    kpis: [
      {
        name: "Revenue Growth",
        current: 85,
        target: 100,
        value: "R$ 234.567",
        change: "+12%",
        trend: "up",
        status: "good"
      },
      {
        name: "Customer Acquisition",
        current: 67,
        target: 100,
        value: "89",
        change: "+8%",
        trend: "up", 
        status: "warning"
      },
      {
        name: "Customer Retention",
        current: 92,
        target: 100,
        value: "92%",
        change: "+3%",
        trend: "up",
        status: "excellent"
      },
      {
        name: "Average Order Value",
        current: 78,
        target: 100,
        value: "R$ 127.50",
        change: "-2%",
        trend: "down",
        status: "warning"
      }
    ],
    goals: [
      {
        title: "Meta de Vendas Mensais",
        current: 78500,
        target: 100000,
        percentage: 78.5,
        deadline: "31/12/2024"
      },
      {
        title: "Novos Clientes",
        current: 45,
        target: 60,
        percentage: 75,
        deadline: "31/12/2024"
      },
      {
        title: "Taxa de Conversão",
        current: 8.5,
        target: 12,
        percentage: 70.8,
        deadline: "31/12/2024"
      },
      {
        title: "Satisfação do Cliente",
        current: 4.8,
        target: 5.0,
        percentage: 96,
        deadline: "31/12/2024"
      }
    ],
    rankings: [
      { category: "Eletrônicos", rank: 1, change: "same" },
      { category: "Moda", rank: 3, change: "up" },
      { category: "Casa e Jardim", rank: 5, change: "down" },
      { category: "Esportes", rank: 2, change: "up" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'danger': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
          <p className="text-muted-foreground">
            Acompanhe o desempenho e progresso das suas metas
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="goals">Metas</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="analysis">Análise</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* KPIs Principais */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {performanceMetrics.kpis.map((kpi, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.name}</CardTitle>
                  <Badge className={getStatusColor(kpi.status)}>
                    {kpi.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                    )}
                    {kpi.change} vs mês anterior
                  </div>
                  <div className="mt-3">
                    <Progress value={kpi.current} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {kpi.current}% da meta alcançada
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resumo de Performance */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Atividade Recente
                </CardTitle>
                <CardDescription>Principais eventos dos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { event: "Meta de vendas atingida", time: "2 horas atrás", type: "success" },
                    { event: "Novo recorde de transações", time: "1 dia atrás", type: "success" },
                    { event: "Cliente VIP cadastrado", time: "2 dias atrás", type: "info" },
                    { event: "Campanha de marketing iniciada", time: "3 dias atrás", type: "info" },
                    { event: "Produto em destaque", time: "5 dias atrás", type: "warning" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.event}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Conquistas
                </CardTitle>
                <CardDescription>Marcos importantes alcançados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { achievement: "1000+ Clientes", description: "Primeira vez com mais de 1000 clientes", earned: true },
                    { achievement: "R$ 100k em Vendas", description: "Meta mensal de vendas atingida", earned: true },
                    { achievement: "95% Satisfação", description: "Excelente avaliação dos clientes", earned: true },
                    { achievement: "Top 10 Categoria", description: "Entre os melhores da categoria", earned: false },
                    { achievement: "Expansão Regional", description: "Atendimento em 5+ cidades", earned: false }
                  ].map((achievement, index) => (
                    <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${
                      achievement.earned ? 'bg-green-50' : 'bg-gray-50'
                    }`}>
                      <Award className={`h-6 w-6 ${
                        achievement.earned ? 'text-green-600' : 'text-gray-400'
                      }`} />
                      <div>
                        <p className="text-sm font-medium">{achievement.achievement}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <div className="grid gap-4">
            {performanceMetrics.goals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{goal.title}</CardTitle>
                      <CardDescription>Prazo: {goal.deadline}</CardDescription>
                    </div>
                    <Badge variant={goal.percentage >= 80 ? "default" : goal.percentage >= 60 ? "secondary" : "destructive"}>
                      {goal.percentage.toFixed(1)}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Atual: {typeof goal.current === 'number' && goal.current > 1000 ? 
                        `R$ ${goal.current.toLocaleString()}` : goal.current}</span>
                      <span>Meta: {typeof goal.target === 'number' && goal.target > 1000 ? 
                        `R$ ${goal.target.toLocaleString()}` : goal.target}</span>
                    </div>
                    <Progress value={goal.percentage} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rankings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Posição por Categoria</CardTitle>
              <CardDescription>Seu ranking em diferentes categorias de produto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.rankings.map((ranking, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold">
                        {ranking.rank}
                      </div>
                      <span className="font-medium">{ranking.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {ranking.change === 'up' && <TrendingUp className="h-4 w-4 text-green-600" />}
                      {ranking.change === 'down' && <TrendingDown className="h-4 w-4 text-red-600" />}
                      {ranking.change === 'same' && <span className="text-gray-500">-</span>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Tendências</CardTitle>
                <CardDescription>Insights baseados em dados históricos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900">Crescimento Consistente</h4>
                    <p className="text-sm text-blue-700">
                      Suas vendas têm crescido consistentemente nos últimos 3 meses.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900">Retenção Excelente</h4>
                    <p className="text-sm text-green-700">
                      92% dos seus clientes fizeram compras recorrentes.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-900">Oportunidade de Melhoria</h4>
                    <p className="text-sm text-yellow-700">
                      O ticket médio pode ser aumentado com estratégias de upsell.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recomendações</CardTitle>
                <CardDescription>Ações sugeridas para melhorar performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Campanha de Reativação",
                      description: "Foque em clientes inativos dos últimos 30 dias",
                      priority: "Alta"
                    },
                    {
                      title: "Programa de Fidelidade",
                      description: "Implemente programa de pontos para aumentar retenção",
                      priority: "Média"
                    },
                    {
                      title: "Análise de Concorrência",
                      description: "Monitore preços e estratégias dos concorrentes",
                      priority: "Média"
                    },
                    {
                      title: "Otimização de Estoque",
                      description: "Analise produtos com baixa rotatividade",
                      priority: "Baixa"
                    }
                  ].map((rec, index) => (
                    <div key={index} className="flex justify-between items-start p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                      <Badge variant={
                        rec.priority === 'Alta' ? 'destructive' :
                        rec.priority === 'Média' ? 'default' : 'secondary'
                      }>
                        {rec.priority}
                      </Badge>
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

export default CompanyPerformance;
