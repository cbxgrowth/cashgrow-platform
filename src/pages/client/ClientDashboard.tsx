
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Plus, TrendingUp, Gift, Target } from "lucide-react";
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
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Enhanced Mobile-First Header */}
          <div className="flex flex-col space-y-3 sm:space-y-4 dashboard-header opacity-0 translate-y-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Olá, bem-vindo! 👋
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Acompanhe seu cashback e descubra oportunidades
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
              <Button variant="outline" size="sm" className="w-full sm:w-auto hover-scale touch-target">
                <Calendar className="mr-2 h-4 w-4" /> 
                Últimos 30 dias
              </Button>
              <Button size="sm" className="w-full sm:w-auto hover-scale bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 touch-target">
                <Plus className="mr-2 h-4 w-4" />
                Nova Transação
              </Button>
            </div>
          </div>

          {/* Advanced Stats - Mobile Optimized */}
          <div className="dashboard-card opacity-0 translate-y-4 w-full">
            <AdvancedStats />
          </div>

          {/* Quick Actions - Mobile Responsive Grid */}
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dashboard-card opacity-0 translate-y-4 w-full">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-green-500">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm font-medium truncate">Cashback Hoje</CardTitle>
                    <CardDescription className="text-base sm:text-lg font-bold text-green-600">+R$ 23,50</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-purple-500">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm font-medium truncate">Próximo Resgate</CardTitle>
                    <CardDescription className="text-base sm:text-lg font-bold text-purple-600">R$ 76,50</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-l-4 border-l-orange-500 sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm font-medium truncate">Meta Mensal</CardTitle>
                    <CardDescription className="text-base sm:text-lg font-bold text-orange-600">78% atingido</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
          
          {/* Main Content Grid - Mobile Responsive */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3 w-full">
            {/* Left Column - Main Cards */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              <BalanceCard balance="R$ 2.847,90" nextLevelProgress={nextLevelProgress} />
              
              {/* Interactive Chart */}
              <div className="dashboard-card opacity-0 translate-y-4 w-full">
                <InteractiveChart />
              </div>
              
              <TransactionsCard />
              <ConnectedBusinessesCard />
            </div>
            
            {/* Right Column - Summary */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              <SummaryCard />
              
              {/* Achievement Card - Mobile Optimized */}
              <Card className="dashboard-card opacity-0 translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 w-full">
                <CardHeader className="p-3 sm:p-4 lg:p-6">
                  <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                    🏆 Conquistas Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4 lg:p-6 pt-0">
                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg touch-target">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">Nível Gold</p>
                      <p className="text-xs text-muted-foreground">Desbloqueado hoje!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg touch-target">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">Primeira Compra</p>
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
