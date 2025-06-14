
import React from 'react';
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
    currentStep,
    setCurrentStep,
    steps,
    stats,
    completeStep,
    nextStep,
    prevStep,
    getLevelProgress
  } = useOnboardingLogic(userType);

  const current = steps[currentStep];

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
              currentStep={current}
              onCompleteStep={completeStep}
              getCategoryColor={getCategoryColor}
            />

            <StepsList
              steps={steps}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
            />

            <OnboardingNavigation
              currentStep={currentStep}
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
