
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  X,
  BookOpen,
  Video,
  Gift,
  Star,
  Wallet,
  Target,
  Crown,
  TrendingUp,
  Sparkles,
  Heart,
  Clock,
  Zap
} from "lucide-react";

const ClientSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('suporte');

  const supportTabs = {
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

  const quickHelp = [
    { icon: Gift, text: "Como ganhar cashback", color: "text-orange-500" },
    { icon: Star, text: "Programa VIP", color: "text-purple-500" },
    { icon: Phone, text: "Suporte por WhatsApp", color: "text-green-500" },
    { icon: BookOpen, text: "FAQ - Perguntas frequentes", color: "text-blue-500" }
  ];

  const dailyTips = [
    "💡 Compre aos domingos e ganhe cashback duplo!",
    "🎯 Complete 3 missões hoje e ganhe bônus extra!",
    "👑 Faltam apenas R$ 50 para você virar VIP!",
    "🔥 Lojas parceiras com até 15% de cashback hoje!"
  ];

  return (
    <>
      {/* Enhanced Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 rounded-full w-16 h-16"
          >
            <HelpCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Button>
          
          {/* Love animation */}
          <div className="absolute -top-2 -right-2 text-red-500 animate-pulse">
            <Heart className="w-4 h-4 fill-current" />
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping animation-delay-1000" />
        </div>
      </div>

      {/* Enhanced Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <Card className="w-full max-w-4xl bg-background/95 backdrop-blur-md border-0 shadow-2xl animate-scale-in rounded-2xl overflow-hidden max-h-[90vh]">
            <CardHeader className="relative bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                    <HelpCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-yellow-800" />
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">Precisa de Ajuda?</CardTitle>
                  <CardDescription className="text-lg mb-2">
                    Estamos aqui para ajudar você a aproveitar ao máximo sua experiência de cashback
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-600 font-medium">Suporte online • Resposta imediata</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto">
                {Object.entries(supportTabs).map(([key, tab]) => (
                  <Button
                    key={key}
                    variant={selectedTab === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTab(key)}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.title}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {quickHelp.map((help, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-2 p-3 justify-start hover:scale-105 transition-transform cursor-pointer">
                    <help.icon className={`w-4 h-4 ${help.color}`} />
                    <span className="text-xs">{help.text}</span>
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8 overflow-y-auto max-h-96">
              <div className="grid md:grid-cols-3 gap-6">
                {supportTabs[selectedTab as keyof typeof supportTabs].options.map((option, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
                    {option.available && (
                      <div className="absolute top-3 right-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    )}
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {option.description}
                      </p>
                      <Button size="sm" className="w-full">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-200/50 dark:border-emerald-800/50">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold">Dicas do Dia!</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {dailyTips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Você sabia que pode ganhar <span className="text-primary font-semibold">cashback duplo</span> aos domingos?
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90">
                    Descobrir Mais Dicas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ClientSupport;
