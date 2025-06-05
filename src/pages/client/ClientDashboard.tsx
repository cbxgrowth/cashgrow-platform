
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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 dashboard-header opacity-0 translate-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Olá, bem-vindo de volta! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Acompanhe seu cashback e descubra novas oportunidades
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="hover-scale">
            <Calendar className="mr-2 h-4 w-4" /> 
            Últimos 30 dias
          </Button>
          <Button size="sm" className="hover-scale bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
            <Plus className="mr-2 h-4 w-4" />
            Nova Transação
          </Button>
        </div>
      </div>

      {/* Advanced Stats */}
      <div className="dashboard-card opacity-0 translate-y-4">
        <AdvancedStats />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3 dashboard-card opacity-0 translate-y-4">
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-sm">Cashback Hoje</CardTitle>
                <CardDescription className="text-lg font-bold text-green-600">+R$ 23,50</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform">
                <Gift className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-sm">Próximo Resgate</CardTitle>
                <CardDescription className="text-lg font-bold text-purple-600">R$ 76,50</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform">
                <Target className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <CardTitle className="text-sm">Meta Mensal</CardTitle>
                <CardDescription className="text-lg font-bold text-orange-600">78% atingido</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Main Cards */}
        <div className="lg:col-span-2 space-y-8">
          <BalanceCard balance="R$ 2.847,90" nextLevelProgress={nextLevelProgress} />
          
          {/* Interactive Chart */}
          <div className="dashboard-card opacity-0 translate-y-4">
            <InteractiveChart />
          </div>
          
          <TransactionsCard />
          <ConnectedBusinessesCard />
        </div>
        
        {/* Right Column - Summary */}
        <div className="space-y-8">
          <SummaryCard />
          
          {/* Achievement Card */}
          <Card className="dashboard-card opacity-0 translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                🏆 Conquistas Recentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Gift className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Nível Gold</p>
                  <p className="text-xs text-muted-foreground">Desbloqueado hoje!</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Primeira Compra</p>
                  <p className="text-xs text-muted-foreground">R$ 10 de bônus!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
