
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, Target, Users, BarChart3, Plus, Brain, Sparkles } from "lucide-react";

const CompanyAiCampaigns: React.FC = () => {
  const [activeCampaigns] = useState([
    { id: 1, name: 'Cashback Duplo - Eletrônicos', status: 'Ativo', progress: 78, reach: 1250, engagement: 24.5 },
    { id: 2, name: 'Oferta Personalizada - Moda', status: 'Planejando', progress: 35, reach: 890, engagement: 18.2 },
    { id: 3, name: 'Campanha de Reativação', status: 'Finalizada', progress: 100, reach: 2100, engagement: 31.8 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            Campanhas IA
          </h1>
          <p className="text-muted-foreground">Campanhas inteligentes otimizadas por IA</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Nova Campanha IA
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-600" />
              Campanhas Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-green-600">+3 esta semana</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600" />
              Taxa de Conversão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34.2%</div>
            <p className="text-xs text-green-600">+12% vs campanhas manuais</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-orange-600" />
              ROI Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">425%</div>
            <p className="text-xs text-green-600">+89% com IA</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Sugestão da IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Detectamos que clientes que compraram eletrônicos têm 78% mais probabilidade de comprar acessórios 
            dentro de 15 dias. Recomendamos criar uma campanha direcionada.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary">
              Criar Campanha Sugerida
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Ver Análise Completa
            </Button>
          </div>
        </CardContent>
      </Card>

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
                    <h3 className="font-semibold">{campaign.name}</h3>
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
                    <Button variant="ghost" size="sm">Otimizar</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyAiCampaigns;
