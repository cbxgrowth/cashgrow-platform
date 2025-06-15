
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PerformanceTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Integrada</CardTitle>
        <CardDescription>
          Análise completa do impacto da IA na performance com controle de créditos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Impacto em Vendas</h4>
              <div className="text-2xl font-bold text-green-600">+89%</div>
              <p className="text-sm text-gray-600">Aumento com IA + créditos otimizados</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Eficiência de Créditos</h4>
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <p className="text-sm text-gray-600">Taxa de conversão por crédito usado</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">ROI por Crédito</h4>
              <div className="text-2xl font-bold text-purple-600">R$ 15,60</div>
              <p className="text-sm text-gray-600">Retorno médio por crédito consumido</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Economia vs Manual</h4>
              <div className="text-2xl font-bold text-orange-600">+67%</div>
              <p className="text-sm text-gray-600">Eficiência vs campanhas manuais</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
