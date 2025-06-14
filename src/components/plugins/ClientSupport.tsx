
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
  Star
} from "lucide-react";

const ClientSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Chat ao Vivo",
      description: "Resposta em segundos",
      action: "Iniciar Chat",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Central de Ajuda",
      description: "Artigos e tutoriais",
      action: "Ver Artigos",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Video,
      title: "Tutoriais em Vídeo",
      description: "Aprenda assistindo",
      action: "Assistir",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const quickHelp = [
    { icon: Gift, text: "Como ganhar cashback" },
    { icon: Star, text: "Programa VIP" },
    { icon: Phone, text: "Suporte por WhatsApp" },
    { icon: Mail, text: "FAQ - Perguntas frequentes" }
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 rounded-full w-16 h-16"
        >
          <HelpCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-2xl bg-background/95 backdrop-blur-md border-0 shadow-2xl animate-scale-in">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-2 hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Precisa de Ajuda?</CardTitle>
                  <CardDescription className="text-lg">
                    Estamos aqui para ajudar você a aproveitar ao máximo sua experiência
                  </CardDescription>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickHelp.map((help, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    <help.icon className="w-3 h-3" />
                    {help.text}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {supportOptions.map((option, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/30">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {option.description}
                      </p>
                      <Button size="sm" className="w-full">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Dica do Dia!</h3>
                <p className="text-muted-foreground mb-4">
                  Você sabia que pode ganhar <span className="text-primary font-semibold">cashback duplo</span> aos domingos?
                </p>
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90">
                  Descobrir Mais Dicas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ClientSupport;
