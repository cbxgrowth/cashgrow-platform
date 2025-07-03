
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronRight, X, Trophy, CheckCircle } from "lucide-react";

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface CompactOnboardingFlowProps {
  userType: 'client' | 'company';
  onComplete: () => void;
}

const CompactOnboardingFlow: React.FC<CompactOnboardingFlowProps> = ({ userType, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps: OnboardingStep[] = userType === 'client' ? [
    { id: 'explore', title: 'Explore o Dashboard', description: 'Veja seus gastos e cashback', completed: false },
    { id: 'mission', title: 'Complete uma Missão', description: 'Ganhe recompensas extras', completed: false },
    { id: 'invite', title: 'Convide Amigos', description: 'Ganhe mais cashback', completed: false },
  ] : [
    { id: 'products', title: 'Adicione Produtos', description: 'Crie seu catálogo', completed: false },
    { id: 'cashback', title: 'Configure Cashback', description: 'Defina as regras', completed: false },
    { id: 'clients', title: 'Convide Clientes', description: 'Comece a atrair clientes', completed: false },
  ];

  const [stepsState, setStepsState] = useState(steps);
  const completedCount = stepsState.filter(s => s.completed).length;
  const progress = (completedCount / stepsState.length) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStepIndex < stepsState.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleCompleteStep = () => {
    setStepsState(prev => prev.map((step, index) => 
      index === currentStepIndex ? { ...step, completed: true } : step
    ));
    
    if (currentStepIndex < stepsState.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    onComplete();
  };

  const handleSkip = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentStep = stepsState[currentStepIndex];
  const isLastStep = currentStepIndex === stepsState.length - 1;
  const allCompleted = completedCount === stepsState.length;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-xl border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                {allCompleted ? (
                  <Trophy className="h-4 w-4 text-primary" />
                ) : (
                  <Sparkles className="h-4 w-4 text-primary" />
                )}
              </div>
              <div>
                <CardTitle className="text-sm">
                  {allCompleted ? 'Parabéns!' : 'Primeiros Passos'}
                </CardTitle>
                <CardDescription className="text-xs">
                  {allCompleted ? 'Você completou tudo!' : currentStep.title}
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSkip}
              className="h-6 w-6 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Progresso</span>
              <span>{completedCount}/{stepsState.length}</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 space-y-3">
          {!allCompleted ? (
            <>
              <div className="flex items-center gap-2">
                {currentStep.completed ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-primary/30" />
                )}
                <p className="text-xs text-muted-foreground flex-1">
                  {currentStep.description}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevious}
                  disabled={currentStepIndex === 0}
                  className="text-xs px-2"
                >
                  ←
                </Button>
                
                {!currentStep.completed ? (
                  <Button
                    size="sm"
                    onClick={handleCompleteStep}
                    className="flex-1 text-xs"
                  >
                    Completar
                    <CheckCircle className="h-3 w-3 ml-1" />
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={isLastStep ? handleComplete : handleNext}
                    className="flex-1 text-xs"
                  >
                    {isLastStep ? 'Finalizar' : 'Próximo'}
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center space-y-2">
              <Badge className="bg-green-100 text-green-700 text-xs">
                <Trophy className="h-3 w-3 mr-1" />
                Concluído!
              </Badge>
              <Button
                size="sm"
                onClick={handleComplete}
                className="w-full text-xs"
              >
                Continuar
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompactOnboardingFlow;
