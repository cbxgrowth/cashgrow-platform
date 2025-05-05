
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LineChart, PieChart, BarChart2 } from 'lucide-react';

const ChartsSections: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Vendas e Cashback por Período</CardTitle>
            <CardDescription>
              Acompanhe a evolução de vendas e cashback emitido ao longo do tempo
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center p-6 rounded-full bg-muted">
                <LineChart className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Gráfico de linha será exibido aqui</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Cashback por Regra</CardTitle>
            <CardDescription>
              Distribuição percentual de cashback por regra aplicada
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center p-6 rounded-full bg-muted">
                <PieChart className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Gráfico de pizza será exibido aqui</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Desempenho por Cliente</CardTitle>
          <CardDescription>
            Análise de compras e cashback por cliente
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-80 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-6 rounded-full bg-muted">
              <BarChart2 className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Gráfico de barras será exibido aqui</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ChartsSections;
