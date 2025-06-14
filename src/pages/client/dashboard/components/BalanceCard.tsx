
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Sparkles } from "lucide-react";

interface BalanceCardProps {
  balance: string;
  nextLevelProgress: number;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance, nextLevelProgress }) => {
  return (
    <Card className="bg-gradient-primary text-white shadow-lg dashboard-card opacity-0 translate-y-4 hover-scale mobile-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <CardHeader className="pb-4 p-4 sm:p-6 relative z-10">
        <CardTitle className="flex justify-between items-center text-lg sm:text-xl">
          <span>Saldo disponível</span>
          <div className="relative">
            <CreditCard className="h-6 w-6" />
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300" />
          </div>
        </CardTitle>
        <CardDescription className="text-white/70 text-sm sm:text-base">
          Valor total para resgate
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4 sm:pb-6 p-4 sm:p-6 pt-0 relative z-10">
        <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">{balance}</div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Progresso para nível Gold</span>
            <span className="font-semibold">{nextLevelProgress}%</span>
          </div>
          <Progress value={nextLevelProgress} className="h-2 sm:h-3 bg-white/20" />
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Gaste mais R$ 150,00 para atingir o nível Gold e ganhar 10% de cashback.
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-6 pt-0 relative z-10">
        <Button variant="secondary" className="w-full hover-scale font-medium touch-target">
          Resgatar Saldo
        </Button>
      </CardFooter>
    </Card>
  );
};
