
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  BarChart3, 
  Target, 
  Crown, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Brain,
  Globe,
  Smartphone
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Wallet,
      title: "Sistema de Cashback Inteligente",
      description: "Algoritmos avançados que calculam automaticamente o melhor cashback para cada transação, maximizando os retornos para empresas e clientes.",
      benefits: ["Cálculo automático", "Regras personalizáveis", "Processamento em tempo real", "Múltiplas categorias"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Analytics e Relatórios",
      description: "Dashboards interativos com métricas em tempo real, insights de comportamento do consumidor e relatórios customizáveis para tomada de decisão.",
      benefits: ["Dashboards em tempo real", "Relatórios customizáveis", "Análise de comportamento", "Previsões com IA"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Missões Gamificadas",
      description: "Sistema de gamificação que engaja usuários através de missões, desafios e conquistas, aumentando a participação e fidelidade.",
      benefits: ["Missões personalizadas", "Sistema de conquistas", "Rankings competitivos", "Recompensas especiais"],
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Crown,
      title: "Clube VIP Premium",
      description: "Programa de fidelidade exclusivo com benefícios especiais, cashback aumentado e acesso prioritário a promoções e eventos.",
      benefits: ["Cashback aumentado", "Atendimento prioritário", "Acesso exclusivo", "Benefícios especiais"],
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const technicalFeatures = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "IA para personalização de ofertas e previsão de comportamento",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Criptografia de ponta e proteção de dados certificada",
      color: "text-green-600"
    },
    {
      icon: Globe,
      title: "Integração Universal",
      description: "APIs robustas para integração com qualquer sistema",
      color: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Interface otimizada para dispositivos móveis",
      color: "text-indigo-600"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Processamento em tempo real com 99.9% de uptime",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Multi-tenant",
      description: "Suporte a múltiplas empresas em uma única plataforma",
      color: "text-pink-600"
    }
  ];

  const businessBenefits = [
    "Aumento de 40% na retenção de clientes",
    "Crescimento de 25% no ticket médio",
    "Redução de 60% no custo de aquisição",
    "Melhoria de 50% na satisfação do cliente",
    "Insights em tempo real sobre comportamento",
    "Automação completa do programa de fidelidade"
  ];

  const clientBenefits = [
    "Cashback em todas as compras qualificadas",
    "Recomendações personalizadas de produtos",
    "Missões diárias para ganhos extras",
    "Acesso ao Clube VIP com benefícios exclusivos",
    "Interface intuitiva e fácil de usar",
    "Múltiplas formas de resgate de recompensas"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Funcionalidades Avançadas
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Tecnologia que{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Revoluciona
              </span>{" "}
              o Cashback
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Descubra como nossa plataforma combina inteligência artificial, gamificação e analytics avançados para criar a melhor experiência de cashback do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Funcionalidades <span className="text-primary">Principais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada funcionalidade foi pensada para maximizar resultados tanto para empresas quanto para consumidores.
            </p>
          </div>
          
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div key={feature.title} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 animate-fade-in-up" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                  <Card className="hover-scale border-0 shadow-xl bg-gradient-to-br from-background to-muted/30">
                    <CardContent className="p-8">
                      <div className={`w-full h-48 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-20 mb-6 animate-pulse-soft`} />
                      <div className="space-y-3">
                        <div className="h-4 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="h-4 bg-muted rounded w-2/3" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Tecnologia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recursos <span className="text-accent">Técnicos</span> Avançados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa infraestrutura robusta garante performance, segurança e escalabilidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <Card key={feature.title} className="group hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-background shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefícios <span className="text-primary">Comprovados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados reais que transformam negócios e experiências de compra.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Benefits */}
            <Card className="hover-scale border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 animate-fade-in-up">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Para Empresas</CardTitle>
                <CardDescription className="text-lg">Resultados que impactam diretamente seu ROI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Client Benefits */}
            <Card className="hover-scale border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 animate-fade-in-up animation-delay-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Para Clientes</CardTitle>
                <CardDescription className="text-lg">Vantagens que fazem a diferença no seu dia a dia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experimente Todas as Funcionalidades
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Teste nossa plataforma gratuitamente e veja como ela pode transformar seu negócio ou sua experiência de compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Teste Grátis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Link to="/pricing">Ver Planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
