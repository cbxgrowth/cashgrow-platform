
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Users, 
  Target, 
  TrendingUp, 
  Clock, 
  Play,
  Zap,
  BadgePercent,
  ShoppingBag,
  Calendar,
  Filter
} from "lucide-react";
import { toast } from "sonner";

const CompanyAICampaigns: React.FC = () => {
  const activeCampaigns = [
    {
      id: 1,
      name: "Reativação de Clientes",
      description: "Cashback personalizado para clientes inativos há +90 dias",
      target: "342 clientes",
      status: "Ativa",
      performance: 76,
      daysRemaining: 12,
      cashbackAvg: "12%"
    },
    {
      id: 2,
      name: "Aumento de Ticket Médio",
      description: "Cashback progressivo para compras acima de R$ 500",
      target: "Todos os clientes",
      status: "Ativa",
      performance: 64,
      daysRemaining: 18,
      cashbackAvg: "8%"
    }
  ];

  const campaignRecommendations = [
    {
      id: 1,
      name: "Recuperação de Abandonos",
      description: "Cashback para clientes que abandonaram o carrinho",
      impact: "Alto",
      difficulty: "Baixa",
      estimatedROI: "340%",
      category: "Recuperação"
    },
    {
      id: 2,
      name: "Cross-selling Inteligente",
      description: "Ofereça cashback em produtos complementares",
      impact: "Médio",
      difficulty: "Média",
      estimatedROI: "220%",
      category: "Expansão"
    },
    {
      id: 3,
      name: "Campanhas Sazonais",
      description: "Cashback especial para produtos em baixa demanda",
      impact: "Médio",
      difficulty: "Baixa",
      estimatedROI: "180%",
      category: "Otimização"
    }
  ];

  const handleCreateCampaign = () => {
    toast.success("Nova campanha criada com sucesso!");
  };

  const handleActivate = () => {
    toast.success("Recomendação ativada como nova campanha!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campanhas com IA</h1>
          <p className="text-muted-foreground mt-1">
            Otimize suas estratégias de cashback com inteligência artificial
          </p>
        </div>
        <Button onClick={handleCreateCampaign} className="gap-2">
          <Play className="h-4 w-4" />
          Nova Campanha
        </Button>
      </div>

      {/* Dashboard de Campanhas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              <CardTitle>Campanhas Ativas</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{activeCampaigns.length}</div>
            <p className="text-muted-foreground text-sm">Campanhas em execução</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <CardTitle>Alcance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.423</div>
            <p className="text-muted-foreground text-sm">Clientes impactados</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <CardTitle>ROI</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">285%</div>
            <p className="text-muted-foreground text-sm">Retorno médio</p>
          </CardContent>
        </Card>
      </div>

      {/* Campanhas Ativas */}
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>Campanhas IA Ativas</CardTitle>
          </div>
          <CardDescription>
            Campanhas de cashback otimizadas por inteligência artificial em execução
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeCampaigns.map((campaign) => (
            <Card key={campaign.id} className="shadow-sm overflow-hidden">
              <div className="bg-primary/10 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{campaign.name}</h3>
                    <p className="text-sm text-muted-foreground">{campaign.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="gap-1">
                        <Target className="h-3 w-3" />
                        {campaign.target}
                      </Badge>
                      <Badge variant="outline" className="gap-1 bg-green-50 text-green-700 border-green-200">
                        <BadgePercent className="h-3 w-3" />
                        {campaign.cashbackAvg} cashback médio
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" />
                        {campaign.daysRemaining} dias restantes
                      </Badge>
                    </div>
                  </div>
                  <Badge className="bg-green-500">{campaign.status}</Badge>
                </div>
                
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Performance</span>
                    <span>{campaign.performance}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${campaign.performance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Ajustar Parâmetros
                </Button>
                <Button size="sm" className="gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Ver Análise
                </Button>
              </div>
            </Card>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center border-t">
          <Button variant="outline">Ver Todas as Campanhas</Button>
        </CardFooter>
      </Card>

      {/* Recomendações IA */}
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <CardTitle>Recomendações da IA</CardTitle>
          </div>
          <CardDescription>
            Campanhas de cashback sugeridas com base na análise de dados dos clientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recommendations" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recommendations" className="mt-4 space-y-4">
              {campaignRecommendations.map((recommendation) => (
                <Card key={recommendation.id} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{recommendation.name}</CardTitle>
                        <CardDescription>{recommendation.description}</CardDescription>
                      </div>
                      <Badge>{recommendation.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span>Impacto: <strong>{recommendation.impact}</strong></span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-4 w-4 text-amber-500" />
                        <span>Dificuldade: <strong>{recommendation.difficulty}</strong></span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BadgePercent className="h-4 w-4 text-blue-500" />
                        <span>ROI Estimado: <strong>{recommendation.estimatedROI}</strong></span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="gap-2" onClick={handleActivate}>
                      <Play className="h-4 w-4" />
                      Ativar Campanha
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="insights" className="mt-4">
              <div className="space-y-4">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle>Perfil de Comportamento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      45% dos seus clientes respondem melhor a cashback de curta duração (7 dias) com percentuais maiores (12%+).
                      Considere criar campanhas com essas características para maior conversão.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Melhor dia para lançar: <strong>Terça-feira</strong></span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle>Oportunidades Detectadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ShoppingBag className="h-4 w-4 text-primary mt-0.5" />
                        <span>Clientes que compram na categoria <strong>Eletrônicos</strong> têm 76% mais chance de converter em <strong>Acessórios</strong> com cashback de 8%+.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 text-primary mt-0.5" />
                        <span>Existe um grupo de 287 clientes com alto potencial de aumento de ticket médio que respondem bem a cashback progressivo.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyAICampaigns;
