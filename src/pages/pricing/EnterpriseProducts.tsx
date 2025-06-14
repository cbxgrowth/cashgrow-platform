
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { 
  Check, 
  Building2, 
  Rocket, 
  Crown, 
  Zap, 
  TrendingUp,
  Users,
  BarChart3,
  Sparkles,
  ArrowRight,
  Shield,
  Globe,
  Headphones,
  Settings,
  Brain,
  Database
} from "lucide-react";

const EnterpriseProducts = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter Business",
      description: "Ideal para pequenas empresas",
      monthlyPrice: 299,
      annualPrice: 2990,
      icon: Building2,
      features: [
        "Até 1.000 clientes ativos",
        "Dashboard básico",
        "Relatórios mensais",
        "Suporte por email",
        "API básica",
        "Campanhas simples",
        "Integração com 2 sistemas"
      ],
      highlighted: false,
      buttonText: "Começar Teste Grátis",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Professional",
      description: "Para empresas em crescimento",
      monthlyPrice: 599,
      annualPrice: 5990,
      icon: TrendingUp,
      features: [
        "Até 10.000 clientes ativos",
        "Dashboard avançado",
        "Relatórios em tempo real",
        "Suporte prioritário",
        "API completa",
        "Campanhas com IA",
        "Integrações ilimitadas",
        "Análises preditivas",
        "White-label básico"
      ],
      highlighted: true,
      buttonText: "Escolher Professional",
      gradient: "from-primary to-accent"
    },
    {
      name: "Enterprise",
      description: "Solução completa para grandes empresas",
      monthlyPrice: 1299,
      annualPrice: 12990,
      icon: Crown,
      features: [
        "Clientes ilimitados",
        "Dashboard customizado",
        "Relatórios personalizados",
        "Gerente de conta dedicado",
        "API enterprise",
        "IA personalizada",
        "Integrações sob medida",
        "SLA garantido 99.9%",
        "White-label completo",
        "Treinamento da equipe",
        "Consultoria estratégica"
      ],
      highlighted: false,
      buttonText: "Falar com Vendas",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const products = [
    {
      icon: Brain,
      title: "Cashback Engine",
      description: "Motor de cashback com IA para otimização automática de campanhas",
      features: ["IA avançada", "Otimização automática", "Análise preditiva"]
    },
    {
      icon: Database,
      title: "Customer Hub",
      description: "CRM integrado com gestão completa do ciclo de vida do cliente",
      features: ["CRM completo", "Automação", "Segmentação avançada"]
    },
    {
      icon: BarChart3,
      title: "Analytics Pro",
      description: "Business Intelligence com insights em tempo real",
      features: ["BI avançado", "Tempo real", "Relatórios personalizados"]
    },
    {
      icon: Globe,
      title: "Integration Suite",
      description: "Conecte qualquer sistema com nossa suite de integrações",
      features: ["APIs robustas", "Conectores prontos", "Webhooks"]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Setup completo em até 48 horas com nossa equipe especializada"
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Certificações SOC2, ISO 27001 e compliance LGPD/GDPR"
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Equipe especializada 24/7 com SLA garantido"
    },
    {
      icon: Settings,
      title: "Personalização Total",
      description: "Adaptamos a solução às necessidades específicas do seu negócio"
    }
  ];

  const getPrice = (plan: any) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: any) => {
    return Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              <Building2 className="h-3 w-3 mr-1" />
              Soluções Empresariais
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Impulsione seu{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Negócio
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Soluções completas de cashback e fidelização para empresas que querem transformar clientes em defensores da marca.
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

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative hover-scale transition-all duration-300 overflow-hidden ${
                  plan.highlighted 
                    ? 'border-primary shadow-xl scale-105 ring-2 ring-primary/20' 
                    : 'border-border shadow-lg hover:shadow-xl'
                } animate-fade-in-up`} 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
                
                <CardHeader className="relative pb-4">
                  {plan.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Recomendado
                    </Badge>
                  )}
                  
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6 mx-auto`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-center text-base">{plan.description}</CardDescription>
                  
                  <div className="text-center mt-6 space-y-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        R$ {getPrice(plan).toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        /{isAnnual ? 'ano' : 'mês'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium">
                        Economize {getSavings(plan)}% no plano anual
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground">30 dias grátis</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full hover-scale ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90' 
                        : ''
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
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

          {/* Products Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-4 animate-fade-in-up">
              Nossos <span className="text-primary">Produtos</span>
            </h3>
            <p className="text-center text-muted-foreground mb-12 animate-fade-in-up">
              Soluções modulares que se adaptam ao seu negócio
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{product.title}</h4>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
              Por que Empresas Escolhem Nossa <span className="text-primary">Plataforma</span>?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-6">Calcule seu ROI</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+85%</div>
                <p className="text-sm text-muted-foreground">Aumento na retenção de clientes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+120%</div>
                <p className="text-sm text-muted-foreground">Crescimento em compras recorrentes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6x</div>
                <p className="text-sm text-muted-foreground">Retorno sobre investimento médio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para Revolucionar seu Negócio?
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a mais de 10.000 empresas que já transformaram suas estratégias de fidelização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Agendar Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Link to="/auth/register">Começar Teste Grátis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseProducts;
