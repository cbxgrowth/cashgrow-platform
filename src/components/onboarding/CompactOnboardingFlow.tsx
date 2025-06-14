
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
  Target, 
  Users, 
  Zap,
  ArrowRight,
  X,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { UserType } from '@/types/auth';
import { useNavigate } from 'react-router-dom';
import { useOnboardingLogic } from '@/hooks/useOnboardingLogic';

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
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState<'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'>('bottom-right');
  
  const {
    steps,
    stats,
    completeStep,
    checkStepCompletion,
    allStepsCompleted
  } = useOnboardingLogic(userType);

  // Auto-complete onboarding when all steps are done
  useEffect(() => {
    if (allStepsCompleted) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000); // Delay para mostrar a conclusão
      return () => clearTimeout(timer);
    }
  }, [allStepsCompleted, onComplete]);

  // Check step completion periodically
  useEffect(() => {
    const interval = setInterval(() => {
      checkStepCompletion();
    }, 2000);
    return () => clearInterval(interval);
  }, [checkStepCompletion]);

  const handleStepClick = (stepId: string, route: string) => {
    navigate(route);
    if (!isMinimized) {
      setIsMinimized(true);
    }
  };

  const getPositionClasses = () => {
    const baseClasses = "fixed z-[60]";
    switch (position) {
      case 'bottom-right':
        return `${baseClasses} bottom-4 right-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4 left-4`;
      case 'top-right':
        return `${baseClasses} top-20 right-4`;
      case 'top-left':
        return `${baseClasses} top-20 left-4`;
      default:
        return `${baseClasses} bottom-4 right-4`;
    }
  };

  const switchPosition = () => {
    const positions: typeof position[] = ['bottom-right', 'bottom-left', 'top-right', 'top-left'];
    const currentIndex = positions.indexOf(position);
    const nextIndex = (currentIndex + 1) % positions.length;
    setPosition(positions[nextIndex]);
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

  if (isMinimized) {
    return (
      <div className={getPositionClasses()}>
        <Card className="w-80 border-2 border-primary/20 shadow-lg backdrop-blur-sm bg-background/95">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                Configuração ({stats.completedSteps}/{steps.length})
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={switchPosition}
                  className="h-6 w-6 p-0"
                  title="Mover posição"
                >
                  <ArrowRight className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(false)}
                  className="h-6 w-6 p-0"
                  title="Expandir"
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onSkip}
                  className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                  title="Pular"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Progress value={stats.progress} className="h-2" />
          </CardHeader>
          
          <CardContent className="pt-0 space-y-2">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`flex items-center gap-2 text-xs cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors ${
                  step.completed ? 'bg-green-50 dark:bg-green-950' : ''
                }`}
                onClick={() => handleStepClick(step.id, step.route)}
              >
                <div className={`p-1 rounded-full ${getCategoryColor(step.category)} flex-shrink-0`}>
                  <step.icon className="h-3 w-3 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`truncate text-xs font-medium ${
                      step.completed ? 'text-green-700 dark:text-green-300' : ''
                    }`}>
                      {step.title}
                    </span>
                    <Badge variant="outline" className="text-[10px] px-1 py-0">
                      +{step.points}
                    </Badge>
                  </div>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {step.description}
                  </p>
                </div>
                {step.completed ? (
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
            
            {allStepsCompleted && (
              <div className="mt-3 p-2 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Trophy className="h-4 w-4" />
                  <span className="text-xs font-medium">Configuração Completa!</span>
                </div>
                <p className="text-[10px] text-green-600 dark:text-green-400 mt-1">
                  Parabéns! Você configurou tudo.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-2 border-primary/20 shadow-2xl bg-background">
          <CardHeader className="text-center space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">Nível {stats.level}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/10 rounded-full">
                  <Star className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-semibold">{stats.totalPoints}pts</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="h-8 w-8 p-0"
                title="Minimizar"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
            
            <CardTitle className="text-xl">
              🎉 Bem-vindo ao CashbackFlow!
            </CardTitle>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Progresso</span>
                <span>{stats.completedSteps}/{steps.length}</span>
              </div>
              <Progress value={stats.progress} className="h-2" />
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="space-y-2">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                    step.completed 
                      ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' 
                      : 'bg-muted/30 border-border hover:bg-primary/5 hover:border-primary/20'
                  }`}
                  onClick={() => handleStepClick(step.id, step.route)}
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

            {allStepsCompleted && (
              <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-center">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">
                    Configuração Completa!
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Parabéns! Você configurou tudo. O onboarding será fechado automaticamente.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="ghost" onClick={onSkip} size="sm">
                Pular Tutorial
              </Button>
              
              {!allStepsCompleted && (
                <Button onClick={() => setIsMinimized(true)} variant="outline" size="sm">
                  Minimizar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
