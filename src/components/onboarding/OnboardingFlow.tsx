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
  Sparkles
} from 'lucide-react';
import { UserType } from '@/types/auth';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  completed: boolean;
  points: number;
  category: 'setup' | 'first_action' | 'exploration' | 'achievement';
}

interface OnboardingFlowProps {
  userType: UserType;
  onComplete: () => void;
  onSkip: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ 
  userType, 
  onComplete, 
  onSkip 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [level, setLevel] = useState(1);

  const clientSteps: OnboardingStep[] = [
    {
      id: 'profile_setup',
      title: 'Complete seu Perfil',
      description: 'Adicione suas informações pessoais e preferências',
      icon: Users,
      completed: false,
      points: 50,
      category: 'setup'
    },
    {
      id: 'connect_first_store',
      title: 'Conecte sua Primeira Loja',
      description: 'Escolha uma loja favorita para começar a ganhar cashback',
      icon: Target,
      completed: false,
      points: 100,
      category: 'first_action'
    },
    {
      id: 'first_mission',
      title: 'Complete sua Primeira Missão',
      description: 'Faça uma compra qualificada e ganhe pontos extras',
      icon: Trophy,
      completed: false,
      points: 150,
      category: 'achievement'
    },
    {
      id: 'explore_vip',
      title: 'Explore o Clube VIP',
      description: 'Descubra benefícios exclusivos e recompensas premium',
      icon: Star,
      completed: false,
      points: 75,
      category: 'exploration'
    },
    {
      id: 'invite_friend',
      title: 'Convide um Amigo',
      description: 'Compartilhe e ganhe bônus quando seu amigo se cadastrar',
      icon: Gift,
      completed: false,
      points: 200,
      category: 'achievement'
    }
  ];

  const companySteps: OnboardingStep[] = [
    {
      id: 'company_profile',
      title: 'Configure sua Empresa',
      description: 'Complete as informações da sua empresa e marca',
      icon: Users,
      completed: false,
      points: 100,
      category: 'setup'
    },
    {
      id: 'cashback_rules',
      title: 'Defina Regras de Cashback',
      description: 'Configure percentuais e condições para seus produtos',
      icon: Target,
      completed: false,
      points: 150,
      category: 'setup'
    },
    {
      id: 'first_campaign',
      title: 'Crie sua Primeira Campanha',
      description: 'Lance uma campanha promocional para atrair clientes',
      icon: Zap,
      completed: false,
      points: 200,
      category: 'first_action'
    },
    {
      id: 'integration_setup',
      title: 'Configure Integrações',
      description: 'Conecte seus sistemas existentes via API',
      icon: Trophy,
      completed: false,
      points: 250,
      category: 'setup'
    },
    {
      id: 'analytics_review',
      title: 'Explore Analytics',
      description: 'Conheça relatórios e métricas de performance',
      icon: Star,
      completed: false,
      points: 100,
      category: 'exploration'
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

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    const newLevel = Math.floor(totalPoints / 200) + 1;
    setLevel(newLevel);
  }, [totalPoints]);

  const getLevelProgress = () => {
    const pointsInCurrentLevel = totalPoints % 200;
    return (pointsInCurrentLevel / 200) * 100;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'setup': return 'bg-blue-500';
      case 'first_action': return 'bg-green-500';
      case 'exploration': return 'bg-purple-500';
      case 'achievement': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const current = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="border-2 border-primary/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="font-semibold">Nível {level}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full">
                <Star className="h-5 w-5 text-orange-500" />
                <span className="font-semibold">{totalPoints} pontos</span>
              </div>
            </div>
            
            <CardTitle className="text-2xl">
              🎉 Bem-vindo ao CashbackFlow!
            </CardTitle>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Progresso do Onboarding</span>
                <span>{completedSteps}/{steps.length} concluídos</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Progresso do Nível</span>
                <span>{Math.floor(getLevelProgress())}%</span>
              </div>
              <Progress value={getLevelProgress()} className="h-1" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step atual */}
            <div className="border-2 border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${getCategoryColor(current.category)}`}>
                  <current.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{current.title}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      +{current.points} pontos
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{current.description}</p>
                  
                  {!current.completed ? (
                    <Button 
                      onClick={() => completeStep(current.id)}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Completar Etapa
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Concluído!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Lista de todas as etapas */}
            <div className="grid gap-3">
              <h4 className="font-semibold text-center">Todas as Etapas</h4>
              <div className="grid gap-2">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                      step.completed 
                        ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' 
                        : index === currentStep
                        ? 'bg-primary/5 border-primary/20'
                        : 'bg-muted/30 border-border'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    {step.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${step.completed ? 'text-green-700 dark:text-green-300' : ''}`}>
                        {step.title}
                      </span>
                    </div>
                    <Badge variant="outline">
                      +{step.points}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de navegação */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex gap-2">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                  Anterior
                </Button>
                <Button variant="outline" onClick={nextStep} disabled={currentStep === steps.length - 1}>
                  Próximo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" onClick={onSkip}>
                  Pular Tutorial
                </Button>
                {completedSteps === steps.length && (
                  <Button onClick={onComplete} className="bg-gradient-to-r from-green-500 to-green-600">
                    <Trophy className="h-4 w-4 mr-2" />
                    Finalizar
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
