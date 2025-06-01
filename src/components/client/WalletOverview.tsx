
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Clock, DollarSign, ArrowUpRight, Gift } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WalletOverview: React.FC = () => {
  const walletData = {
    availableBalance: 125.40,
    pendingBalance: 45.80,
    monthlyEarnings: 86.50,
    totalEarnings: 1250.90,
    nextPayment: '15/01/2025',
    recentTransactions: [
      { id: 1, store: 'Tech Store', amount: 12.50, date: '12/01', status: 'confirmed' },
      { id: 2, store: 'Fashion Shop', amount: 8.90, date: '11/01', status: 'pending' },
      { id: 3, store: 'Beauty Plus', amount: 15.30, date: '10/01', status: 'confirmed' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Saldo Principal */}
      <Card className="shadow-md hover-scale">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            Carteira de Cashback
          </CardTitle>
          <CardDescription>
            Acompanhe seus ganhos e resgate quando quiser
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Saldo Disponível</span>
              </div>
              <div className="text-3xl font-bold text-green-600">
                R$ {walletData.availableBalance.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground">
                Pronto para resgate
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Saldo Pendente</span>
              </div>
              <div className="text-3xl font-bold text-orange-600">
                R$ {walletData.pendingBalance.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground">
                Será liberado em {walletData.nextPayment}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button className="flex-1">
              <Gift className="h-4 w-4 mr-2" />
              Resgatar Cashback
            </Button>
            <Button variant="outline">
              Ver Histórico
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Ganhos Mensais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {walletData.monthlyEarnings.toFixed(2)}</div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              +12% vs mês anterior
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Wallet className="h-4 w-4 text-primary" />
              Total Acumulado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {walletData.totalEarnings.toFixed(2)}</div>
            <p className="text-sm text-muted-foreground mt-1">
              Desde o primeiro cashback
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transações Recentes */}
      <Card className="hover-scale">
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
          <CardDescription>
            Últimos cashbacks recebidos
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            {walletData.recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.store}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">
                    +R$ {transaction.amount.toFixed(2)}
                  </p>
                  <Badge 
                    className={transaction.status === 'confirmed' ? 
                      'bg-green-500/20 text-green-600' : 
                      'bg-orange-500/20 text-orange-600'
                    }
                  >
                    {transaction.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            Ver Todas as Transações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletOverview;
