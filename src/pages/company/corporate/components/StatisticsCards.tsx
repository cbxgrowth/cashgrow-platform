
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Shield } from 'lucide-react';

const statistics = [
  { label: "Empresas Atendidas", value: "500+", icon: Building2 },
  { label: "Usuários Corporativos", value: "25.000+", icon: Users },
  { label: "Transações/Mês", value: "1M+", icon: TrendingUp },
  { label: "Uptime", value: "99.9%", icon: Shield }
];

export const StatisticsCards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statistics.map((stat, index) => (
        <Card key={index}>
          <CardContent className="flex items-center p-6">
            <stat.icon className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
