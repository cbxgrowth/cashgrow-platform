
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserType } from '@/types/auth';
import { useOnboardingLogic } from '@/hooks/useOnboardingLogic';
import { OnboardingHeader } from './components/OnboardingHeader';
import { CurrentStepCard } from './components/CurrentStepCard';
import { StepsList } from './components/StepsList';
import { OnboardingNavigation } from './components/OnboardingNavigation';
import { getCategoryColor } from './utils/onboardingUtils';

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
  const {
    steps,
    stats,
    completeStep,
    getLevelProgress,
    allStepsCompleted
  } = useOnboardingLogic(userType);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  if (allStepsCompleted) {
    onComplete();
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="border-2 border-primary/20 shadow-2xl">
          <OnboardingHeader 
            stats={stats}
            totalSteps={steps.length}
            getLevelProgress={getLevelProgress}
          />

          <CardContent className="space-y-6">
            <CurrentStepCard
              currentStep={currentStep}
              onCompleteStep={completeStep}
              getCategoryColor={getCategoryColor}
            />

            <StepsList
              steps={steps}
              currentStep={currentStepIndex}
              onStepClick={handleStepClick}
            />

            <OnboardingNavigation
              currentStep={currentStepIndex}
              totalSteps={steps.length}
              completedSteps={stats.completedSteps}
              onPrevStep={prevStep}
              onNextStep={nextStep}
              onSkip={onSkip}
              onComplete={onComplete}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
