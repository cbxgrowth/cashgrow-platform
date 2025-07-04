
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CorporateHeader } from './components/CorporateHeader';
import { StatisticsCards } from './components/StatisticsCards';
import { CorporateFeatures } from './components/CorporateFeatures';
import { PricingPlans } from './components/PricingPlans';
import { IntegrationSection } from './components/IntegrationSection';
import { SupportSection } from './components/SupportSection';

const CompanyCorporate: React.FC = () => {
  return (
    <div className="space-y-6">
      <CorporateHeader />
      <StatisticsCards />

      <Tabs defaultValue="features" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="features">Recursos</TabsTrigger>
          <TabsTrigger value="plans">Planos</TabsTrigger>
          <TabsTrigger value="integration">Integração</TabsTrigger>
          <TabsTrigger value="support">Suporte</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="space-y-4">
          <CorporateFeatures />
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <PricingPlans />
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <IntegrationSection />
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <SupportSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyCorporate;
