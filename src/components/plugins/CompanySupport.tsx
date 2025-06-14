
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail,
  X,
  FileText,
  Settings,
  BarChart3,
  Users,
  Code,
  Zap,
  Shield,
  Clock,
  Star,
  BookOpen,
  Video,
  Award,
  ArrowUp
} from "lucide-react";

const CompanySupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('tecnico');

  const supportCategories = {
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

  const quickActions = [
    { icon: Settings, text: "Configurar Integrações", color: "text-blue-500" },
    { icon: BarChart3, text: "Relatórios Avançados", color: "text-green-500" },
    { icon: Users, text: "Gerenciar Usuários", color: "text-purple-500" },
    { icon: Shield, text: "Segurança & Compliance", color: "text-red-500" }
  ];

  return (
    <>
      {/* Enhanced Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 rounded-full w-16 h-16"
          >
            <Headphones className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Button>
          
          {/* Status indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
        </div>
      </div>

      {/* Enhanced Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <Card className="w-full max-w-5xl bg-background/95 backdrop-blur-md border-0 shadow-2xl animate-scale-in rounded-2xl max-h-[90vh] overflow-hidden">
            <CardHeader className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">Suporte Empresarial Premium</CardTitle>
                  <CardDescription className="text-lg">
                    Nossa equipe especializada está pronta para ajudar sua empresa a alcançar o máximo potencial
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-600 font-medium">Equipe online • Tempo de resposta < 2min</span>
                  </div>
                </div>
              </div>

              {/* Category tabs */}
              <div className="flex gap-2 mb-4">
                {Object.entries(supportCategories).map(([key, category]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(key)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="w-4 h-4" />
                    {category.title}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {quickActions.map((action, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-2 p-3 justify-start hover:scale-105 transition-transform cursor-pointer">
                    <action.icon className={`w-4 h-4 ${action.color}`} />
                    <span className="text-xs">{action.text}</span>
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8 overflow-y-auto max-h-96">
              <div className="grid md:grid-cols-3 gap-6">
                {supportCategories[selectedCategory as keyof typeof supportCategories].options.map((option, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 dark:bg-green-950/20">
                        <Clock className="w-3 h-3 mr-1" />
                        {option.responseTime}
                      </Badge>
                    </div>
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
              
              <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl p-6 text-center border border-blue-200/50 dark:border-blue-800/50">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-600">Suporte Premium 24/7</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Acesso prioritário ao nosso time de especialistas técnicos e comerciais
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Resposta em < 2min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm">SLA Garantido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Equipe Dedicada</span>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90">
                  Upgrade para Premium
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CompanySupport;
