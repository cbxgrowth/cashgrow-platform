
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart2, LineChart, Download, PieChart, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const CompanyReports: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
        <div className="flex gap-2">
          <div className="relative">
            <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <select 
              className="pl-8 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="30d">Últimos 30 dias</option>
              <option value="90d">Últimos 90 dias</option>
              <option value="6m">Últimos 6 meses</option>
              <option value="1y">Último ano</option>
              <option value="custom">Período personalizado</option>
            </select>
          </div>
          <Button variant="outline" className="hover-scale">
            <Download className="mr-2 h-4 w-4" /> Exportar
          </Button>
        </div>
      </div>

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

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Gerar Relatórios Personalizados</CardTitle>
          <CardDescription>
            Selecione os parâmetros para criar relatórios sob medida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="report-type">Tipo de Relatório</Label>
              <select 
                id="report-type" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Selecione um tipo</option>
                <option value="sales">Vendas</option>
                <option value="cashback">Cashback</option>
                <option value="clients">Clientes</option>
                <option value="rules">Regras</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-from">Data Inicial</Label>
              <Input id="date-from" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">Data Final</Label>
              <Input id="date-to" type="date" />
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="include-details"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="include-details">Detalhamento completo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="include-graphs"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="include-graphs">Incluir gráficos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="include-comparison"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="include-comparison">Comparar períodos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="include-projections"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="include-projections">Incluir projeções</Label>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3 justify-end">
            <Button variant="outline" className="hover-scale">Visualizar</Button>
            <Button className="hover-scale">Gerar Relatório</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyReports;
