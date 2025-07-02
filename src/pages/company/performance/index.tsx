
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Award } from 'lucide-react';

const CompanyPerformancePage: React.FC = () => {
  const kpis = [
    {
      title: 'Taxa de Conversão',
      value: '12.5%',
      change: '+5.2%',
      trend: 'up',
      target: 15,
      current: 12.5,
      icon: Target
    },
    {
      title: 'Ticket Médio',
      value: 'R$ 245.80',
      change: '+8.1%',
      trend: 'up',
      target: 300,
      current: 245.80,
      icon: DollarSign
    },
    {
      title: 'Retenção de Clientes',
      value: '78%',
      change: '-2.1%',
      trend: 'down',
      target: 85,
      current: 78,
      icon: Users
    },
    {
      title: 'ROI Cashback',
      value: '340%',
      change: '+12.5%',
      trend: 'up',
      target: 400,
      current: 340,
      icon: Award
    }
  ];

  const campaigns = [
    {
      name: 'Black Friday 2024',
      performance: 95,
      conversions: 1247,
      roi: '280%',
      status: 'active'
    },
    {
      name: 'Volta às Aulas',
      performance: 78,
      conversions: 456,
      roi: '165%',
      status: 'completed'
    },
    {
      name: 'Promoção Eletrônicos',
      performance: 86,
      conversions: 789,
      roi: '210%',
      status: 'active'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
        <p className="text-muted-foreground mt-2">
          Acompanhe o desempenho das suas campanhas e KPIs
        </p>
      </div>

      {/* KPIs Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center gap-2 mt-2">
                {kpi.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Meta: {kpi.target}{kpi.title.includes('R$') ? '' : kpi.title.includes('%') ? '%' : ''}</span>
                  <span>{Math.round((kpi.current / kpi.target) * 100)}%</span>
                </div>
                <Progress value={(kpi.current / kpi.target) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campanhas Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance das Campanhas</CardTitle>
          <CardDescription>
            Acompanhe o desempenho das suas campanhas ativas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {campaigns.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{campaign.name}</h4>
                    <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                      {campaign.status === 'active' ? 'Ativa' : 'Finalizada'}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Performance</span>
                      <div className="font-bold text-lg">{campaign.performance}%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Conversões</span>
                      <div className="font-bold text-lg">{campaign.conversions.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">ROI</span>
                      <div className="font-bold text-lg text-green-600">{campaign.roi}</div>
                    </div>
                  </div>
                </div>
                <div className="w-24">
                  <Progress value={campaign.performance} className="h-3" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyPerformancePage;
