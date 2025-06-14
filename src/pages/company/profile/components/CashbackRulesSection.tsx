
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Percent, Plus } from "lucide-react";

const CashbackRulesSection: React.FC = () => {
  const rules = [
    { category: 'Eletrônicos', percentage: 5 },
    { category: 'Moda', percentage: 8 },
    { category: 'Casa e Jardim', percentage: 3 },
  ];

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Percent className="h-5 w-5 text-accent" />
          Regras de Cashback por Categoria
        </h3>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Nova Regra
        </Button>
      </div>
      
      <div className="space-y-3">
        {rules.map((rule, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-slate-800">
            <div>
              <h4 className="font-medium">{rule.category}</h4>
              <p className="text-sm text-muted-foreground">Cashback automático</p>
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={rule.percentage}
                className="w-20 text-center"
                min="0"
                max="100"
              />
              <span className="text-sm font-medium">%</span>
              <Button variant="ghost" size="sm">
                Editar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="default-cashback">Cashback Padrão (%)</Label>
          <Input
            id="default-cashback"
            type="number"
            value="2"
            min="0"
            max="100"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="max-cashback">Cashback Máximo por Compra (R$)</Label>
          <Input
            id="max-cashback"
            type="number"
            value="500"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default CashbackRulesSection;
