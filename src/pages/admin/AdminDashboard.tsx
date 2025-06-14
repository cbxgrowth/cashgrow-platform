
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdminData } from '@/hooks/useAdminData';
import { 
  Users, 
  Building2, 
  DollarSign, 
  TrendingUp, 
  UserPlus, 
  Activity 
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export const AdminDashboard: React.FC = () => {
  const { stats, loading } = useAdminData();

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Visão geral do sistema SaaS
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total de Usuários',
      value: stats?.totalUsers || 0,
      description: 'Usuários registrados',
      icon: Users,
      trend: '+12% desde o mês passado'
    },
    {
      title: 'Empresas Ativas',
      value: stats?.totalCompanies || 0,
      description: 'Empresas no sistema',
      icon: Building2,
      trend: '+8% desde o mês passado'
    },
    {
      title: 'Assinaturas Ativas',
      value: stats?.activeSubscriptions || 0,
      description: 'Planos ativos',
      icon: TrendingUp,
      trend: '+15% desde o mês passado'
    },
    {
      title: 'Receita Total',
      value: `R$ ${(stats?.totalRevenue || 0).toLocaleString('pt-BR')}`,
      description: 'Receita mensal',
      icon: DollarSign,
      trend: '+20% desde o mês passado'
    },
    {
      title: 'Novos Usuários',
      value: stats?.recentSignups || 0,
      description: 'Últimos 7 dias',
      icon: UserPlus,
      trend: '+5% desde a semana passada'
    },
    {
      title: 'Usuários Ativos Hoje',
      value: stats?.activeUsersToday || 0,
      description: 'Usuários online',
      icon: Activity,
      trend: 'Em tempo real'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Visão geral do sistema SaaS
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>
              Ações importantes no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nova empresa registrada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Há 2 minutos
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Usuário fez upgrade de plano
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Há 10 minutos
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Sistema atualizado
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Há 1 hora
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status do Sistema</CardTitle>
            <CardDescription>
              Monitoramento em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">API Status</span>
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Storage</span>
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Payments</span>
                <span className="flex h-2 w-2 rounded-full bg-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
