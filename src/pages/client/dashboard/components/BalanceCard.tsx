
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
    <Card className="bg-gradient-primary text-white shadow-lg dashboard-card opacity-0 translate-y-4 hover-scale relative overflow-hidden w-full max-w-full">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full translate-y-8 sm:translate-y-10 -translate-x-8 sm:-translate-x-10"></div>
      
      <CardHeader className="pb-2 p-3 sm:p-4 relative z-10">
        <CardTitle className="flex justify-between items-center text-sm sm:text-base font-semibold">
          <span className="truncate">Saldo disponível</span>
          <div className="relative flex-shrink-0">
            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
            <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5 absolute -top-0.5 -right-0.5 text-yellow-300" />
          </div>
        </CardTitle>
        <CardDescription className="text-white/70 text-xs truncate">
          Valor total para resgate
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 p-3 sm:p-4 pt-0 relative z-10 w-full min-w-0">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 break-words">{balance}</div>
        <div className="space-y-2 w-full min-w-0">
          <div className="flex items-center justify-between text-xs">
            <span className="truncate flex-1">Progresso para nível Gold</span>
            <span className="font-semibold flex-shrink-0 ml-2">{nextLevelProgress}%</span>
          </div>
          <Progress value={nextLevelProgress} className="h-2 bg-white/20 w-full" />
          <p className="text-xs text-white/80 leading-relaxed">
            Gaste mais R$ 150,00 para atingir o nível Gold e ganhar 10% de cashback.
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0 relative z-10">
        <Button variant="secondary" className="w-full hover-scale font-medium text-xs sm:text-sm h-8 sm:h-9">
          Resgatar Saldo
        </Button>
      </CardFooter>
    </Card>
  );
};
