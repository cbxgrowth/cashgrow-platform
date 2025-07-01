
import React, { createContext, useContext, useState, useEffect } from 'react';
import CompactOnboardingFlow from './CompactOnboardingFlow';
import { UserType } from '@/types/auth';

interface OnboardingContextType {
  isOnboardingComplete: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};

interface OnboardingProviderProps {
  children: React.ReactNode;
  userType: UserType;
}

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ children, userType }) => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    // Check if onboarding was completed before
    const completed = localStorage.getItem(`onboarding-${userType}-complete`);
    setIsOnboardingComplete(completed === 'true');
  }, [userType]);

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
    localStorage.setItem(`onboarding-${userType}-complete`, 'true');
  };

  const resetOnboarding = () => {
    setIsOnboardingComplete(false);
    localStorage.removeItem(`onboarding-${userType}-complete`);
  };

  return (
    <OnboardingContext.Provider value={{
      isOnboardingComplete,
      completeOnboarding,
      resetOnboarding
    }}>
      {children}
      {!isOnboardingComplete && (
        <CompactOnboardingFlow 
          userType={userType} 
          onComplete={completeOnboarding}
        />
      )}
    </OnboardingContext.Provider>
  );
};
