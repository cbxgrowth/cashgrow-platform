
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Trophy, Gift, Star, Clock, CheckCircle } from 'lucide-react';

const MissionsPage = () => {
  const missions = [
    {
      id: 1,
      title: 'Primeira Compra',
      description: 'Faça sua primeira compra e ganhe cashback extra',
      reward: 50,
      difficulty: 'Fácil',
      timeLeft: '30 dias',
      progress: 0,
      completed: false,
      category: 'Iniciante'
    },
    {
      id: 2,
      title: 'Comprador Frequente',
      description: 'Realize 5 compras este mês',
      reward: 100,
      difficulty: 'Médio',
      timeLeft: '15 dias',
      progress: 60,
      completed: false,
      category: 'Mensal'
    },
    {
      id: 3,
      title: 'Explorador de Categorias',
      description: 'Compre em 3 categorias diferentes',
      reward: 75,
      difficulty: 'Médio',
      timeLeft: '20 dias',
      progress: 33,
      completed: false,
      category: 'Descoberta'
    },
    {
      id: 4,
      title: 'Cliente Premium',
      description: 'Gaste R$ 500 em compras qualificadas',
      reward: 150,
      difficulty: 'Difícil',
      timeLeft: '25 dias',
      progress: 80,
      completed: false,
      category: 'Premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            <Target className="w-4 h-4 mr-2" />
            Missões e Desafios
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Complete Missões
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ganhe recompensas extras completando missões gamificadas e desafios especiais.
          </p>
        </div>
      </section>

      {/* Missões Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <Card key={mission.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    <Badge variant={mission.completed ? 'default' : 'secondary'}>
                      {mission.completed ? 'Concluída' : mission.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{mission.title}</CardTitle>
                  <CardDescription>{mission.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-green-600" />
                      <span className="font-bold text-green-600">
                        R$ {mission.reward.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {mission.timeLeft}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progresso</span>
                      <span>{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="w-fit">
                    {mission.category}
                  </Badge>
                  
                  <Button className="w-full" disabled={mission.completed}>
                    {mission.completed ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Concluída
                      </>
                    ) : (
                      'Ver Detalhes'
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-4">
                Pronto para Começar?
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                Cadastre-se agora e comece a completar missões para ganhar cashback extra
              </CardDescription>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Começar Agora
              </Button>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MissionsPage;
