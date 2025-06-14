
import { 
  MessageCircle, 
  Phone, 
  Code,
  BarChart3,
  ArrowUp,
  Star,
  FileText,
  Video,
  Users,
  Settings,
  BookOpen
} from "lucide-react";

export const supportCategories = {
  tecnico: {
    title: "Suporte Técnico",
    icon: Settings,
    color: "from-blue-500 to-indigo-600",
    options: [
      {
        icon: MessageCircle,
        title: "Chat Técnico",
        description: "Suporte técnico prioritário 24/7",
        action: "Iniciar Chat",
        gradient: "from-blue-500 to-indigo-600",
        responseTime: "< 2 min"
      },
      {
        icon: Phone,
        title: "Suporte por Telefone",
        description: "Linha direta para empresas",
        action: "Ligar Agora",
        gradient: "from-green-500 to-emerald-600",
        responseTime: "Imediato"
      },
      {
        icon: Code,
        title: "Suporte de Integração",
        description: "Ajuda com APIs e implementação",
        action: "Solicitar Ajuda",
        gradient: "from-purple-500 to-violet-600",
        responseTime: "< 1 hora"
      }
    ]
  },
  comercial: {
    title: "Suporte Comercial",
    icon: Users,
    color: "from-green-500 to-emerald-600",
    options: [
      {
        icon: BarChart3,
        title: "Consultoria de Performance",
        description: "Otimize seus resultados",
        action: "Agendar Consultoria",
        gradient: "from-green-500 to-emerald-600",
        responseTime: "< 24h"
      },
      {
        icon: ArrowUp,
        title: "Account Manager",
        description: "Seu gerente de conta dedicado",
        action: "Falar com AM",
        gradient: "from-blue-500 to-indigo-600",
        responseTime: "< 4h"
      },
      {
        icon: Star,
        title: "Upgrade de Plano",
        description: "Explore funcionalidades premium",
        action: "Ver Upgrades",
        gradient: "from-amber-500 to-orange-600",
        responseTime: "Imediato"
      }
    ]
  },
  recursos: {
    title: "Recursos de Aprendizado",
    icon: BookOpen,
    color: "from-purple-500 to-violet-600",
    options: [
      {
        icon: FileText,
        title: "Documentação",
        description: "Guias completos e APIs",
        action: "Ver Docs",
        gradient: "from-purple-500 to-violet-600",
        responseTime: "Imediato"
      },
      {
        icon: Video,
        title: "Tutoriais em Vídeo",
        description: "Aprenda assistindo",
        action: "Assistir",
        gradient: "from-red-500 to-pink-600",
        responseTime: "Imediato"
      },
      {
        icon: Users,
        title: "Treinamento Personalizado",
        description: "Treinamento para sua equipe",
        action: "Agendar",
        gradient: "from-cyan-500 to-blue-600",
        responseTime: "< 48h"
      }
    ]
  }
};
