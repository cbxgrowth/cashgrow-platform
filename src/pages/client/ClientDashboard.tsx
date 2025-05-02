
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  CreditCard,
  Download,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const ClientDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Meu Cashback</h1>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" /> Últimos 30 dias
        </Button>
      </div>
      
      {/* Balance Card */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-primary to-secondary text-white">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Saldo disponível</span>
              <CreditCard className="h-5 w-5" />
            </CardTitle>
            <CardDescription className="text-white/70">
              Valor total para resgate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">R$ 123,45</div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Resgatar Saldo
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Resumo</CardTitle>
            <CardDescription>
              Movimentação dos últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Cashback Recebido</p>
                <div className="flex items-center gap-2">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <ArrowDown className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-xl font-medium text-green-600">R$ 76,25</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Valores Resgatados</p>
                <div className="flex items-center gap-2">
                  <div className="bg-orange-500/20 rounded-full p-1">
                    <ArrowUp className="h-3 w-3 text-orange-500" />
                  </div>
                  <span className="text-xl font-medium text-orange-600">R$ 30,00</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" /> Extrato Completo
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Últimas transações</CardTitle>
          <CardDescription>
            Histórico recente de cashback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <img src="https://via.placeholder.com/40" alt="Loja" className="w-6 h-6 rounded-full" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {["Mercado Verde", "Farmácia Saúde", "Moda Express", "Tech Store", "Padaria Delícia"][i % 5]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(Date.now() - i * 86400000 * 2).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">+R$ {(Math.random() * 20 + 5).toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 10 + 1)}% cashback</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="w-full">
            Ver todas as transações
          </Button>
        </CardFooter>
      </Card>
      
      {/* Connected Businesses */}
      <Card>
        <CardHeader>
          <CardTitle>Empresas Conectadas</CardTitle>
          <CardDescription>
            Lojas onde você já acumulou cashback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Loja" className="w-8 h-8 rounded-full" />
                </div>
                <p className="text-sm font-medium">
                  {["Mercado Verde", "Farmácia Saúde", "Moda Express", "Tech Store", "Padaria Delícia"][i]}
                </p>
                <p className="text-xs text-muted-foreground">
                  {Math.floor(Math.random() * 10 + 1)}% cashback
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Descobrir mais lojas
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ClientDashboard;
