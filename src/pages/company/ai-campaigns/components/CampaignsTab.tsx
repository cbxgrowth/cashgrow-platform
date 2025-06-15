
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Brain, Users, Target } from "lucide-react";

interface Campaign {
  id: number;
  name: string;
  status: string;
  progress: number;
  reach: number;
  engagement: number;
  locationBased: boolean;
  aiOptimized: boolean;
}

interface CampaignsTabProps {
  activeCampaigns: Campaign[];
}

export const CampaignsTab: React.FC<CampaignsTabProps> = ({ activeCampaigns }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campanhas em Andamento</CardTitle>
        <CardDescription>Monitoramento em tempo real das suas campanhas IA</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeCampaigns.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    {campaign.locationBased && (
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        Localização
                      </Badge>
                    )}
                    {campaign.aiOptimized && (
                      <Badge variant="outline" className="text-xs">
                        <Brain className="h-3 w-3 mr-1" />
                        IA
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alcance: {campaign.reach.toLocaleString()} pessoas | 
                    Engajamento: {campaign.engagement}%
                  </p>
                </div>
                <Badge variant={
                  campaign.status === 'Ativo' ? 'default' : 
                  campaign.status === 'Planejando' ? 'secondary' : 'outline'
                }>
                  {campaign.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso da Campanha</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {campaign.reach}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-3 w-3" />
                    {campaign.engagement}%
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Ver Detalhes</Button>
                  <Button variant="ghost" size="sm">Otimizar IA</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
