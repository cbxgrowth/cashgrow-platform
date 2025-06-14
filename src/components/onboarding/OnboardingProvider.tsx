
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CompactOnboardingFlow } from './CompactOnboardingFlow';
import { UserType } from '@/types/auth';

interface OnboardingContextType {
  showOnboarding: boolean;
  startOnboarding: () => void;
  completeOnboarding: () => void;
  skipOnboarding: () => void;
  isOnboardingComplete: boolean;
}

const OnboardingContext = createContext<OnboardingContextType>({
  showOnboarding: false,
  startOnboarding: () => {},
  completeOnboarding: () => {},
  skipOnboarding: () => {},
  isOnboardingComplete: false,
});

export const useOnboarding = () => useContext(OnboardingContext);

interface OnboardingProviderProps {
  children: React.ReactNode;
  userType: UserType;
}

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ 
  children, 
  userType 
}) => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem(`onboarding_completed_${userType}`);
    const isComplete = hasCompletedOnboarding === 'true';
    
    setIsOnboardingComplete(isComplete);
    
    if (!isComplete) {
      // Show onboarding after a small delay for better UX
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [userType]);

  const startOnboarding = () => {
    setShowOnboarding(true);
    setIsOnboardingComplete(false);
  };

  const completeOnboarding = () => {
    localStorage.setItem(`onboarding_completed_${userType}`, 'true');
    setShowOnboarding(false);
    setIsOnboardingComplete(true);
  };

  const skipOnboarding = () => {
    localStorage.setItem(`onboarding_completed_${userType}`, 'true');
    setShowOnboarding(false);
    setIsOnboardingComplete(true);
  };

  return (
    <OnboardingContext.Provider
      value={{
        showOnboarding,
        startOnboarding,
        completeOnboarding,
        skipOnboarding,
        isOnboardingComplete,
      }}
    >
      {children}
      {showOnboarding && (
        <CompactOnboardingFlow
          userType={userType}
          onComplete={completeOnboarding}
          onSkip={skipOnboarding}
        />
      )}
    </OnboardingContext.Provider>
  );
};
