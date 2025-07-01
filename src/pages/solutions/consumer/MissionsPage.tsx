
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Target, Trophy, Star, Zap, Gift, Calendar, TrendingUp, Award, Sparkles, ArrowRight } from "lucide-react";

const MissionsPage = () => {
  const activeMissions = [
    {
      id: 1,
      title: "Comprador Fiel",
      description: "Realize 5 compras em lojas parceiras",
      progress: 3,
      total: 5,
      reward: "R$ 25,00 bônus",
      difficulty: "Fácil",
      timeLeft: "7 dias",
      icon: Target
    },
    {
      id: 2,
      title: "Explorador de Categorias",
      description: "Compre em 3 categorias diferentes",
      progress: 1,
      total: 3,
      reward: "2x Cashback por 7 dias",
      difficulty: "Médio",
      timeLeft: "14 dias",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Mestre do Cashback",
      description: "Acumule R$ 100 em cashback",
      progress: 67,
      total: 100,
      reward: "Upgrade Premium grátis",
      difficulty: "Difícil",
      timeLeft: "30 dias",
      icon: Trophy
    }
  ];

  const completedMissions = [
    {
      title: "Primeiro Passo",
      reward: "R$ 10,00",
      completedAt: "Há 2 dias"
    },
    {
      title: "Shopping Semanal",
      reward: "1.5x Multiplicador",
      completedAt: "Há 5 dias"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              <Target className="h-3 w-3 mr-1" />
              Missões e Desafios
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Ganhe Mais com{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Desafios
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Complete missões personalizadas e ganhe recompensas extras. Quanto mais você participa, mais benefícios recebe!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Missões Completadas</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Missões Ativas</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Gift className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">R$ 127</div>
                <div className="text-sm text-muted-foreground">Recompensas Ganhas</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Active Missions */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Missões Ativas
                </h2>
                <div className="space-y-4">
                  {activeMissions.map((mission) => (
                    <Card key={mission.id} className="hover-scale">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <mission.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg">{mission.title}</CardTitle>
                              <CardDescription>{mission.description}</CardDescription>
                            </div>
                          </div>
                          <Badge 
                            variant={mission.difficulty === 'Fácil' ? 'default' : 
                                   mission.difficulty === 'Médio' ? 'secondary' : 'destructive'}
                          >
                            {mission.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Progresso: {mission.progress}/{mission.total}</span>
                              <span className="text-muted-foreground">{mission.timeLeft} restantes</span>
                            </div>
                            <Progress value={(mission.progress / mission.total) * 100} className="h-2" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Gift className="h-4 w-4 text-green-500" />
                              <span className="font-medium text-green-600">{mission.reward}</span>
                            </div>
                            <Button size="sm">Ver Detalhes</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Completed Missions */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-green-500" />
                  Missões Completadas
                </h2>
                <div className="space-y-3">
                  {completedMissions.map((mission, index) => (
                    <Card key={index} className="border-green-200 bg-green-50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-green-100">
                              <Trophy className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{mission.title}</h4>
                              <p className="text-sm text-muted-foreground">{mission.completedAt}</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {mission.reward}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Missions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Próximas Missões
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Black Friday Especial</h4>
                    <p className="text-sm text-muted-foreground">Cashback em dobro</p>
                    <p className="text-xs text-primary">Disponível em 5 dias</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">Natal Generoso</h4>
                    <p className="text-sm text-muted-foreground">Missão exclusiva de final de ano</p>
                    <p className="text-xs text-primary">Disponível em 12 dias</p>
                  </div>
                </CardContent>
              </Card>

              {/* Mission Tips */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Dicas para Missões
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <h4 className="font-medium mb-1">💡 Planeje suas compras</h4>
                    <p className="text-muted-foreground">Verifique as missões ativas antes de fazer compras para maximizar recompensas.</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-medium mb-1">⏰ Fique atento aos prazos</h4>
                    <p className="text-muted-foreground">Algumas missões têm prazo limitado e oferecem recompensas especiais.</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-medium mb-1">🎯 Combine missões</h4>
                    <p className="text-muted-foreground">Uma compra pode contar para múltiplas missões simultaneamente.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Upgrade CTA */}
              <Card className="bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-6 text-center">
                  <Crown className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Missões Premium</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Desbloqueie missões exclusivas com recompensas ainda maiores!
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    <Link to="/pricing/consumer">
                      Fazer Upgrade
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionsPage;
