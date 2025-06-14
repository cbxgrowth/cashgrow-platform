
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
    <Card className="bg-gradient-primary text-white shadow-lg dashboard-card opacity-0 translate-y-4 hover-scale relative overflow-hidden w-full">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
      
      <CardHeader className="pb-3 sm:pb-4 p-3 sm:p-4 lg:p-6 relative z-10">
        <CardTitle className="flex justify-between items-center text-base sm:text-lg lg:text-xl">
          <span>Saldo disponível</span>
          <div className="relative">
            <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 absolute -top-1 -right-1 text-yellow-300" />
          </div>
        </CardTitle>
        <CardDescription className="text-white/70 text-xs sm:text-sm lg:text-base">
          Valor total para resgate
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3 sm:pb-4 lg:pb-6 p-3 sm:p-4 lg:p-6 pt-0 relative z-10">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 break-words">{balance}</div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span>Progresso para nível Gold</span>
            <span className="font-semibold">{nextLevelProgress}%</span>
          </div>
          <Progress value={nextLevelProgress} className="h-2 sm:h-3 bg-white/20 w-full" />
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Gaste mais R$ 150,00 para atingir o nível Gold e ganhar 10% de cashback.
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 lg:p-6 pt-0 relative z-10">
        <Button variant="secondary" className="w-full hover-scale font-medium touch-target text-sm sm:text-base">
          Resgatar Saldo
        </Button>
      </CardFooter>
    </Card>
  );
};
