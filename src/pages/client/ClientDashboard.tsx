
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Gift, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BalanceCard } from './dashboard/components/BalanceCard';
import { TransactionsCard } from './dashboard/components/TransactionsCard';
import { ConnectedBusinessesCard } from './dashboard/components/ConnectedBusinessesCard';
import { SummaryCard } from './dashboard/components/SummaryCard';
import { AdvancedStats } from '@/components/dashboard/AdvancedStats';
import { InteractiveChart } from '@/components/dashboard/InteractiveChart';

const ClientDashboard: React.FC = () => {
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
    animateTiming('.transaction-item', 500);
    animateTiming('.store-item', 700);
  }, []);
  
  const nextLevelProgress = 75;
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-full mx-auto px-2 sm:px-4">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {/* Enhanced Mobile-First Header */}
          <div className="flex flex-col space-y-2 sm:space-y-3 dashboard-header opacity-0 translate-y-4 w-full">
            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Olá, bem-vindo! 👋
              </h1>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                Acompanhe seu cashback e descubra oportunidades
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs h-8">
                <Calendar className="mr-1.5 h-3 w-3" /> 
                Últimos 30 dias
              </Button>
            </div>
          </div>

          {/* Advanced Stats - Mobile Optimized */}
          <div className="dashboard-card opacity-0 translate-y-4 w-full">
            <AdvancedStats />
          </div>

          {/* Quick Actions - Mobile Responsive Grid */}
          <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dashboard-card opacity-0 translate-y-4 w-full">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-green-500 w-full min-w-0">
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-green-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Cashback Hoje</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-green-600">+R$ 23,50</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-purple-500 w-full min-w-0">
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Gift className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Próximo Resgate</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-purple-600">R$ 76,50</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-orange-500 sm:col-span-2 lg:col-span-1 w-full min-w-0">
              <CardHeader className="pb-2 p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs font-medium truncate">Meta Mensal</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-bold text-orange-600">78% atingido</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
          
          {/* Main Content Grid - Mobile Responsive */}
          <div className="grid gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 w-full">
            {/* Left Column - Main Cards */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6 w-full min-w-0">
              <BalanceCard balance="R$ 2.847,90" nextLevelProgress={nextLevelProgress} />
              
              {/* Interactive Chart */}
              <div className="dashboard-card opacity-0 translate-y-4 w-full">
                <InteractiveChart />
              </div>
              
              <TransactionsCard />
              <ConnectedBusinessesCard />
            </div>
            
            {/* Right Column - Summary */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full min-w-0">
              <SummaryCard />
              
              {/* Achievement Card - Mobile Optimized */}
              <Card className="dashboard-card opacity-0 translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 w-full max-w-full overflow-hidden">
                <CardHeader className="p-2 sm:p-3">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                    🏆 Conquistas Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 p-2 sm:p-3 pt-0 w-full min-w-0">
                  <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg w-full min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs sm:text-sm truncate">Nível Gold</p>
                      <p className="text-xs text-muted-foreground">Desbloqueado hoje!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg w-full min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs sm:text-sm truncate">Primeira Compra</p>
                      <p className="text-xs text-muted-foreground">R$ 10 de bônus!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
