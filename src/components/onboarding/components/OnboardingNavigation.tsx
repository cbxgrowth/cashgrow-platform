
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy } from 'lucide-react';

interface OnboardingNavigationProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSkip: () => void;
  onComplete: () => void;
}

export const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentStep,
  totalSteps,
  completedSteps,
  onPrevStep,
  onNextStep,
  onSkip,
  onComplete
}) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t">
      <div className="flex gap-2">
        <Button variant="outline" onClick={onPrevStep} disabled={currentStep === 0}>
          Anterior
        </Button>
        <Button variant="outline" onClick={onNextStep} disabled={currentStep === totalSteps - 1}>
          Próximo
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Button variant="ghost" onClick={onSkip}>
          Pular Tutorial
        </Button>
        {completedSteps === totalSteps && (
          <Button onClick={onComplete} className="bg-gradient-to-r from-green-500 to-green-600">
            <Trophy className="h-4 w-4 mr-2" />
            Finalizar
          </Button>
        )}
      </div>
    </div>
  );
};
