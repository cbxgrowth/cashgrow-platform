
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from 'lucide-react';

const SummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="shadow-md hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Volume de Vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 45.789,00</div>
          <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+12% em relação ao período anterior</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Cashback Emitido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 2.289,45</div>
          <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+8% em relação ao período anterior</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Ticket Médio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 120,50</div>
          <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+5% em relação ao período anterior</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md hover-scale">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Taxa de Retorno</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">68%</div>
          <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
            <TrendingDown className="h-4 w-4" />
            <span>-2% em relação ao período anterior</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
