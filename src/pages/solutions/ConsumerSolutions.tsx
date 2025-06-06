
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Target, 
  Crown, 
  Zap, 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from 'react-router-dom';

const ConsumerSolutions = () => {
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
      borderColor: "border-green-200"
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
      borderColor: "border-blue-200"
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
      borderColor: "border-purple-200"
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
      borderColor: "border-orange-200"
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "App Mobile Nativo",
      description: "Acesse suas recompensas onde estiver com nosso app intuitivo"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção total dos seus dados com criptografia de ponta"
    },
    {
      icon: TrendingUp,
      title: "Análises Pessoais",
      description: "Relatórios detalhados do seu histórico de cashback e economia"
    },
    {
      icon: Star,
      title: "Programa de Indicação",
      description: "Ganhe mais indicando amigos e familiares para a plataforma"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Soluções para Consumidor
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Maximize suas Recompensas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubra como nossa plataforma revoluciona a forma como você ganha cashback, 
            com tecnologia avançada e experiência gamificada única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing/personal">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Ver Planos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
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
              <Card key={index} className={`${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
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
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className={`h-5 w-5 ${feature.color}`} />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos Adicionais
            </h2>
            <p className="text-xl text-muted-foreground">
              Mais funcionalidades para uma experiência completa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Pronto para Começar?
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                Junte-se a milhares de usuários que já estão ganhando cashback inteligente
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Criar Conta Grátis
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Falar com Consultor
                  </Button>
                </Link>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ConsumerSolutions;
