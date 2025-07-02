
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Target, Trophy, Star, Gift } from 'lucide-react';

const ClientMissionsPage: React.FC = () => {
  const missions = [
    {
      id: 1,
      title: 'Primeira Compra',
      description: 'Faça sua primeira compra e ganhe 10% de cashback extra',
      progress: 100,
      reward: 50.00,
      status: 'completed',
      type: 'beginner'
    },
    {
      id: 2,
      title: 'Comprador Frequente',
      description: 'Realize 5 compras este mês',
      progress: 60,
      reward: 100.00,
      status: 'active',
      type: 'monthly'
    },
    {
      id: 3,
      title: 'Gastador Premium',
      description: 'Gaste R$ 1.000 em compras qualificadas',
      progress: 25,
      reward: 200.00,
      status: 'active',
      type: 'premium'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Missões</h1>
        <p className="text-muted-foreground mt-2">
          Complete missões e ganhe cashback extra
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {missions.map((mission) => (
          <Card key={mission.id} className={`${mission.status === 'completed' ? 'border-green-200 bg-green-50' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Target className="h-6 w-6 text-primary" />
                <Badge variant={mission.status === 'completed' ? 'default' : 'secondary'}>
                  {mission.status === 'completed' ? 'Concluída' : 'Ativa'}
                </Badge>
              </div>
              <CardTitle className="text-lg">{mission.title}</CardTitle>
              <CardDescription>{mission.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progresso</span>
                  <span>{mission.progress}%</span>
                </div>
                <Progress value={mission.progress} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-green-600" />
                  <span className="font-bold text-green-600">
                    R$ {mission.reward.toFixed(2)}
                  </span>
                </div>
                {mission.status === 'completed' ? (
                  <Button size="sm" disabled>
                    <Trophy className="h-4 w-4 mr-2" />
                    Concluída
                  </Button>
                ) : (
                  <Button size="sm" variant="outline">
                    Ver Detalhes
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientMissionsPage;
