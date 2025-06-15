
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Zap, Plus, AlertCircle } from "lucide-react";
import { useAICredits } from '@/hooks/useAICredits';

interface AICreditsBadgeProps {
  companyId: string;
  showDetails?: boolean;
}

export const AICreditsBadge: React.FC<AICreditsBadgeProps> = ({ 
  companyId, 
  showDetails = false 
}) => {
  const { credits, loading, addCredits } = useAICredits(companyId);

  const handleAddCredits = async () => {
    // Em produção, isso deveria abrir um modal de pagamento
    await addCredits(100, 'Recarga manual - Demonstração');
  };

  if (loading) {
    return (
      <Badge variant="outline">
        <Zap className="h-3 w-3 mr-1" />
        Carregando...
      </Badge>
    );
  }

  if (!credits) {
    return (
      <Badge variant="destructive">
        <AlertCircle className="h-3 w-3 mr-1" />
        Sem créditos
      </Badge>
    );
  }

  const creditPercentage = (credits.remaining_credits / credits.total_credits) * 100;
  const isLowCredits = credits.remaining_credits < 10;

  if (showDetails) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-600" />
            Créditos IA
          </CardTitle>
          <CardDescription>
            Gerencie seus créditos para funcionalidades de IA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Disponível:</span>
            <Badge variant={isLowCredits ? "destructive" : "default"}>
              {credits.remaining_credits} / {credits.total_credits}
            </Badge>
          </div>
          
          <Progress 
            value={creditPercentage} 
            className="h-2"
          />
          
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div>Usados: {credits.used_credits}</div>
            <div>Restantes: {credits.remaining_credits}</div>
          </div>
          
          <Button 
            size="sm" 
            className="w-full" 
            onClick={handleAddCredits}
            variant="outline"
          >
            <Plus className="h-3 w-3 mr-1" />
            Comprar Créditos
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Badge 
      variant={isLowCredits ? "destructive" : "default"}
      className="cursor-pointer"
    >
      <Zap className="h-3 w-3 mr-1" />
      {credits.remaining_credits} créditos
    </Badge>
  );
};
