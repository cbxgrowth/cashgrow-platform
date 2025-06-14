
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, TrendingUp, Bell, Download, Sparkles } from "lucide-react";

export const SummaryCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 hover-scale glass-card card-shadow w-full max-w-full overflow-hidden">
      <CardHeader className="pb-2 p-3 sm:p-4">
        <div className="flex items-center justify-between min-w-0">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-sm sm:text-base font-semibold truncate">Resumo</CardTitle>
            <CardDescription className="text-xs text-muted-foreground truncate">
              Últimos 30 dias
            </CardDescription>
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-1.5 rounded-lg flex-shrink-0">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4 pt-0 space-y-3 w-full min-w-0">
        <div className="space-y-2 w-full min-w-0">
          <p className="text-xs font-medium text-muted-foreground">Cashback Recebido</p>
          <div className="flex items-center gap-2 w-full min-w-0">
            <div className="bg-green-500/20 rounded-full p-1.5 flex-shrink-0">
              <ArrowDown className="h-3 w-3 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-base sm:text-lg font-bold text-green-600 block truncate">R$ 76,25</span>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <TrendingUp className="h-2.5 w-2.5 flex-shrink-0" />
                <span className="truncate">12% a mais que no mês anterior</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 w-full min-w-0">
          <p className="text-xs font-medium text-muted-foreground">Valores Resgatados</p>
          <div className="flex items-center gap-2 w-full min-w-0">
            <div className="bg-orange-500/20 rounded-full p-1.5 flex-shrink-0">
              <ArrowUp className="h-3 w-3 text-orange-500" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-base sm:text-lg font-bold text-orange-600 block truncate">R$ 30,00</span>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                Último resgate em 15/04
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg border border-accent/20 w-full min-w-0">
          <div className="flex items-start gap-2 w-full min-w-0">
            <div className="bg-accent/20 rounded-full p-1.5 mt-0.5 flex-shrink-0">
              <Bell className="h-3 w-3 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium mb-1">Oferta exclusiva!</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ganhe cashback duplo em compras acima de R$ 200 na Tech Store até 30/05.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
          <Download className="mr-1.5 h-3 w-3" /> 
          Extrato Completo
        </Button>
      </CardFooter>
    </Card>
  );
};
