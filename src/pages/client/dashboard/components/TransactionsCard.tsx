
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const stores = ["Mercado Verde", "Farmácia Saúde", "Moda Express", "Tech Store", "Padaria Delícia"];

export const TransactionsCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 card-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Últimas transações</CardTitle>
        <CardDescription>
          Histórico recente de cashback
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="flex justify-between items-center p-4 bg-muted/30 hover:bg-muted/50 transition-colors rounded-lg transaction-item opacity-0 translate-y-4 hover-scale cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img src={`https://via.placeholder.com/48/8B5CF6/FFFFFF?text=${i+1}`} alt="Loja" className="w-7 h-7 rounded-full" />
                </div>
                <div>
                  <p className="font-medium">{stores[i % 5]}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(Date.now() - i * 86400000 * 2).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              <div className="text-right flex items-center gap-3">
                <div>
                  <p className="font-bold text-green-600">+R$ {(Math.random() * 20 + 5).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{Math.floor(Math.random() * 10 + 1)}% cashback</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="w-full hover-scale">
          Ver todas as transações
        </Button>
      </CardFooter>
    </Card>
  );
};
