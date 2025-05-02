
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, Wallet, Users, ShoppingCart, TrendingUp, BarChart2, UserPlus, PlusCircle } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CompanyDashboard: React.FC = () => {
  // Adicionando efeitos de entrada animada aos elementos
  useEffect(() => {
    const animateTiming = (selector: string, delay: number) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-slide-up', 'opacity-100');
          element.classList.remove('opacity-0', 'translate-y-4');
        }, delay + (index * 100));
      });
    };
    
    animateTiming('.dashboard-header', 100);
    animateTiming('.stats-card', 300);
    animateTiming('.chart-card', 500);
    animateTiming('.transaction-item', 700);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 dashboard-header opacity-0 translate-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="hover-scale">
            Download Relatório
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 hover-scale">
            <PlusCircle className="mr-2 h-4 w-4" /> Nova Transação
          </Button>
        </div>
      </div>
      
      {/* Stats Overview com estilo aprimorado */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="stats-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback Total</CardTitle>
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Wallet className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-xs flex items-center text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="stats-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transações</CardTitle>
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.350</div>
            <p className="text-xs flex items-center text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="stats-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.245</div>
            <p className="text-xs flex items-center text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="stats-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 89,50</div>
            <p className="text-xs flex items-center text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts Section com gradientes e melhor estilo */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1 chart-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
          <CardHeader>
            <CardTitle>Cashback por Período</CardTitle>
            <CardDescription>
              Valor total de cashback emitido nos últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center rounded-md bg-gradient-to-br from-background to-muted/10 p-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Gráfico de linha será exibido aqui</p>
                <Button variant="outline" size="sm" className="mt-2 hover-scale">
                  Gerar Relatório
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 chart-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
          <CardHeader>
            <CardTitle>Distribuição de Cashback</CardTitle>
            <CardDescription>
              Porcentagem de cashback por categoria
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center rounded-md bg-gradient-to-br from-background to-muted/10 p-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Gráfico de barras será exibido aqui</p>
                <Button variant="outline" size="sm" className="mt-2 hover-scale">
                  Explorar Dados
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Novos Clientes Card */}
      <Card className="chart-card opacity-0 translate-y-4 card-shadow">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Novos Clientes</CardTitle>
            <CardDescription>
              Últimos clientes cadastrados no programa de cashback
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="hover-scale">
            <UserPlus className="h-4 w-4 mr-2" /> Adicionar Cliente
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="transaction-item opacity-0 translate-y-4 hover-scale cursor-pointer">
                <CardContent className="p-4 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <img 
                        src={`https://via.placeholder.com/40/8B5CF6/FFFFFF?text=${["JS", "MP", "AR"][i]}`} 
                        alt="Cliente" 
                        className="w-6 h-6 rounded-full" 
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {["João Silva", "Maria Pereira", "Ana Rodrigues"][i]}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cadastrado em {new Date(Date.now() - i * 86400000).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Total de Compras</span>
                      <span className="text-xs font-medium">{i+1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Cashback Ganho</span>
                      <span className="text-xs font-medium">R$ {(Math.random() * 50 + 10).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Transactions com badges coloridos e mais interação */}
      <Card className="chart-card opacity-0 translate-y-4 card-shadow">
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
          <CardDescription>
            Últimas 5 transações realizadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Cliente
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Valor
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Cashback
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Data
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[...Array(5)].map((_, i) => (
                  <tr 
                    key={i} 
                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted transaction-item opacity-0 translate-y-4 cursor-pointer"
                  >
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <img 
                            src={`https://via.placeholder.com/32/8B5CF6/FFFFFF?text=${String(i+1)}`} 
                            alt="Cliente" 
                            className="w-5 h-5 rounded-full" 
                          />
                        </div>
                        <span>João Silva</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">R$ {(Math.random() * 200 + 50).toFixed(2)}</td>
                    <td className="p-4 align-middle text-green-600">R$ {(Math.random() * 20 + 5).toFixed(2)}</td>
                    <td className="p-4 align-middle">{new Date(Date.now() - i * 86400000).toLocaleDateString('pt-BR')}</td>
                    <td className="p-4 align-middle">
                      <Badge className={`${i % 3 === 0 ? "bg-green-500/20 text-green-600 hover:bg-green-500/30" : 
                                         i % 3 === 1 ? "bg-orange-500/20 text-orange-600 hover:bg-orange-500/30" : 
                                         "bg-blue-500/20 text-blue-600 hover:bg-blue-500/30"}`}>
                        {i % 3 === 0 ? "Concluído" : i % 3 === 1 ? "Pendente" : "Em processamento"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDashboard;
