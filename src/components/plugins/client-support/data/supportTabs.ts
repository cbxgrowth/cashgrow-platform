
import { 
  HelpCircle, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Gift, 
  Target, 
  TrendingUp, 
  Crown, 
  Star, 
  Sparkles, 
  Wallet
} from "lucide-react";

export const supportTabs = {
  suporte: {
    title: "Suporte Geral",
    icon: HelpCircle,
    options: [
      {
        icon: MessageCircle,
        title: "Chat ao Vivo",
        description: "Resposta em segundos",
        action: "Iniciar Chat",
        gradient: "from-green-500 to-emerald-600",
        available: true
      },
      {
        icon: BookOpen,
        title: "Central de Ajuda",
        description: "Artigos e tutoriais",
        action: "Ver Artigos",
        gradient: "from-blue-500 to-indigo-600",
        available: true
      },
      {
        icon: Video,
        title: "Tutoriais em Vídeo",
        description: "Aprenda assistindo",
        action: "Assistir",
        gradient: "from-purple-500 to-violet-600",
        available: true
      }
    ]
  },
  cashback: {
    title: "Cashback & Recompensas",
    icon: Wallet,
    options: [
      {
        icon: Gift,
        title: "Como Ganhar Mais",
        description: "Dicas para maximizar cashback",
        action: "Ver Dicas",
        gradient: "from-orange-500 to-red-600",
        available: true
      },
      {
        icon: Target,
        title: "Missões Disponíveis",
        description: "Complete e ganhe extra",
        action: "Ver Missões",
        gradient: "from-cyan-500 to-blue-600",
        available: true
      },
      {
        icon: TrendingUp,
        title: "Histórico de Ganhos",
        description: "Acompanhe seus ganhos",
        action: "Ver Histórico",
        gradient: "from-green-500 to-teal-600",
        available: true
      }
    ]
  },
  vip: {
    title: "Clube VIP",
    icon: Crown,
    options: [
      {
        icon: Crown,
        title: "Benefícios VIP",
        description: "Vantagens exclusivas",
        action: "Conhecer",
        gradient: "from-yellow-500 to-amber-600",
        available: true
      },
      {
        icon: Star,
        title: "Status Premium",
        description: "Como se tornar VIP",
        action: "Upgrade",
        gradient: "from-purple-500 to-pink-600",
        available: true
      },
      {
        icon: Sparkles,
        title: "Ofertas Especiais",
        description: "Exclusivo para VIPs",
        action: "Ver Ofertas",
        gradient: "from-indigo-500 to-purple-600",
        available: true
      }
    ]
  }
};
