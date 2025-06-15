
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Plus } from "lucide-react";
import { AICreditsBadge } from '@/components/ai-campaigns/AICreditsBadge';

interface AICampaignsHeaderProps {
  companyId: string;
}

export const AICampaignsHeader: React.FC<AICampaignsHeaderProps> = ({ companyId }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary" />
          Campanhas IA
        </h1>
        <p className="text-muted-foreground">
          Campanhas inteligentes otimizadas por IA com sistema de créditos baseado em uso
        </p>
      </div>
      <div className="flex items-center gap-3">
        <AICreditsBadge companyId={companyId} />
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Nova Campanha IA
        </Button>
      </div>
    </div>
  );
};
