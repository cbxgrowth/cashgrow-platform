
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CreditCard } from "lucide-react";

interface BalanceCardProps {
  balance: string;
  nextLevelProgress: number;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance, nextLevelProgress }) => {
  return (
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
        <div className="text-4xl font-bold mb-6">{balance}</div>
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
  );
};
