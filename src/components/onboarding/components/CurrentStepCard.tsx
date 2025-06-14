
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Sparkles } from 'lucide-react';
import { OnboardingStep } from '@/types/onboarding';

interface CurrentStepCardProps {
  currentStep: OnboardingStep;
  onCompleteStep: (stepId: string) => void;
  getCategoryColor: (category: string) => string;
}

export const CurrentStepCard: React.FC<CurrentStepCardProps> = ({
  currentStep,
  onCompleteStep,
  getCategoryColor
}) => {
  return (
    <div className="border-2 border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${getCategoryColor(currentStep.category)}`}>
          <currentStep.icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold">{currentStep.title}</h3>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              +{currentStep.points} pontos
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4">{currentStep.description}</p>
          
          {!currentStep.completed ? (
            <Button 
              onClick={() => onCompleteStep(currentStep.id)}
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
  );
};
