
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Clock, 
  Check, 
  ShoppingBag, 
  ShoppingCart, 
  Zap, 
  Trophy, 
  Users, 
  Store,
  ArrowUpRight,
  CreditCard
} from "lucide-react";
import { toast } from "sonner";

const ClientMissions: React.FC = () => {
  const activeMissions = [
    {
      id: 1,
      title: 'Explorador de Lojas',
      description: 'Faça compras em 3 lojas diferentes este mês',
      progress: 66,
      current: 2,
      total: 3,
      reward: '+15% cashback',
      icon: Store,
      deadline: '5 dias',
      stores: ['Mercado Verde', 'Tech Store'],
      remaining: ['Qualquer nova loja parceira']
    },
    {
      id: 2,
      title: 'Maratona de Compras',
      description: 'Realize 5 transações em 7 dias',
      progress: 40,
      current: 2,
      total: 5,
      reward: '+10% cashback',
      icon: ShoppingBag,
      deadline: '3 dias',
      tag: 'Em alta'
    },
    {
      id: 3,
      title: 'Indique Amigos',
      description: 'Convide 3 amigos para o sistema de cashback',
      progress: 33,
      current: 1,
      total: 3,
      reward: 'R$ 20,00 em cashback',
      icon: Users,
      deadline: '30 dias',
      permanent: true
    },
  ];

  const completedMissions = [
    {
      id: 4,
      title: 'Primeira Compra',
      description: 'Realize sua primeira compra com cashback',
      reward: 'R$ 10,00 em cashback',
      icon: ShoppingCart,
      completedDate: '20/04/2025'
    },
    {
      id: 5,
      title: 'Cadastro Completo',
      description: 'Complete 100% do seu perfil',
      reward: '+5% cashback na próxima compra',
      icon: Check,
      completedDate: '15/04/2025'
    }
  ];

  const handleActivate = () => {
    toast.success("Missão ativada com sucesso!");
  };

  const handleClaim = () => {
    toast.success("Recompensa resgatada! O cashback foi adicionado à sua conta.");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Missões & Desafios</h1>
          <p className="text-muted-foreground mt-1">
            Complete missões para ganhar cashback extra e desbloquear benefícios
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Seu Nível</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-2">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Nível Prata</h3>
              <p className="text-muted-foreground text-sm">500 pontos</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>500 pts</span>
                <span>1000 pts</span>
              </div>
              <Progress value={50} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                500 pontos para o próximo nível
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Ver Benefícios do Nível
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-warning/5 to-warning/10 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              <span>Missões do Dia</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Use seu cartão vinculado</span>
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                  +5% cashback
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Faça uma compra de qualquer valor hoje
              </p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  <span>0/1 compras</span>
                </div>
                <Badge variant="outline">Válido hoje</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-warning hover:bg-warning/80" onClick={handleActivate}>
              Ativar Missão
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-secondary" />
              <span>Ranking Semanal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-bold">15</span>
                </div>
                <div>
                  <p className="font-medium">Sua posição atual</p>
                  <p className="text-xs text-muted-foreground">Entre 243 usuários</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-medium">Top 10 ganha cashback extra</p>
              <Progress value={60} className="h-2" />
              <p className="text-xs text-muted-foreground">
                5 posições para entrar no Top 10
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Ver Ranking Completo
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Missões Ativas</CardTitle>
            </div>
            <Badge variant="outline" className="gap-1">
              <Check className="h-3 w-3" />
              {activeMissions.length} ativas
            </Badge>
          </div>
          <CardDescription>
            Complete estas missões para aumentar seus ganhos de cashback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {activeMissions.map((mission) => (
            <div key={mission.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <mission.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{mission.title}</h3>
                      {mission.tag && (
                        <Badge variant="secondary" className="text-xs">
                          {mission.tag}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {mission.description}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  {mission.reward}
                </Badge>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progresso: {mission.current}/{mission.total}</span>
                  {!mission.permanent && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" /> {mission.deadline}
                    </span>
                  )}
                </div>
                <Progress value={mission.progress} className="h-2" />
              </div>

              {mission.stores && (
                <div className="space-y-1">
                  <p className="text-xs font-medium">Progresso:</p>
                  <div className="space-y-1">
                    {mission.stores.map((store, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <Check className="h-3 w-3 text-green-500" />
                        <span>{store}</span>
                      </div>
                    ))}
                    {mission.remaining.map((store, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="h-3 w-3 rounded-full border border-muted-foreground/50" />
                        <span>{store}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <Button size="sm" variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <CardTitle>Missões Concluídas</CardTitle>
            </div>
            <Badge variant="outline" className="gap-1">
              {completedMissions.length} missões
            </Badge>
          </div>
          <CardDescription>
            Missões que você já completou e suas recompensas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {completedMissions.map((mission) => (
            <div key={mission.id} className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <mission.icon className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">{mission.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {mission.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Concluída em {mission.completedDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  {mission.reward}
                </Badge>
                <Button size="sm" variant="outline" onClick={handleClaim}>
                  Resgatar
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <Button variant="outline">Ver Todas as Missões Concluídas</Button>
        </CardFooter>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <ArrowUpRight className="h-5 w-5 text-primary" />
            <CardTitle>Missões Disponíveis</CardTitle>
          </div>
          <CardDescription>
            Ative novas missões para aumentar seu potencial de cashback
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Compras Corporativas</CardTitle>
              <CardDescription>Missões especiais para compras da sua empresa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Vincule seu perfil corporativo para acessar missões exclusivas B2B 
                com cashback ampliado e benefícios para sua empresa.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full hover-scale" onClick={handleActivate}>
                Ativar Missões Corporativas
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Missões Sustentáveis</CardTitle>
              <CardDescription>Ajude o planeta e ganhe mais cashback</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Participe de missões sustentáveis comprando em empresas com certificação ESG
                ou convertendo parte do cashback em doações para causas ambientais.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full hover-scale" onClick={handleActivate}>
                Ativar Missões Sustentáveis
              </Button>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientMissions;
