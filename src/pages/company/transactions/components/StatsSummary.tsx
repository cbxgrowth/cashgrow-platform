
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsSummaryProps {
  stats?: {
    totalTransactions: number;
    totalVolume: number;
    totalCashback: number;
  };
}

const StatsSummary: React.FC<StatsSummaryProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Total de Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats?.totalTransactions || 0}</div>
          <p className="text-sm text-muted-foreground">+8% em relação ao período anterior</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Volume Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">R$ {(stats?.totalVolume || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
          <p className="text-sm text-muted-foreground">+12% em relação ao período anterior</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Cashback Emitido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">R$ {(stats?.totalCashback || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
          <p className="text-sm text-muted-foreground">5% do volume total de vendas</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsSummary;
