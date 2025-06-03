
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar,
  CreditCard,
  Download,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Bell,
  ChevronRight
} from "lucide-react";

const ClientDashboard: React.FC = () => {
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
    animateTiming('.dashboard-card', 300);
    animateTiming('.transaction-item', 500);
    animateTiming('.store-item', 700);
  }, []);
  
  // Dados simulados para o progresso
  const nextLevelProgress = 75;
  
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 dashboard-header opacity-0 translate-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Meu Cashback</h1>
        <Button variant="outline" size="sm" className="hover-scale">
          <Calendar className="mr-2 h-4 w-4" /> Últimos 30 dias
        </Button>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Main Cards */}
        <div className="lg:col-span-2 space-y-8">
          {/* Balance Card */}
          <Card className="bg-gradient-primary text-white shadow-lg dashboard-card opacity-0 translate-y-4 hover-scale">
            <CardHeader className="pb-4">
              <CardTitle className="flex justify-between items-center text-xl">
                <span>Saldo disponível</span>
                <CreditCard className="h-6 w-6" />
              </CardTitle>
              <CardDescription className="text-white/70 text-base">
                Valor total para resgate
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="text-4xl font-bold mb-6">R$ 123,45</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Progresso para nível Gold</span>
                  <span>{nextLevelProgress}%</span>
                </div>
                <Progress value={nextLevelProgress} className="h-3 bg-white/20" />
                <p className="text-sm text-white/80">
                  Gaste mais R$ 150,00 para atingir o nível Gold e ganhar 10% de cashback.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full hover-scale font-medium">
                Resgatar Saldo
              </Button>
            </CardFooter>
          </Card>
          
          {/* Transactions */}
          <Card className="dashboard-card opacity-0 translate-y-4 card-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Últimas transações</CardTitle>
              <CardDescription>
                Histórico recente de cashback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex justify-between items-center p-4 bg-muted/30 hover:bg-muted/50 transition-colors rounded-lg transaction-item opacity-0 translate-y-4 hover-scale cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <img src={`https://via.placeholder.com/48/8B5CF6/FFFFFF?text=${i+1}`} alt="Loja" className="w-7 h-7 rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {["Mercado Verde", "Farmácia Saúde", "Moda Express", "Tech Store", "Padaria Delícia"][i % 5]}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 86400000 * 2).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <div>
                        <p className="font-bold text-green-600">+R$ {(Math.random() * 20 + 5).toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">{Math.floor(Math.random() * 10 + 1)}% cashback</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full hover-scale">
                Ver todas as transações
              </Button>
            </CardFooter>
          </Card>
          
          {/* Connected Businesses */}
          <Card className="dashboard-card opacity-0 translate-y-4 card-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Empresas Conectadas</CardTitle>
              <CardDescription>
                Lojas onde você já acumulou cashback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center text-center store-item opacity-0 translate-y-4 hover-scale cursor-pointer p-2"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3">
                      <img 
                        src={`https://via.placeholder.com/40/8B5CF6/FFFFFF?text=${["MV", "FS", "ME", "TS", "PD"][i]}`} 
                        alt="Loja" 
                        className="w-8 h-8 rounded-full" 
                      />
                    </div>
                    <p className="text-sm font-medium mb-1">
                      {["Mercado Verde", "Farmácia Saúde", "Moda Express", "Tech Store", "Padaria Delícia"][i]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {Math.floor(Math.random() * 10 + 1)}% cashback
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full hover-scale">
                Descobrir mais lojas
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Right Column - Summary */}
        <div className="space-y-8">
          <Card className="dashboard-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Resumo</CardTitle>
              <CardDescription>
                Movimentação dos últimos 30 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Cashback Recebido</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 rounded-full p-2">
                      <ArrowDown className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-2xl font-bold text-green-600">R$ 76,25</span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    12% a mais que no mês anterior
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Valores Resgatados</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/20 rounded-full p-2">
                      <ArrowUp className="h-4 w-4 text-orange-500" />
                    </div>
                    <span className="text-2xl font-bold text-orange-600">R$ 30,00</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Último resgate em 15/04
                  </p>
                </div>
              </div>
              
              {/* Notification */}
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded-full p-2 mt-0.5">
                    <Bell className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">Oferta exclusiva!</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Ganhe cashback duplo em compras acima de R$ 200 na Tech Store até 30/05.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full hover-scale">
                <Download className="mr-2 h-4 w-4" /> Extrato Completo
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
