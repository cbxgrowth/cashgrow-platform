
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp } from "lucide-react";

const stores = ["Mercado Verde", "Farmácia Saúde", "Moda Express", "Tech Store", "Padaria Delícia"];

export const TransactionsCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 card-shadow w-full">
      <CardHeader className="pb-3 sm:pb-4 p-3 sm:p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base sm:text-lg lg:text-xl truncate">Últimas transações</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Histórico recente de cashback
            </CardDescription>
          </div>
          <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
        <div className="space-y-2 sm:space-y-3">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="flex justify-between items-center p-2 sm:p-3 lg:p-4 bg-muted/30 hover:bg-muted/50 transition-colors rounded-lg transaction-item opacity-0 translate-y-4 hover-scale cursor-pointer touch-target w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={`https://via.placeholder.com/40/8B5CF6/FFFFFF?text=${i+1}`} 
                    alt="Loja" 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-xs sm:text-sm truncate">{stores[i % 5]}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(Date.now() - i * 86400000 * 2).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              
              <div className="text-right flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
                <div className="text-right">
                  <p className="font-bold text-green-600 text-xs sm:text-sm">+R$ {(Math.random() * 20 + 5).toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 10 + 1)}% cashback</p>
                </div>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 lg:p-6 pt-0">
        <Button variant="link" className="w-full hover-scale touch-target text-sm sm:text-base">
          Ver todas as transações
        </Button>
      </CardFooter>
    </Card>
  );
};
