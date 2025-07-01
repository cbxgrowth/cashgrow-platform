import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight, X } from "lucide-react";

interface OnboardingStep {
  title: string;
  description: string;
}

interface CompactOnboardingFlowProps {
  userType: 'client' | 'company';
  onComplete: () => void;
}

const CompactOnboardingFlow: React.FC<CompactOnboardingFlowProps> = ({ userType, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps: OnboardingStep[] = userType === 'client' ? [
    { title: 'Explore o Dashboard', description: 'Veja seus gastos, cashback e ofertas.' },
    { title: 'Complete uma Missão', description: 'Ganhe recompensas extras.' },
    { title: 'Convide Amigos', description: 'Ganhe ainda mais cashback.' },
  ] : [
    { title: 'Adicione Produtos', description: 'Crie seu catálogo de produtos.' },
    { title: 'Configure o Cashback', description: 'Defina as regras de cashback.' },
    { title: 'Convide Clientes', description: 'Comece a atrair clientes.' },
  ];

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;

  useEffect(() => {
    // Simulate delay before showing onboarding
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStepIndex((prev) => prev - 1);
  };

  const handleComplete = () => {
    setIsVisible(false);
    onComplete();
  };

  const handleSkip = () => {
    setIsVisible(false);
  };

  // Reduce the size and make it less intrusive
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-lg border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm">Primeiros Passos</CardTitle>
                <CardDescription className="text-xs">
                  {currentStep.title}
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
          
          <div className="flex items-center gap-1 mt-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  index <= currentStepIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 space-y-3">
          <p className="text-xs text-muted-foreground">
            {currentStep.description}
          </p>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
              className="text-xs"
            >
              Anterior
            </Button>
            <Button
              size="sm"
              onClick={isLastStep ? handleComplete : handleNext}
              className="flex-1 text-xs"
            >
              {isLastStep ? 'Concluir' : 'Próximo'}
              <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompactOnboardingFlow;
