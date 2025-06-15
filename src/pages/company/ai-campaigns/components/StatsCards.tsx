
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, BarChart3 } from "lucide-react";

export const StatsCards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Brain className="h-4 w-4 text-purple-600" />
            Campanhas IA Ativas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-green-600">Sistema baseado em créditos</p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Target className="h-4 w-4 text-green-600" />
            Conversão IA + Localização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42.7%</div>
          <p className="text-xs text-green-600">+25% vs campanhas tradicionais</p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-orange-600" />
            ROI Integrado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">525%</div>
          <p className="text-xs text-green-600">Otimizado por IA com créditos</p>
        </CardContent>
      </Card>
    </div>
  );
};
