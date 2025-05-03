
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, ShoppingBag, TrendingUp, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const ClientRecommendations: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personalized");

  // Dados simulados para as recomendações
  const personalizedRecommendations = [
    {
      id: 1,
      name: 'Tech Store',
      logo: 'TS',
      category: 'Eletrônicos',
      cashbackPercentage: 8,
      relevanceScore: 98,
      reasoning: 'Baseado em suas compras recentes de gadgets',
      distance: '2.5 km'
    },
    {
      id: 2,
      name: 'Mercado Verde',
      logo: 'MV',
      category: 'Varejo',
      cashbackPercentage: 6,
      relevanceScore: 95,
      reasoning: 'Compras semanais frequentes em mercados',
      distance: '1.2 km'
    },
    {
      id: 3,
      name: 'Livraria Cultura',
      logo: 'LC',
      category: 'Educação',
      cashbackPercentage: 10,
      relevanceScore: 92,
      reasoning: 'Interesses em livros de tecnologia',
      distance: '4.2 km'
    },
  ];

  const trendingRecommendations = [
    {
      id: 1,
      name: 'Restaurante Bom Sabor',
      logo: 'RB',
      category: 'Alimentação',
      cashbackPercentage: 15,
      trendingReason: 'Oferta especial por tempo limitado',
      endsIn: '12h'
    },
    {
      id: 2,
      name: 'Pet Shop Amigo Fiel',
      logo: 'PS',
      category: 'Pet',
      cashbackPercentage: 12,
      trendingReason: 'Cashback aumentado para novos clientes',
      endsIn: '2d'
    },
    {
      id: 3,
      name: 'Farmácia Saúde',
      logo: 'FS',
      category: 'Saúde',
      cashbackPercentage: 9,
      trendingReason: 'Produtos para gripe em alta',
      endsIn: '3d'
    },
  ];

  const upcomingRecommendations = [
    {
      id: 1,
      name: 'Padaria Delícia',
      logo: 'PD',
      category: 'Alimentação',
      predictedDate: '24/05',
      usualCashback: 6,
      boostedCashback: 9,
      reasoning: 'Você costuma comprar pão nos sábados'
    },
    {
      id: 2,
      name: 'Tech Store',
      logo: 'TS',
      category: 'Eletrônicos',
      predictedDate: '28/05',
      usualCashback: 5,
      boostedCashback: 10,
      reasoning: 'Nova versão do produto que você comprou há 1 ano'
    },
  ];

  const handleClick = () => {
    toast.success("Oferta salva nas suas favoritas!");
  };

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {personalizedRecommendations.map((rec) => (
                  <Card key={rec.id} className="shadow-sm hover-scale overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center font-bold">
                          {rec.logo}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{rec.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <ShoppingBag className="h-3 w-3" /> {rec.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-primary/5">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {rec.relevanceScore}% relevante
                        </Badge>
                        <div className="text-green-600 font-medium">
                          {rec.cashbackPercentage}% cashback
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "{rec.reasoning}"
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{rec.distance}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/30 pt-3">
                      <Button className="w-full hover-scale" onClick={handleClick}>
                        Ver Oferta
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trending" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingRecommendations.map((rec) => (
                  <Card key={rec.id} className="shadow-sm hover-scale overflow-hidden border-warning/20">
                    <div className="bg-gradient-to-r from-warning to-warning/70 text-warning-foreground text-xs px-3 py-1 font-medium w-full">
                      OFERTA POR TEMPO LIMITADO
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warning/10 to-warning/30 flex items-center justify-center font-bold">
                          {rec.logo}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{rec.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <ShoppingBag className="h-3 w-3" /> {rec.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                          <Clock className="h-3 w-3 mr-1" />
                          Termina em {rec.endsIn}
                        </Badge>
                        <div className="text-green-600 font-medium">
                          {rec.cashbackPercentage}% cashback
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "{rec.trendingReason}"
                      </p>
                    </CardContent>
                    <CardFooter className="bg-muted/30 pt-3">
                      <Button className="w-full hover-scale bg-warning hover:bg-warning/80" onClick={handleClick}>
                        Aproveitar Agora
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingRecommendations.map((rec) => (
                  <Card key={rec.id} className="shadow-sm hover-scale overflow-hidden border-secondary/20">
                    <div className="bg-gradient-to-r from-secondary to-secondary/70 text-secondary-foreground text-xs px-3 py-1 font-medium w-full">
                      PREVISÃO DE COMPRA
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/30 flex items-center justify-center font-bold">
                          {rec.logo}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{rec.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <ShoppingBag className="h-3 w-3" /> {rec.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                          <Clock className="h-3 w-3 mr-1" />
                          Previsto para {rec.predictedDate}
                        </Badge>
                        <div>
                          <span className="text-muted-foreground line-through mr-1">{rec.usualCashback}%</span>
                          <span className="text-green-600 font-medium">{rec.boostedCashback}% cashback</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "{rec.reasoning}"
                      </p>
                    </CardContent>
                    <CardFooter className="bg-muted/30 pt-3">
                      <Button className="w-full hover-scale bg-secondary hover:bg-secondary/80" onClick={handleClick}>
                        Receber Lembrete
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Conectar E-commerce</h3>
                <p className="text-xs text-muted-foreground">Importe seu histórico de compras</p>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Ativar Localização</h3>
                <p className="text-xs text-muted-foreground">Receba ofertas próximas</p>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover-scale">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Responder Questionário</h3>
                <p className="text-xs text-muted-foreground">Melhore sua personalização</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientRecommendations;
