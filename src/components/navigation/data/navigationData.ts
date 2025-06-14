
import { 
  Gift, 
  Target, 
  Crown, 
  Zap, 
  TrendingUp, 
  Rocket, 
  Puzzle, 
  Star,
  Shield,
  Users,
  User,
  Building2
} from "lucide-react";

export const solutionsForConsumers = [
  {
    title: "Cashback Inteligente",
    description: "Ganhe dinheiro de volta em suas compras favoritas",
    href: "/solutions/consumer",
    icon: Gift
  },
  {
    title: "Missões Gamificadas",
    description: "Complete desafios e ganhe recompensas extras",
    href: "/solutions/consumer",
    icon: Target
  },
  {
    title: "Clube VIP",
    description: "Benefícios exclusivos para membros premium",
    href: "/solutions/consumer",
    icon: Crown
  },
  {
    title: "Recomendações IA",
    description: "Sugestões personalizadas baseadas em IA",
    href: "/solutions/consumer",
    icon: Zap
  }
];

export const solutionsForBusiness = [
  {
    title: "Dashboard Empresarial",
    description: "Gerencie campanhas e analise performance",
    href: "/solutions/business",
    icon: TrendingUp
  },
  {
    title: "Campanhas IA",
    description: "Crie campanhas inteligentes automatizadas",
    href: "/solutions/business",
    icon: Rocket
  },
  {
    title: "Integrações API",
    description: "Conecte com seus sistemas existentes",
    href: "/solutions/business",
    icon: Puzzle
  },
  {
    title: "Análises Avançadas",
    description: "Relatórios detalhados e insights em tempo real",
    href: "/solutions/business",
    icon: Star
  }
];

export const resources = [
  {
    title: "Central de Ajuda",
    description: "Documentação e tutoriais completos",
    href: "/help",
    icon: Shield
  },
  {
    title: "API Docs",
    description: "Documentação técnica para desenvolvedores",
    href: "/docs/api",
    icon: Puzzle
  },
  {
    title: "Comunidade",
    description: "Conecte-se com outros usuários",
    href: "/community",
    icon: Users
  }
];

export const planSections = {
  personal: {
    title: "Planos Pessoais",
    description: "Planos flexíveis para uso pessoal",
    href: "/pricing/consumer",
    icon: User
  },
  business: {
    title: "Planos Empresariais", 
    description: "Soluções escaláveis para negócios",
    href: "/pricing/enterprise",
    icon: Building2
  }
};
