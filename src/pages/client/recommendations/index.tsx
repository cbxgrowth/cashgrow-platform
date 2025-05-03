
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RecommendationCards } from './components/RecommendationCards';
import { ActionButtons } from './components/ActionButtons';
import { personalizedRecommendations, trendingRecommendations, upcomingRecommendations } from './data/recommendationData';

const ClientRecommendations: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personalized");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recomendações Inteligentes</h1>
          <p className="text-muted-foreground mt-1">
            Ofertas personalizadas com base no seu perfil e comportamento
          </p>
        </div>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>IA de Cashback</CardTitle>
          </div>
          <CardDescription>
            Nossa inteligência artificial analisa seu perfil para recomendar as melhores oportunidades de cashback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personalized" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="personalized">Personalizado</TabsTrigger>
              <TabsTrigger value="trending">Em Alta</TabsTrigger>
              <TabsTrigger value="upcoming">Previsões</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personalized" className="mt-4 space-y-4">
              <RecommendationCards 
                recommendations={personalizedRecommendations} 
                type="personalized" 
              />
            </TabsContent>
            
            <TabsContent value="trending" className="mt-4 space-y-4">
              <RecommendationCards 
                recommendations={trendingRecommendations} 
                type="trending" 
              />
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-4 space-y-4">
              <RecommendationCards 
                recommendations={upcomingRecommendations} 
                type="upcoming" 
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5 text-primary" />
              <CardTitle>Aproveite Melhor</CardTitle>
            </div>
          </div>
          <CardDescription>
            Continue aprimorando suas recomendações personalizadas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ActionButtons />
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientRecommendations;
