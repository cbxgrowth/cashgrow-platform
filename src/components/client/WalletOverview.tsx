
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, DollarSign, Gift, Crown } from "lucide-react";
import { usePlans } from '@/hooks/usePlans';

const WalletOverview: React.FC = () => {
  const { userPlan, canRescuePix } = usePlans();
  
  // Mock data - substituir por dados reais
  const balance = 127.50;
  const monthlyEarnings = 45.20;
  const totalEarnings = 890.75;
  
  const plan = userPlan?.plan;
  const cashbackBonus = plan?.cashback_multiplier ? Math.round((plan.cashback_multiplier - 1) * 100) : 0;
  const canPixRescue = canRescuePix(userPlan);

  return (
    <div className="space-y-6">
      {/* Plan Status Banner */}
      {plan && plan.name !== 'Gratuito' && (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Plano {plan.name} Ativo</h3>
                  <p className="text-sm text-muted-foreground">
                    Você está ganhando {cashbackBonus}% a mais em cashback!
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                +{cashbackBonus}%
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ {balance.toFixed(2)}</div>
            <div className="flex items-center gap-2 mt-2">
              <Button 
                size="sm" 
                disabled={!canPixRescue}
                className="flex-1"
              >
                Resgatar PIX
              </Button>
              {!canPixRescue && (
                <Badge variant="outline" className="text-xs">
                  Limite atingido
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ganhos Este Mês</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {monthlyEarnings.toFixed(2)}</div>
            {cashbackBonus > 0 && (
              <p className="text-xs text-green-600 mt-1">
                +R$ {(monthlyEarnings * (cashbackBonus / 100)).toFixed(2)} bônus do plano
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Acumulado</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {totalEarnings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Desde o início
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Últimas Transações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { store: 'Loja ABC', amount: 15.50, cashback: 2.10, date: '2024-01-15' },
              { store: 'Mercado XYZ', amount: 89.90, cashback: 8.99, date: '2024-01-14' },
              { store: 'Farmácia 123', amount: 45.00, cashback: 4.50, date: '2024-01-13' }
            ].map((transaction, index) => {
              const bonusCashback = plan ? transaction.cashback * (cashbackBonus / 100) : 0;
              const totalCashback = transaction.cashback + bonusCashback;
              
              return (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{transaction.store}</p>
                    <p className="text-sm text-muted-foreground">
                      Compra: R$ {transaction.amount.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">
                      +R$ {totalCashback.toFixed(2)}
                    </p>
                    {bonusCashback > 0 && (
                      <p className="text-xs text-primary">
                        (+R$ {bonusCashback.toFixed(2)} bônus)
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletOverview;
