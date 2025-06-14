
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  MessageCircle, 
  Phone, 
  Mail,
  X,
  Zap,
  Crown,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Calendar,
  Sparkles
} from "lucide-react";

const SalesSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-show after 30 seconds if not interacted with
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('sales-plugin-seen')) {
        setIsOpen(true);
        localStorage.setItem('sales-plugin-seen', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const salesOptions = [
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

  const benefits = [
    { icon: Zap, text: "Setup em 5 minutos", color: "text-yellow-500" },
    { icon: Crown, text: "Suporte premium 24/7", color: "text-purple-500" },
    { icon: Users, text: "Treinamento gratuito", color: "text-blue-500" },
    { icon: TrendingUp, text: "ROI garantido em 30 dias", color: "text-green-500" }
  ];

  const urgencyFeatures = [
    "🔥 Oferta limitada - 50% OFF no primeiro mês",
    "⚡ Implementação express em 24h",
    "🎯 Consultoria estratégica gratuita",
    "💎 Acesso antecipado a novas funcionalidades"
  ];

  return (
    <>
      {/* Enhanced Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 rounded-full w-16 h-16"
          >
            <DollarSign className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Button>
          
          {/* Enhanced pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping animation-delay-1000" />
          
          {/* Tooltip on hover */}
          {isHovered && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in">
              Fale com Vendas 💬
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
            </div>
          )}

          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
            !
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <Card className="w-full max-w-4xl bg-background/98 backdrop-blur-md border-0 shadow-2xl animate-scale-in rounded-2xl overflow-hidden">
            <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-yellow-800" />
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Acelere suas Vendas em 2024
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground mb-4">
                    Fale com nossos especialistas e descubra como aumentar seu faturamento em até <span className="font-bold text-green-600">300%</span>
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 dark:bg-orange-950/20 px-3 py-1 rounded-full w-fit">
                    <Clock className="w-4 h-4" />
                    Oferta válida por tempo limitado
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {benefits.map((benefit, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-2 p-3 justify-start hover:scale-105 transition-transform">
                    <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                    <span className="text-xs">{benefit.text}</span>
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {salesOptions.map((option, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background to-muted/30 overflow-hidden relative">
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 dark:bg-green-950/20">
                        {option.availability}
                      </Badge>
                    </div>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <Button size="lg" className="w-full group-hover:bg-primary/90 transition-all duration-300">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Urgency section */}
              <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl p-8 text-center border-2 border-dashed border-orange-200 dark:border-orange-800">
                <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                  🔥 Oferta Especial de Lançamento!
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {urgencyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="xl" className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                    Aproveitar Oferta Agora
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Válido até o final do mês
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default SalesSupport;
