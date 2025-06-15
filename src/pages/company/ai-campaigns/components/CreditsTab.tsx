
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AICreditsBadge } from '@/components/ai-campaigns/AICreditsBadge';

interface CreditsTabProps {
  companyId: string;
}

export const CreditsTab: React.FC<CreditsTabProps> = ({ companyId }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <AICreditsBadge companyId={companyId} showDetails={true} />
      
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Uso de Créditos</CardTitle>
          <CardDescription>
            Acompanhe como seus créditos IA estão sendo utilizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 border rounded">
              <span className="text-sm">Sugestão aplicada - Campanha de Proximidade</span>
              <span className="text-sm font-medium text-red-600">-5 créditos</span>
            </div>
            <div className="flex justify-between items-center p-2 border rounded">
              <span className="text-sm">Geração de insights de localização</span>
              <span className="text-sm font-medium text-red-600">-3 créditos</span>
            </div>
            <div className="flex justify-between items-center p-2 border rounded">
              <span className="text-sm">Análise de padrões de retenção</span>
              <span className="text-sm font-medium text-red-600">-2 créditos</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
