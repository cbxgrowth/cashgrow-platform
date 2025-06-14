
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Circle, 
  Trophy, 
  Star, 
  Gift, 
  Target, 
  Users, 
  Zap,
  ArrowRight,
  Sparkles,
  X,
  ExternalLink
} from 'lucide-react';
import { UserType } from '@/types/auth';
import { useNavigate } from 'react-router-dom';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  completed: boolean;
  points: number;
  category: 'setup' | 'first_action' | 'exploration' | 'achievement';
  route: string;
}

interface CompactOnboardingFlowProps {
  userType: UserType;
  onComplete: () => void;
  onSkip: () => void;
}

export const CompactOnboardingFlow: React.FC<CompactOnboardingFlowProps> = ({ 
  userType, 
  onComplete, 
  onSkip 
}) => {
  const navigate = useNavigate();
  const [totalPoints, setTotalPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);

  const clientSteps: OnboardingStep[] = [
    {
      id: 'profile_setup',
      title: 'Complete seu Perfil',
      description: 'Adicione suas informações pessoais',
      icon: Users,
      completed: false,
      points: 50,
      category: 'setup',
      route: '/client/profile'
    },
    {
      id: 'connect_first_store',
      title: 'Conecte uma Loja',
      description: 'Escolha uma loja favorita',
      icon: Target,
      completed: false,
      points: 100,
      category: 'first_action',
      route: '/client/companies'
    },
    {
      id: 'first_mission',
      title: 'Complete uma Missão',
      description: 'Faça uma compra qualificada',
      icon: Trophy,
      completed: false,
      points: 150,
      category: 'achievement',
      route: '/client/missions'
    },
    {
      id: 'explore_vip',
      title: 'Explore o Clube VIP',
      description: 'Descubra benefícios exclusivos',
      icon: Star,
      completed: false,
      points: 75,
      category: 'exploration',
      route: '/client/vip-club'
    }
  ];

  const companySteps: OnboardingStep[] = [
    {
      id: 'company_profile',
      title: 'Configure sua Empresa',
      description: 'Complete informações da empresa',
      icon: Users,
      completed: false,
      points: 100,
      category: 'setup',
      route: '/company/profile'
    },
    {
      id: 'cashback_rules',
      title: 'Defina Regras de Cashback',
      description: 'Configure percentuais',
      icon: Target,
      completed: false,
      points: 150,
      category: 'setup',
      route: '/company/cashback-rules'
    },
    {
      id: 'first_client',
      title: 'Cadastre um Cliente',
      description: 'Adicione seu primeiro cliente',
      icon: Users,
      completed: false,
      points: 200,
      category: 'first_action',
      route: '/company/clients'
    },
    {
      id: 'integration_setup',
      title: 'Configure Integrações',
      description: 'Conecte seus sistemas',
      icon: Zap,
      completed: false,
      points: 250,
      category: 'setup',
      route: '/company/integrations'
    }
  ];

  const [steps, setSteps] = useState(userType === 'client' ? clientSteps : companySteps);

  const completedSteps = steps.filter(step => step.completed).length;
  const progress = (completedSteps / steps.length) * 100;

  const completeStep = (stepId: string) => {
    setSteps(prev => prev.map(step => {
      if (step.id === stepId && !step.completed) {
        setTotalPoints(points => points + step.points);
        return { ...step, completed: true };
      }
      return step;
    }));
  };

  const handleStepClick = (step: OnboardingStep) => {
    navigate(step.route);
    setIsMinimized(true);
  };

  useEffect(() => {
    const newLevel = Math.floor(totalPoints / 200) + 1;
    setLevel(newLevel);
  }, [totalPoints]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'setup': return 'bg-blue-500';
      case 'first_action': return 'bg-green-500';
      case 'exploration': return 'bg-purple-500';
      case 'achievement': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="w-80 border-2 border-primary/20 shadow-lg">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                Onboarding ({completedSteps}/{steps.length})
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(false)}
                className="h-6 w-6 p-0"
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
            <Progress value={progress} className="h-1" />
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-1">
              {steps.slice(0, 2).map((step) => (
                <div 
                  key={step.id}
                  className="flex items-center gap-2 text-xs cursor-pointer hover:bg-muted/50 p-1 rounded"
                  onClick={() => handleStepClick(step)}
                >
                  {step.completed ? (
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  ) : (
                    <Circle className="h-3 w-3 text-muted-foreground" />
                  )}
                  <span className={step.completed ? 'text-green-700 line-through' : ''}>{step.title}</span>
                </div>
              ))}
              {steps.length > 2 && (
                <div className="text-xs text-muted-foreground pl-5">
                  +{steps.length - 2} mais etapas
                </div>
              )}
            </div>
            {completedSteps === steps.length && (
              <Button onClick={onComplete} size="sm" className="w-full mt-2">
                <Trophy className="h-3 w-3 mr-1" />
                Finalizar
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-2 border-primary/20 shadow-2xl">
          <CardHeader className="text-center space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">Nível {level}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/10 rounded-full">
                  <Star className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-semibold">{totalPoints}pts</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <CardTitle className="text-xl">
              🎉 Bem-vindo ao CashbackFlow!
            </CardTitle>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Progresso</span>
                <span>{completedSteps}/{steps.length}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                    step.completed 
                      ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' 
                      : 'bg-muted/30 border-border hover:bg-primary/5 hover:border-primary/20'
                  }`}
                  onClick={() => handleStepClick(step)}
                >
                  <div className={`p-2 rounded-full ${getCategoryColor(step.category)}`}>
                    <step.icon className="h-4 w-4 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${step.completed ? 'text-green-700 dark:text-green-300' : ''}`}>
                        {step.title}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        +{step.points}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    {step.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="ghost" onClick={onSkip} size="sm">
                Pular Tutorial
              </Button>
              
              {completedSteps === steps.length && (
                <Button onClick={onComplete} className="bg-gradient-to-r from-green-500 to-green-600">
                  <Trophy className="h-4 w-4 mr-2" />
                  Finalizar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
