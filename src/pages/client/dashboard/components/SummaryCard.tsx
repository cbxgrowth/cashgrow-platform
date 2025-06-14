
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, TrendingUp, Bell, Download, Sparkles } from "lucide-react";

export const SummaryCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 hover-scale glass-card card-shadow w-full">
      <CardHeader className="pb-3 sm:pb-4 p-3 sm:p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base sm:text-lg lg:text-xl truncate">Resumo</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Últimos 30 dias
            </CardDescription>
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-2 rounded-lg flex-shrink-0">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">Cashback Recebido</p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-green-500/20 rounded-full p-2 flex-shrink-0">
                <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">R$ 76,25</span>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  12% a mais que no mês anterior
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">Valores Resgatados</p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-orange-500/20 rounded-full p-2 flex-shrink-0">
                <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">R$ 30,00</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Último resgate em 15/04
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-accent/10 rounded-lg border border-accent/20 w-full">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="bg-accent/20 rounded-full p-2 mt-0.5 flex-shrink-0">
              <Bell className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium mb-1">Oferta exclusiva!</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ganhe cashback duplo em compras acima de R$ 200 na Tech Store até 30/05.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 lg:p-6 pt-0">
        <Button variant="outline" className="w-full hover-scale touch-target text-sm sm:text-base">
          <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> 
          Extrato Completo
        </Button>
      </CardFooter>
    </Card>
  );
};
