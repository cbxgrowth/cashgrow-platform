
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Gift, Target, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProximityMetricsCard } from '@/components/proximity/ProximityMetricsCard';
import { useNavigate } from 'react-router-dom';

const CompanyDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // Simulando ID da empresa - em um app real, viria do contexto de autenticação
  const companyId = "company-1"; // Substituir pela lógica real

  useEffect(() => {
    const animateTiming = (selector: string, delay: number) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-fade-in', 'opacity-100');
          element.classList.remove('opacity-0', 'translate-y-4');
        }, delay + (index * 100));
      });
    };
    
    animateTiming('.dashboard-header', 100);
    animateTiming('.dashboard-card', 300);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-full mx-auto px-2 sm:px-4">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {/* Enhanced Header */}
          <div className="flex flex-col space-y-2 sm:space-y-3 dashboard-header opacity-0 translate-y-4 w-full">
            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Dashboard da Empresa 🏢
              </h1>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                Gerencie seu negócio e acompanhe métricas importantes
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs h-8">
                <Calendar className="mr-1.5 h-3 w-3" /> 
                Últimos 30 dias
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 dashboard-card opacity-0 translate-y-4 w-full">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-green-500">
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-green-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Vendas Hoje</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-green-600">R$ 2.450,00</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-blue-500">
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Clientes Ativos</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-blue-600">342</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-purple-500">
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Gift className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Cashback Pago</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-purple-600">R$ 156,30</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-orange-500"
              onClick={() => navigate('/company/proximity')}
            >
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Usuários Próximos</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-orange-600">Ver análise</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 w-full">
            {/* Left Column - Main Cards */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6 w-full min-w-0">
              <Card className="dashboard-card opacity-0 translate-y-4">
                <CardHeader>
                  <CardTitle>Vendas Recentes</CardTitle>
                  <CardDescription>Últimas transações registradas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { cliente: "Maria Silva", valor: "R$ 89,90", cashback: "R$ 4,50", tempo: "há 2min" },
                      { cliente: "João Santos", valor: "R$ 156,00", cashback: "R$ 7,80", tempo: "há 15min" },
                      { cliente: "Ana Costa", valor: "R$ 234,50", cashback: "R$ 11,70", tempo: "há 1h" },
                    ].map((venda, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{venda.cliente}</p>
                          <p className="text-sm text-muted-foreground">{venda.tempo}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{venda.valor}</p>
                          <p className="text-sm text-green-600">+{venda.cashback}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="dashboard-card opacity-0 translate-y-4">
                <CardHeader>
                  <CardTitle>Performance Mensal</CardTitle>
                  <CardDescription>Resumo do desempenho este mês</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">R$ 45.230</p>
                      <p className="text-sm text-muted-foreground">Vendas totais</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">1.847</p>
                      <p className="text-sm text-muted-foreground">Transações</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Proximity Metrics */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full min-w-0">
              <div className="dashboard-card opacity-0 translate-y-4">
                <ProximityMetricsCard companyId={companyId} />
              </div>

              <Card className="dashboard-card opacity-0 translate-y-4">
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline" onClick={() => navigate('/company/clients')}>
                    <Users className="h-4 w-4 mr-2" />
                    Adicionar Cliente
                  </Button>
                  <Button className="w-full" variant="outline" onClick={() => navigate('/company/transactions')}>
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Registrar Venda
                  </Button>
                  <Button className="w-full" variant="outline" onClick={() => navigate('/company/proximity')}>
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver Usuários Próximos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
