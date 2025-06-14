
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Gift, Target, Crown, Zap, CheckCircle2 } from "lucide-react";

const mainFeatures = [
  {
    icon: Gift,
    title: "Cashback Inteligente",
    description: "Ganhe dinheiro de volta automaticamente em suas compras favoritas",
    features: [
      "Cashback automático em milhares de lojas",
      "Percentuais variáveis até 15%",
      "Acúmulo instantâneo na carteira",
      "Sem taxas ou anuidades"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    stats: { percentage: "15%", label: "Cashback máximo" }
  },
  {
    icon: Target,
    title: "Missões Gamificadas",
    description: "Complete desafios divertidos e ganhe recompensas extras",
    features: [
      "Desafios diários e semanais",
      "Multiplicadores de cashback",
      "Sistema de pontuação XP",
      "Recompensas exclusivas"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    stats: { percentage: "300%", label: "Mais engajamento" }
  },
  {
    icon: Crown,
    title: "Clube VIP",
    description: "Benefícios exclusivos para membros premium",
    features: [
      "Cashback premium até 20%",
      "Acesso antecipado a promoções",
      "Suporte prioritário 24/7",
      "Eventos exclusivos"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    stats: { percentage: "20%", label: "Cashback VIP" }
  },
  {
    icon: Zap,
    title: "Recomendações IA",
    description: "Sugestões personalizadas baseadas em inteligência artificial",
    features: [
      "Análise do seu perfil de compras",
      "Ofertas personalizadas",
      "Predição de cashback",
      "Alertas de melhores deals"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    stats: { percentage: "95%", label: "Precisão da IA" }
  }
];

export const MainFeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para maximizar seus ganhos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className={`${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
              <div className="absolute top-4 right-4">
                <Badge className={`${feature.color} bg-white/80`}>
                  {feature.stats.percentage}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${feature.bgColor} ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${feature.color}`} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">{feature.stats.label}</div>
                  <Progress value={parseInt(feature.stats.percentage)} className="mt-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
