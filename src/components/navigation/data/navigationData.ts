
import { 
  Home,
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Building2, 
  Crown, 
  User,
  BarChart3,
  Lightbulb,
  MessageCircle,
  FileText,
  HelpCircle,
  BookOpen,
  Phone
} from "lucide-react";

// Soluções para Consumidores
export const solutionsForConsumers = [
  {
    title: "Cashback Pessoal",
    href: "/solutions/consumer",
    description: "Ganhe dinheiro de volta em suas compras do dia a dia",
    icon: Zap
  },
  {
    title: "Missões e Desafios",
    href: "/solutions/consumer/missions",
    description: "Complete missões e ganhe recompensas extras",
    icon: Target
  },
  {
    title: "Análise de Gastos",
    href: "/solutions/consumer/analytics",
    description: "Monitore seus gastos e otimize suas economias",
    icon: TrendingUp
  },
  {
    title: "Clube VIP",
    href: "/solutions/consumer/vip",
    description: "Benefícios exclusivos para membros premium",
    icon: Crown
  }
];

// Soluções para Empresas
export const solutionsForBusiness = [
  {
    title: "Programa de Fidelidade",
    href: "/solutions/business",
    description: "Crie programas personalizados para seus clientes",
    icon: Users
  },
  {
    title: "Analytics Empresarial",
    href: "/solutions/business/analytics",
    description: "Insights avançados sobre comportamento do cliente",
    icon: BarChart3
  },
  {
    title: "Integração API",
    href: "/solutions/business/api",
    description: "Conecte facilmente com seus sistemas existentes",
    icon: Building2
  },
  {
    title: "Campanhas IA",
    href: "/solutions/business/ai",
    description: "Marketing automatizado com inteligência artificial",
    icon: Lightbulb
  }
];

// Links de recursos
export const resourcesLinks = [
  {
    title: "Central de Ajuda",
    href: "/help",
    description: "Encontre respostas para suas dúvidas",
    icon: HelpCircle
  },
  {
    title: "Documentação",
    href: "/docs",
    description: "Guias técnicos e documentação da API",
    icon: BookOpen
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Novidades, dicas e insights do mercado",
    icon: FileText
  },
  {
    title: "Comunidade",
    href: "/community",
    description: "Conecte-se com outros usuários",
    icon: MessageCircle
  },
  {
    title: "Suporte",
    href: "/contact",
    description: "Entre em contato com nossa equipe",
    icon: Phone
  }
];

// Links principais da navegação
export const mainNavigationLinks = [
  {
    title: "Início",
    href: "/",
    icon: Home
  }
];
