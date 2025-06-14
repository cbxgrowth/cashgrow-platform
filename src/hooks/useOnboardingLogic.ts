
import { useState, useEffect, useCallback } from 'react';
import { OnboardingStep, OnboardingStats } from '@/types/onboarding';
import { UserType } from '@/types/auth';
import { getOnboardingSteps } from '@/components/onboarding/data/onboardingSteps';
import { ONBOARDING_CONSTANTS } from '@/constants/onboarding.constants';

export const useOnboardingLogic = (userType: UserType) => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [steps, setSteps] = useState<OnboardingStep[]>(() => getOnboardingSteps(userType));

  const completedSteps = steps.filter(step => step.completed).length;
  const progress = (completedSteps / steps.length) * 100;
  const allStepsCompleted = completedSteps === steps.length;

  const completeStep = useCallback((stepId: string) => {
    setSteps(prev => prev.map(step => {
      if (step.id === stepId && !step.completed) {
        setTotalPoints(points => points + step.points);
        return { ...step, completed: true };
      }
      return step;
    }));
  }, []);

  // Função para verificar automaticamente se as etapas foram completadas
  const checkStepCompletion = useCallback(() => {
    setSteps(prev => prev.map(step => {
      if (step.completed) return step;

      // Simular verificação de conclusão baseada no tipo de etapa
      // Em uma aplicação real, isso seria baseado em dados reais do usuário
      let isCompleted = false;

      switch (step.id) {
        case 'profile_setup':
          // Verificar se o perfil foi configurado
          isCompleted = localStorage.getItem(`profile_completed_${userType}`) === 'true';
          break;
        case 'connect_first_store':
        case 'cashback_rules':
          // Verificar se conectou uma loja ou configurou regras
          isCompleted = localStorage.getItem(`rules_completed_${userType}`) === 'true';
          break;
        case 'first_mission':
        case 'first_campaign':
          // Verificar se completou primeira missão/campanha
          isCompleted = localStorage.getItem(`first_action_completed_${userType}`) === 'true';
          break;
        case 'explore_vip':
        case 'analytics_review':
          // Verificar se explorou seções específicas
          isCompleted = localStorage.getItem(`exploration_completed_${userType}`) === 'true';
          break;
        case 'invite_friend':
          // Verificar se convidou amigo
          isCompleted = localStorage.getItem(`invite_completed_${userType}`) === 'true';
          break;
        case 'company_profile':
          // Verificar se perfil da empresa foi configurado
          isCompleted = localStorage.getItem(`company_profile_completed`) === 'true';
          break;
        case 'integration_setup':
          // Verificar se integrações foram configuradas
          isCompleted = localStorage.getItem(`integration_completed`) === 'true';
          break;
        default:
          break;
      }

      if (isCompleted && !step.completed) {
        setTotalPoints(points => points + step.points);
        return { ...step, completed: true };
      }

      return step;
    }));
  }, [userType]);

  const getLevelProgress = useCallback(() => {
    const pointsInCurrentLevel = totalPoints % ONBOARDING_CONSTANTS.POINTS.LEVEL_THRESHOLD;
    return (pointsInCurrentLevel / ONBOARDING_CONSTANTS.POINTS.LEVEL_THRESHOLD) * 100;
  }, [totalPoints]);

  const getNextIncompleteStep = useCallback(() => {
    return steps.find(step => !step.completed);
  }, [steps]);

  useEffect(() => {
    const newLevel = Math.floor(totalPoints / ONBOARDING_CONSTANTS.POINTS.LEVEL_THRESHOLD) + 1;
    setLevel(newLevel);
  }, [totalPoints]);

  const stats: OnboardingStats = {
    totalPoints,
    level,
    completedSteps,
    progress
  };

  return {
    steps,
    stats,
    completeStep,
    checkStepCompletion,
    getLevelProgress,
    getNextIncompleteStep,
    allStepsCompleted
  };
};
