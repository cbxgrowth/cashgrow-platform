
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
    description: 'Adicione suas informações pessoais e preferências',
    icon: Users,
    completed: false,
    points: 50,
    category: 'setup'
  },
  {
    id: 'connect_first_store',
    title: 'Conecte sua Primeira Loja',
    description: 'Escolha uma loja favorita para começar a ganhar cashback',
    icon: Target,
    completed: false,
    points: 100,
    category: 'first_action'
  },
  {
    id: 'first_mission',
    title: 'Complete sua Primeira Missão',
    description: 'Faça uma compra qualificada e ganhe pontos extras',
    icon: Trophy,
    completed: false,
    points: 150,
    category: 'achievement'
  },
  {
    id: 'explore_vip',
    title: 'Explore o Clube VIP',
    description: 'Descubra benefícios exclusivos e recompensas premium',
    icon: Star,
    completed: false,
    points: 75,
    category: 'exploration'
  },
  {
    id: 'invite_friend',
    title: 'Convide um Amigo',
    description: 'Compartilhe e ganhe bônus quando seu amigo se cadastrar',
    icon: Gift,
    completed: false,
    points: 200,
    category: 'achievement'
  }
];

export const getCompanySteps = (): OnboardingStep[] => [
  {
    id: 'company_profile',
    title: 'Configure sua Empresa',
    description: 'Complete as informações da sua empresa e marca',
    icon: Users,
    completed: false,
    points: 100,
    category: 'setup'
  },
  {
    id: 'cashback_rules',
    title: 'Defina Regras de Cashback',
    description: 'Configure percentuais e condições para seus produtos',
    icon: Target,
    completed: false,
    points: 150,
    category: 'setup'
  },
  {
    id: 'first_campaign',
    title: 'Crie sua Primeira Campanha',
    description: 'Lance uma campanha promocional para atrair clientes',
    icon: Zap,
    completed: false,
    points: 200,
    category: 'first_action'
  },
  {
    id: 'integration_setup',
    title: 'Configure Integrações',
    description: 'Conecte seus sistemas existentes via API',
    icon: Trophy,
    completed: false,
    points: 250,
    category: 'setup'
  },
  {
    id: 'analytics_review',
    title: 'Explore Analytics',
    description: 'Conheça relatórios e métricas de performance',
    icon: Star,
    completed: false,
    points: 100,
    category: 'exploration'
  }
];

export const getOnboardingSteps = (userType: UserType): OnboardingStep[] => {
  return userType === 'client' ? getClientSteps() : getCompanySteps();
};
