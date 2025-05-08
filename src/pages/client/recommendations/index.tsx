
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ActionButtons } from './components/ActionButtons';
import { RecommendationCards } from './components/RecommendationCards';
import { 
  personalizedRecommendations, 
  trendingRecommendations, 
  upcomingRecommendations 
} from './data/recommendationData';
import { Tag, TrendingUp, Clock, ShoppingBag, Gift, TagIcon } from "lucide-react";

const RecommendationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personalized');
  
  const tabTitle = {
    personalized: "Recomendações Personalizadas",
    trending: "Ofertas em Destaque",
    upcoming: "Previsões de Compra",
    products: "Produtos com Cashback"
  };
  
  const tabIcon = {
    personalized: <Tag className="h-5 w-5 mr-2" />,
    trending: <TrendingUp className="h-5 w-5 mr-2" />,
    upcoming: <Clock className="h-5 w-5 mr-2" />,
    products: <Gift className="h-5 w-5 mr-2" />
  };
  
  const TabDescription = () => {
    switch(activeTab) {
      case 'personalized':
        return "Recomendações baseadas no seu histórico de compras e preferências.";
      case 'trending':
        return "Ofertas limitadas com cashback ampliado nas lojas participantes.";
      case 'upcoming':
        return "Previsões de compras futuras com cashback especial.";
      case 'products':
        return "Produtos disponíveis nas lojas com cashback exclusivo para você.";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6 container py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {tabIcon[activeTab as keyof typeof tabIcon]} {tabTitle[activeTab as keyof typeof tabTitle]}
          </h1>
          <p className="text-muted-foreground mt-1">
            <TabDescription />
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <ShoppingBag className="h-4 w-4 mr-2" /> Todas as Lojas
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <TagIcon className="h-4 w-4 mr-2" /> Categorias
          </Button>
          <Button size="sm">
            <Gift className="h-4 w-4 mr-2" /> Resgatar Cashback
          </Button>
        </div>
      </div>
      
      <ActionButtons />
      
      <Tabs defaultValue="personalized" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="personalized">
            <Tag className="h-4 w-4 mr-2" /> Para Você
          </TabsTrigger>
          <TabsTrigger value="trending">
            <TrendingUp className="h-4 w-4 mr-2" /> Em Alta
          </TabsTrigger>
          <TabsTrigger value="upcoming">
            <Clock className="h-4 w-4 mr-2" /> Proximamente
          </TabsTrigger>
          <TabsTrigger value="products">
            <Gift className="h-4 w-4 mr-2" /> Produtos
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personalized">
          <RecommendationCards recommendations={personalizedRecommendations} type="personalized" />
        </TabsContent>
        
        <TabsContent value="trending">
          <RecommendationCards recommendations={trendingRecommendations} type="trending" />
        </TabsContent>
        
        <TabsContent value="upcoming">
          <RecommendationCards recommendations={upcomingRecommendations} type="upcoming" />
        </TabsContent>
        
        <TabsContent value="products">
          <RecommendationCards recommendations={[...personalizedRecommendations, ...trendingRecommendations]} type="products" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecommendationsPage;
