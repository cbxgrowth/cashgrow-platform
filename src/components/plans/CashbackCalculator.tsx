
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp } from 'lucide-react';
import { usePlans } from '@/hooks/usePlans';

const CashbackCalculator: React.FC = () => {
  const [purchaseAmount, setPurchaseAmount] = useState('100');
  const [cashbackRate, setCashbackRate] = useState('5');
  const { plans, calculateCashback } = usePlans();

  const baseCashback = (parseFloat(purchaseAmount) || 0) * ((parseFloat(cashbackRate) || 0) / 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Simulador de Cashback
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="purchase">Valor da Compra</Label>
            <Input
              id="purchase"
              type="number"
              value={purchaseAmount}
              onChange={(e) => setPurchaseAmount(e.target.value)}
              placeholder="100.00"
            />
          </div>
          <div>
            <Label htmlFor="cashback">Cashback (%)</Label>
            <Input
              id="cashback"
              type="number"
              value={cashbackRate}
              onChange={(e) => setCashbackRate(e.target.value)}
              placeholder="5"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          {plans.map((plan) => {
            const calculation = calculateCashback(baseCashback, plan);
            return (
              <div key={plan.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <span className="font-medium">{plan.name}</span>
                  {calculation.bonusAmount > 0 && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <TrendingUp className="h-3 w-3" />
                      +R$ {calculation.bonusAmount.toFixed(2)} extra
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">
                    R$ {calculation.finalAmount.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CashbackCalculator;
