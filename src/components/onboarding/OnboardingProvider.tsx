
import React, { createContext, useContext, useState, useEffect } from 'react';
import CompactOnboardingFlow from './CompactOnboardingFlow';
import { UserType } from '@/types/auth';

interface OnboardingContextType {
  isOnboardingComplete: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  showOnboarding: () => void;
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
  const [showOnboardingFlow, setShowOnboardingFlow] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem(`onboarding-${userType}-complete`);
    const shouldShow = completed !== 'true';
    setIsOnboardingComplete(completed === 'true');
    
    if (shouldShow) {
      const timer = setTimeout(() => {
        setShowOnboardingFlow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [userType]);

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
    setShowOnboardingFlow(false);
    localStorage.setItem(`onboarding-${userType}-complete`, 'true');
  };

  const resetOnboarding = () => {
    setIsOnboardingComplete(false);
    setShowOnboardingFlow(true);
    localStorage.removeItem(`onboarding-${userType}-complete`);
  };

  const showOnboarding = () => {
    setShowOnboardingFlow(true);
  };

  return (
    <OnboardingContext.Provider value={{
      isOnboardingComplete,
      completeOnboarding,
      resetOnboarding,
      showOnboarding
    }}>
      {children}
      {showOnboardingFlow && !isOnboardingComplete && (
        <CompactOnboardingFlow 
          userType={userType} 
          onComplete={completeOnboarding}
        />
      )}
    </OnboardingContext.Provider>
  );
};
