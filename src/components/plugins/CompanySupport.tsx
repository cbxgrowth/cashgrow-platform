
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
  Users
} from "lucide-react";

const CompanySupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Chat Empresarial",
      description: "Suporte técnico prioritário",
      action: "Iniciar Chat",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Suporte Técnico",
      description: "Linha direta para empresas",
      action: "Ligar Agora",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Guias e APIs completas",
      action: "Ver Docs",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const quickActions = [
    { icon: Settings, text: "Configurar Integrações" },
    { icon: BarChart3, text: "Relatórios Avançados" },
    { icon: Users, text: "Gerenciar Usuários" },
    { icon: FileText, text: "Central de Ajuda" }
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 rounded-full w-16 h-16"
        >
          <Headphones className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Suporte Empresarial</CardTitle>
                  <CardDescription className="text-lg">
                    Nossa equipe especializada está pronta para ajudar sua empresa
                  </CardDescription>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    <action.icon className="w-3 h-3" />
                    {action.text}
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
              
              <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Suporte Premium 24/7</h3>
                <p className="text-muted-foreground mb-4">
                  Acesso prioritário ao nosso time de especialistas técnicos
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90">
                  Ativar Suporte Premium
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
