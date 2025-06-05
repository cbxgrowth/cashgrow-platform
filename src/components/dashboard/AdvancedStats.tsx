
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Target, Award, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<any>;
  subtitle?: string;
  progress?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  subtitle,
  progress 
}) => {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }[changeType];

  const ChangeIcon = changeType === 'positive' ? TrendingUp : 
                    changeType === 'negative' ? TrendingDown : null;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="flex items-center gap-1">
          {ChangeIcon && <ChangeIcon className={`h-3 w-3 ${changeColor}`} />}
          <span className={`text-xs ${changeColor}`}>{change}</span>
          {subtitle && <span className="text-xs text-muted-foreground ml-1">{subtitle}</span>}
        </div>
        {progress !== undefined && (
          <div className="mt-3">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">{progress}% da meta</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const AdvancedStats: React.FC = () => {
  const stats = [
    {
      title: "Cashback Total",
      value: "R$ 2.847,90",
      change: "+23,4%",
      changeType: 'positive' as const,
      icon: DollarSign,
      subtitle: "vs. mês anterior"
    },
    {
      title: "Meta Mensal",
      value: "R$ 1.250,00",
      change: "78%",
      changeType: 'positive' as const,
      icon: Target,
      subtitle: "atingido",
      progress: 78
    },
    {
      title: "Nível Atual",
      value: "Gold",
      change: "250 pts",
      changeType: 'neutral' as const,
      icon: Award,
      subtitle: "para Platinum"
    },
    {
      title: "Lojas Ativas",
      value: "127",
      change: "+12",
      changeType: 'positive' as const,
      icon: Users,
      subtitle: "novas este mês"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
