
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, TrendingUp, Bell, Download } from "lucide-react";

export const SummaryCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 hover-scale glass-card card-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Resumo</CardTitle>
        <CardDescription>
          Movimentação dos últimos 30 dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Cashback Recebido</p>
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 rounded-full p-2">
                <ArrowDown className="h-4 w-4 text-green-500" />
              </div>
              <span className="text-2xl font-bold text-green-600">R$ 76,25</span>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              12% a mais que no mês anterior
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Valores Resgatados</p>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/20 rounded-full p-2">
                <ArrowUp className="h-4 w-4 text-orange-500" />
              </div>
              <span className="text-2xl font-bold text-orange-600">R$ 30,00</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Último resgate em 15/04
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-start gap-3">
            <div className="bg-accent/20 rounded-full p-2 mt-0.5">
              <Bell className="h-4 w-4 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Oferta exclusiva!</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ganhe cashback duplo em compras acima de R$ 200 na Tech Store até 30/05.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover-scale">
          <Download className="mr-2 h-4 w-4" /> Extrato Completo
        </Button>
      </CardFooter>
    </Card>
  );
};
