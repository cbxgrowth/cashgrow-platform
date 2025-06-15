
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  Brain
} from "lucide-react";
import { CampaignData } from '@/hooks/ai-campaigns/types';

interface AnalyticsOverviewProps {
  campaignData: CampaignData;
  suggestionsCount: number;
}

export const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({ 
  campaignData, 
  suggestionsCount 
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Usuários Próximos</span>
          </div>
          <div className="text-2xl font-bold">{campaignData.proximityUsers}</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Transações (30d)</span>
          </div>
          <div className="text-2xl font-bold">{campaignData.transactions.length}</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Base de Clientes</span>
          </div>
          <div className="text-2xl font-bold">{campaignData.customerSegments.length}</div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium">Sugestões IA</span>
          </div>
          <div className="text-2xl font-bold">{suggestionsCount}</div>
        </CardContent>
      </Card>
    </div>
  );
};
