
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Crown, TrendingUp } from "lucide-react";
import { usePlans } from '@/hooks/usePlans';
import { Link } from 'react-router-dom';

const CashbackCalculator: React.FC = () => {
  const [amount, setAmount] = useState('100');
  const [cashbackRate, setCashbackRate] = useState('5');
  const { plans, userPlan, calculateCashback } = usePlans();

  const purchaseAmount = parseFloat(amount) || 0;
  const baseRate = parseFloat(cashbackRate) || 0;
  const baseCashback = purchaseAmount * (baseRate / 100);

  const currentPlan = userPlan?.plan;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Simular Cashback
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="amount">Valor da Compra (R$)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100.00"
            />
          </div>
          <div>
            <Label htmlFor="rate">Taxa de Cashback (%)</Label>
            <Input
              id="rate"
              type="number"
              value={cashbackRate}
              onChange={(e) => setCashbackRate(e.target.value)}
              placeholder="5"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <h4 className="font-medium">Comparação por Plano:</h4>
          
          {plans.map((plan) => {
            const calculation = calculateCashback(baseCashback, plan);
            const isCurrentPlan = currentPlan?.id === plan.id;
            
            return (
              <div 
                key={plan.id} 
                className={`p-3 rounded-lg border ${
                  isCurrentPlan 
                    ? 'bg-primary/10 border-primary' 
                    : 'bg-muted/50 border-muted'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{plan.name}</span>
                    {isCurrentPlan && (
                      <Crown className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">
                      R$ {calculation.finalAmount.toFixed(2)}
                    </div>
                    {calculation.bonusAmount > 0 && (
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <TrendingUp className="h-3 w-3" />
                        +R$ {calculation.bonusAmount.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
                
                {plan.price > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    R$ {plan.price.toFixed(2)}/mês
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!currentPlan || currentPlan.name === 'Gratuito' ? (
          <Button asChild className="w-full">
            <Link to="/client/plans">
              Upgrade para Ganhar Mais
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full">
            <Link to="/client/plans">
              Ver Todos os Planos
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CashbackCalculator;
