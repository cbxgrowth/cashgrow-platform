
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AICampaignSuggestionsWithCredits } from '@/components/ai-campaigns/AICampaignSuggestionsWithCredits';
import { AIInsightsDashboard } from '@/components/ai-campaigns/AIInsightsDashboard';
import { 
  AICampaignsHeader, 
  StatsCards, 
  AIFeaturesCard, 
  CreditsTab, 
  CampaignsTab, 
  PerformanceTab 
} from './components';

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
      <AICampaignsHeader companyId={companyId} />

      <StatsCards />

      <AIFeaturesCard />

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
          <CreditsTab companyId={companyId} />
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <AIInsightsDashboard companyId={companyId} />
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <CampaignsTab activeCampaigns={activeCampaigns} />
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <PerformanceTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAiCampaigns;
