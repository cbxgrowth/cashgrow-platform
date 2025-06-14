
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle } from 'lucide-react';
import { OnboardingStep } from '@/types/onboarding';

interface StepsListProps {
  steps: OnboardingStep[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

export const StepsList: React.FC<StepsListProps> = ({
  steps,
  currentStep,
  onStepClick
}) => {
  return (
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
            onClick={() => onStepClick(index)}
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
  );
};
