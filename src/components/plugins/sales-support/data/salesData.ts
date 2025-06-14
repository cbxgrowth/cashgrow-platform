
import { 
  MessageCircle, 
  Phone, 
  Calendar,
  Zap,
  Crown,
  Users,
  CheckCircle
} from "lucide-react";

export const salesOptions = [
  {
    icon: MessageCircle,
    title: "Chat com Vendas",
    description: "Fale com um especialista agora",
    action: "Iniciar Chat",
    gradient: "from-blue-500 to-indigo-600",
    availability: "Online agora"
  },
  {
    icon: Phone,
    title: "Ligação Gratuita",
    description: "Agende uma demonstração",
    action: "Agendar Ligação",
    gradient: "from-green-500 to-emerald-600",
    availability: "Disponível"
  },
  {
    icon: Calendar,
    title: "Demo Personalizada",
    description: "Demonstração do produto",
    action: "Agendar Demo",
    gradient: "from-purple-500 to-violet-600",
    availability: "15 min"
  }
];

export const benefits = [
  { icon: Zap, text: "Setup em 5 minutos", color: "text-yellow-500" },
  { icon: Crown, text: "Suporte premium 24/7", color: "text-purple-500" },
  { icon: Users, text: "Treinamento gratuito", color: "text-blue-500" },
  { icon: CheckCircle, text: "ROI garantido em 30 dias", color: "text-green-500" }
];

export const urgencyFeatures = [
  "🔥 Oferta limitada - 50% OFF no primeiro mês",
  "⚡ Implementação express em 24h",
  "🎯 Consultoria estratégica gratuita",
  "💎 Acesso antecipado a novas funcionalidades"
];
