
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Bell, 
  Calculator, 
  Heart 
} from "lucide-react";

const additionalFeatures = [
  {
    icon: Smartphone,
    title: "App Mobile Nativo",
    description: "Acesse suas recompensas onde estiver com nosso app intuitivo",
    highlight: "iOS e Android"
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção total dos seus dados com criptografia de ponta",
    highlight: "SSL 256-bit"
  },
  {
    icon: TrendingUp,
    title: "Análises Pessoais",
    description: "Relatórios detalhados do seu histórico de cashback e economia",
    highlight: "Dashboards interativos"
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Notificações personalizadas de ofertas e oportunidades",
    highlight: "Push em tempo real"
  },
  {
    icon: Calculator,
    title: "Simulador de Ganhos",
    description: "Calcule quanto você pode ganhar com seus hábitos de compra",
    highlight: "Previsões precisas"
  },
  {
    icon: Heart,
    title: "Programa de Indicação",
    description: "Ganhe mais indicando amigos e familiares para a plataforma",
    highlight: "Bônus de R$ 50"
  }
];

export const AdditionalFeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos Adicionais
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais funcionalidades para uma experiência completa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs">
                  {feature.highlight}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
