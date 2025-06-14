
import { 
  Trophy, 
  Star, 
  Gift, 
  Target, 
  Users, 
  Zap
} from 'lucide-react';
import { OnboardingStep } from '@/types/onboarding';
import { UserType } from '@/types/auth';

export const getClientSteps = (): OnboardingStep[] => [
  {
    id: 'profile_setup',
    title: 'Complete seu Perfil',
    description: 'Adicione suas informações pessoais',
    icon: Users,
    completed: false,
    points: 50,
    category: 'setup',
    route: '/client/profile'
  },
  {
    id: 'connect_first_store',
    title: 'Conecte uma Loja',
    description: 'Escolha uma loja favorita',
    icon: Target,
    completed: false,
    points: 100,
    category: 'first_action',
    route: '/client/companies'
  },
  {
    id: 'first_mission',
    title: 'Complete uma Missão',
    description: 'Faça uma compra qualificada',
    icon: Trophy,
    completed: false,
    points: 150,
    category: 'achievement',
    route: '/client/missions'
  },
  {
    id: 'explore_vip',
    title: 'Explore o Clube VIP',
    description: 'Descubra benefícios exclusivos',
    icon: Star,
    completed: false,
    points: 75,
    category: 'exploration',
    route: '/client/vip-club'
  }
];

export const getCompanySteps = (): OnboardingStep[] => [
  {
    id: 'company_profile',
    title: 'Configure sua Empresa',
    description: 'Complete informações da empresa',
    icon: Users,
    completed: false,
    points: 100,
    category: 'setup',
    route: '/company/profile'
  },
  {
    id: 'cashback_rules',
    title: 'Defina Regras de Cashback',
    description: 'Configure percentuais',
    icon: Target,
    completed: false,
    points: 150,
    category: 'setup',
    route: '/company/profile'
  },
  {
    id: 'first_campaign',
    title: 'Crie uma Campanha',
    description: 'Lance uma promoção',
    icon: Zap,
    completed: false,
    points: 200,
    category: 'first_action',
    route: '/company/ai-campaigns'
  },
  {
    id: 'integration_setup',
    title: 'Configure Integrações',
    description: 'Conecte seus sistemas',
    icon: Trophy,
    completed: false,
    points: 250,
    category: 'setup',
    route: '/company/integrations'
  }
];

export const getOnboardingSteps = (userType: UserType): OnboardingStep[] => {
  return userType === 'client' ? getClientSteps() : getCompanySteps();
};
