
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, TrendingUp, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CashbackCalculator: React.FC = () => {
  const [purchaseValue, setPurchaseValue] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [calculatedCashback, setCalculatedCashback] = useState(0);

  const stores = [
    { id: 'tech-store', name: 'Tech Store', cashback: 8 },
    { id: 'fashion-shop', name: 'Fashion Shop', cashback: 12 },
    { id: 'home-decor', name: 'Home & Decor', cashback: 6 },
    { id: 'beauty-plus', name: 'Beauty Plus', cashback: 15 },
    { id: 'sports-world', name: 'Sports World', cashback: 10 }
  ];

  const calculateCashback = () => {
    const value = parseFloat(purchaseValue);
    const store = stores.find(s => s.id === selectedStore);
    
    if (value && store) {
      const cashback = (value * store.cashback) / 100;
      setCalculatedCashback(cashback);
    } else {
      setCalculatedCashback(0);
    }
  };

  const projections = [
    { period: '1 mês', multiplier: 1, color: 'bg-blue-500' },
    { period: '3 meses', multiplier: 3, color: 'bg-green-500' },
    { period: '6 meses', multiplier: 6, color: 'bg-orange-500' },
    { period: '1 ano', multiplier: 12, color: 'bg-purple-500' }
  ];

  return (
    <Card className="shadow-md hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Calculadora de Cashback
        </CardTitle>
        <CardDescription>
          Simule quanto você pode ganhar de volta nas suas compras
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="purchase-value">Valor da Compra (R$)</Label>
            <Input
              id="purchase-value"
              type="number"
              step="0.01"
              placeholder="100.00"
              value={purchaseValue}
              onChange={(e) => setPurchaseValue(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="store-select">Loja</Label>
            <select
              id="store-select"
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Selecione uma loja</option>
              {stores.map(store => (
                <option key={store.id} value={store.id}>
                  {store.name} - {store.cashback}% cashback
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <Button onClick={calculateCashback} className="w-full">
          <Calculator className="h-4 w-4 mr-2" />
          Calcular Cashback
        </Button>
        
        {calculatedCashback > 0 && (
          <div className="space-y-4 p-4 border rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800 dark:text-green-400">
                  Cashback Calculado
                </span>
              </div>
              <div className="text-3xl font-bold text-green-600">
                R$ {calculatedCashback.toFixed(2)}
              </div>
              <p className="text-sm text-green-700 dark:text-green-500">
                Em uma compra de R$ {parseFloat(purchaseValue).toFixed(2)}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="font-medium">Projeções de Ganho</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {projections.map((projection, index) => (
                  <div key={index} className="p-3 border rounded-lg bg-white dark:bg-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{projection.period}</span>
                      <div className={`w-2 h-2 rounded-full ${projection.color}`}></div>
                    </div>
                    <div className="text-lg font-bold">
                      R$ {(calculatedCashback * projection.multiplier).toFixed(2)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <TrendingUp className="h-3 w-3" />
                      Compras mensais similares
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <h4 className="font-medium">Lojas Disponíveis</h4>
          <div className="grid grid-cols-1 gap-2">
            {stores.map(store => (
              <div key={store.id} className="flex items-center justify-between p-2 border rounded-lg">
                <span className="text-sm">{store.name}</span>
                <Badge variant="outline">
                  {store.cashback}% cashback
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CashbackCalculator;
