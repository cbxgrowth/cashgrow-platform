
import { useState, useEffect } from 'react';
import { OnboardingStep, OnboardingStats } from '@/types/onboarding';
import { UserType } from '@/types/auth';
import { getOnboardingSteps } from '@/components/onboarding/data/onboardingSteps';

export const useOnboardingLogic = (userType: UserType) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [steps, setSteps] = useState<OnboardingStep[]>(() => getOnboardingSteps(userType));

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

  const stats: OnboardingStats = {
    totalPoints,
    level,
    completedSteps,
    progress
  };

  return {
    currentStep,
    setCurrentStep,
    steps,
    stats,
    completeStep,
    nextStep,
    prevStep,
    getLevelProgress
  };
};
