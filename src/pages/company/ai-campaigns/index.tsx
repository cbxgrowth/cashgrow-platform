import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Target, Users, BarChart3, Plus, Brain, Sparkles, MapPin } from "lucide-react";
import { AICampaignSuggestionsWithCredits } from '@/components/ai-campaigns/AICampaignSuggestionsWithCredits';
import { AIInsightsDashboard } from '@/components/ai-campaigns/AIInsightsDashboard';
import { AICreditsBadge } from '@/components/ai-campaigns/AICreditsBadge';

const CompanyAiCampaigns: React.FC = () => {
  const [activeCampaigns] = useState([
    { 
      id: 1, 
      name: 'Cashback Duplo - Eletrônicos', 
      status: 'Ativo', 
      progress: 78, 
      reach: 1250, 
      engagement: 24.5,
      locationBased: true,
      aiOptimized: true
    },
    { 
      id: 2, 
      name: 'Oferta Personalizada - Moda', 
      status: 'Planejando', 
      progress: 35, 
      reach: 890, 
      engagement: 18.2,
      locationBased: false,
      aiOptimized: true
    },
    { 
      id: 3, 
      name: 'Campanha de Reativação', 
      status: 'Finalizada', 
      progress: 100, 
      reach: 2100, 
      engagement: 31.8,
      locationBased: true,
      aiOptimized: false
    },
  ]);

  // Simulando ID da empresa - em produção viria do contexto de autenticação
  const companyId = "company-1";

  return (
    <div className="space-y-6">
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

      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            IA com Sistema de Créditos Inteligente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Nossa IA opera com um sistema de créditos fair-use. Cada sugestão gerada, insight analisado 
            ou campanha aplicada consome créditos baseados na complexidade da operação. Isso garante 
            uso eficiente e custos transparentes.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary">
              Ver Planos de Créditos
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Histórico de Uso
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="suggestions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="suggestions">Sugestões IA</TabsTrigger>
          <TabsTrigger value="credits">Créditos</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-4">
          <AICampaignSuggestionsWithCredits companyId={companyId} />
        </TabsContent>

        <TabsContent value="credits" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <AIInsightsDashboard companyId={companyId} />
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAiCampaigns;
