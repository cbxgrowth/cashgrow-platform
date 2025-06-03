
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { BalanceCard } from './dashboard/components/BalanceCard';
import { TransactionsCard } from './dashboard/components/TransactionsCard';
import { ConnectedBusinessesCard } from './dashboard/components/ConnectedBusinessesCard';
import { SummaryCard } from './dashboard/components/SummaryCard';

const ClientDashboard: React.FC = () => {
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
          <BalanceCard balance="R$ 123,45" nextLevelProgress={nextLevelProgress} />
          <TransactionsCard />
          <ConnectedBusinessesCard />
        </div>
        
        {/* Right Column - Summary */}
        <div className="space-y-8">
          <SummaryCard />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
