
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface DashboardHeaderProps {
  isLocationEnabled: boolean;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isLocationEnabled }) => {
  return (
    <div className="flex flex-col space-y-2 sm:space-y-3 dashboard-header opacity-0 translate-y-4 w-full">
      <div className="text-center sm:text-left">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Olá, bem-vindo! 👋
        </h1>
        <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
          Acompanhe seu cashback e descubra oportunidades
          {isLocationEnabled && (
            <span className="text-green-600 ml-2">📍 Notificações de proximidade ativas</span>
          )}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs h-8">
          <Calendar className="mr-1.5 h-3 w-3" /> 
          Últimos 30 dias
        </Button>
      </div>
    </div>
  );
};
