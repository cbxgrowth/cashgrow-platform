
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CompactOnboardingFlow } from './CompactOnboardingFlow';
import { UserType } from '@/types/auth';

interface OnboardingContextType {
  showOnboarding: boolean;
  startOnboarding: () => void;
  completeOnboarding: () => void;
  skipOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType>({
  showOnboarding: false,
  startOnboarding: () => {},
  completeOnboarding: () => {},
  skipOnboarding: () => {},
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

  useEffect(() => {
    // Verificar se o usuário já completou o onboarding
    const hasCompletedOnboarding = localStorage.getItem(`onboarding_completed_${userType}`);
    if (!hasCompletedOnboarding) {
      // Mostrar onboarding após um pequeno delay para melhor UX
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [userType]);

  const startOnboarding = () => {
    setShowOnboarding(true);
  };

  const completeOnboarding = () => {
    localStorage.setItem(`onboarding_completed_${userType}`, 'true');
    setShowOnboarding(false);
  };

  const skipOnboarding = () => {
    localStorage.setItem(`onboarding_completed_${userType}`, 'true');
    setShowOnboarding(false);
  };

  return (
    <OnboardingContext.Provider
      value={{
        showOnboarding,
        startOnboarding,
        completeOnboarding,
        skipOnboarding,
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
