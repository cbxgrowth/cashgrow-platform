
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Gift, Target } from "lucide-react";

export const QuickActionsGrid: React.FC = () => {
  return (
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
  );
};
