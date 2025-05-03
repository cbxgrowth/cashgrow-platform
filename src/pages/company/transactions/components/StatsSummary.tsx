
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatsSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Total de Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">1.235</div>
          <p className="text-sm text-muted-foreground">+8% em relação ao período anterior</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Volume Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">R$ 52.789,00</div>
          <p className="text-sm text-muted-foreground">+12% em relação ao período anterior</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Cashback Emitido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">R$ 2.639,45</div>
          <p className="text-sm text-muted-foreground">5% do volume total de vendas</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsSummary;
