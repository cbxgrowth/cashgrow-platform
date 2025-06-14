
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { 
  Check, 
  Crown, 
  Users, 
  Building2, 
  Sparkles, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Target,
  TrendingUp
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const personalPlans = [
    {
      name: "Starter",
      description: "Perfeito para quem está começando",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Cashback básico até 2%",
        "Até 5 transações por mês",
        "Suporte por email",
        "Dashboard básico",
        "1 carteira digital"
      ],
      highlighted: false,
      buttonText: "Começar Grátis",
      buttonVariant: "outline" as const,
      icon: Users,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      description: "Para usuários que querem mais benefícios",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Cashback até 5%",
        "Transações ilimitadas",
        "Missões gamificadas",
        "Suporte prioritário",
        "Analytics pessoais",
        "Múltiplas carteiras",
        "Recomendações IA"
      ],
      highlighted: true,
      buttonText: "Assinar Premium",
      buttonVariant: "default" as const,
      icon: Crown,
      gradient: "from-primary to-accent"
    },
    {
      name: "VIP",
      description: "Experiência premium completa",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Cashback até 10%",
        "Acesso ao Clube VIP",
        "Gerente de conta dedicado",
        "Benefícios exclusivos",
        "Eventos especiais",
        "Cashback instantâneo",
        "Programa de indicação",
        "Suporte 24/7"
      ],
      highlighted: false,
      buttonText: "Tornar-se VIP",
      buttonVariant: "premium" as const,
      icon: Star,
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const businessPlans = [
    {
      name: "Básico",
      description: "Ideal para pequenas empresas",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Até 1.000 clientes",
        "Dashboard básico",
        "Relatórios mensais",
        "Suporte por email",
        "Integração básica",
        "Cashback até 3%"
      ],
      highlighted: false,
      buttonText: "Começar Teste",
      buttonVariant: "outline" as const,
      icon: Building2,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Profissional",
      description: "Para empresas em crescimento",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Até 10.000 clientes",
        "Analytics avançados",
        "Relatórios personalizados",
        "Suporte prioritário",
        "APIs completas",
        "Campanhas automatizadas",
        "Multi-loja",
        "Cashback até 5%"
      ],
      highlighted: true,
      buttonText: "Assinar Profissional",
      buttonVariant: "default" as const,
      icon: TrendingUp,
      gradient: "from-primary to-accent"
    },
    {
      name: "Enterprise",
      description: "Solução completa para grandes empresas",
      monthlyPrice: 999,
      annualPrice: 9990,
      features: [
        "Clientes ilimitados",
        "BI e Analytics personalizados",
        "Gerente de conta dedicado",
        "SLA garantido",
        "Integração personalizada",
        "Whitelabel completo",
        "Suporte 24/7",
        "Cashback customizável",
        "Treinamento da equipe"
      ],
      highlighted: false,
      buttonText: "Falar com Vendas",
      buttonVariant: "premium" as const,
      icon: Crown,
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Processamento Instantâneo",
      description: "Cashback processado em tempo real"
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Criptografia de nível bancário"
    },
    {
      icon: Target,
      title: "Gamificação Avançada",
      description: "Missões e conquistas personalizadas"
    },
    {
      icon: TrendingUp,
      title: "Analytics em Tempo Real",
      description: "Insights e relatórios detalhados"
    }
  ];

  const getPrice = (plan: any) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: any) => {
    if (plan.monthlyPrice === 0) return 0;
    return Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Planos e Preços
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Escolha o{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Plano Ideal
              </span>{" "}
              para Você
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Seja você um consumidor buscando economia ou uma empresa querendo fidelizar clientes, temos o plano perfeito para suas necessidades.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <span className={`text-sm ${!isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Mensal
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Anual
              </span>
              {isAnnual && (
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Economize até 30%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Planos <span className="text-primary">Pessoais</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Para consumidores que querem maximizar suas economias com cashback inteligente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {personalPlans.map((plan, index) => (
              <Card key={plan.name} className={`relative hover-scale transition-all duration-300 ${plan.highlighted ? 'border-primary shadow-xl scale-105' : 'border-border shadow-lg'} animate-fade-in-up overflow-hidden`} style={{ animationDelay: `${index * 150}ms` }}>
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
                
                <CardHeader className="relative">
                  {plan.highlighted && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white border-primary">
                      Mais Popular
                    </Badge>
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        R$ {getPrice(plan)}
                      </span>
                      <span className="text-muted-foreground">
                        /{isAnnual ? 'ano' : 'mês'}
                      </span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <div className="text-sm text-green-600 font-medium">
                        Economize {getSavings(plan)}% pagando anual
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full hover-scale"
                    size="lg"
                  >
                    <Link to="/auth/register" className="flex items-center gap-2">
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Planos <span className="text-accent">Empresariais</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Para empresas que querem implementar programas de cashback e fidelizar clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessPlans.map((plan, index) => (
              <Card key={plan.name} className={`relative hover-scale transition-all duration-300 ${plan.highlighted ? 'border-primary shadow-xl scale-105' : 'border-border shadow-lg'} animate-fade-in-up overflow-hidden`} style={{ animationDelay: `${index * 150}ms` }}>
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
                
                <CardHeader className="relative">
                  {plan.highlighted && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white border-primary">
                      Recomendado
                    </Badge>
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        R$ {getPrice(plan)}
                      </span>
                      <span className="text-muted-foreground">
                        /{isAnnual ? 'ano' : 'mês'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium">
                        Economize {getSavings(plan)}% pagando anual
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full hover-scale"
                    size="lg"
                  >
                    <Link to={plan.name === 'Enterprise' ? '/contact' : '/auth/register'} className="flex items-center gap-2">
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recursos <span className="text-primary">Inclusos</span> em Todos os Planos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Independente do plano escolhido, você terá acesso a nossa tecnologia de ponta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="text-center hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="hover-scale border-0 shadow-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle>Posso mudar de plano a qualquer momento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale border-0 shadow-lg animate-fade-in-up animation-delay-100">
              <CardHeader>
                <CardTitle>Existe período de teste gratuito?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim, oferecemos 14 dias grátis para todos os planos pagos. Você pode cancelar a qualquer momento durante o período de teste sem cobrança.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale border-0 shadow-lg animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle>Como funciona o cashback?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O cashback é calculado automaticamente sobre compras qualificadas e creditado na sua carteira digital. Você pode resgatar o valor ou usar para novas compras.
                </p>
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
              Comece Hoje Mesmo
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Escolha seu plano e comece a economizar ou fidelizar seus clientes agora mesmo. Sem compromisso, sem taxas de cancelamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Falar com Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
