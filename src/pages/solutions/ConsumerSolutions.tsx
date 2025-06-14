import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
  CheckCircle2,
  Users,
  DollarSign,
  Clock,
  Award,
  Heart,
  Sparkles,
  Calculator,
  Bell,
  Trophy,
  MapPin,
  CreditCard,
  RefreshCw
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

  const statistics = [
    { icon: Users, value: "2.5M+", label: "Usuários ativos" },
    { icon: DollarSign, value: "R$ 45M", label: "Cashback pago" },
    { icon: Star, value: "4.9", label: "Avaliação na store" },
    { icon: Trophy, value: "150K", label: "Missões completadas/mês" }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Usuária Premium",
      content: "Já economizei mais de R$ 2.000 este ano apenas fazendo compras normalmente. O sistema de missões é viciante!",
      rating: 5,
      savings: "R$ 2.150"
    },
    {
      name: "Carlos Mendes",
      role: "Membro VIP",
      content: "As recomendações da IA são impressionantes. Sempre me mostram as melhores ofertas antes de todo mundo.",
      rating: 5,
      savings: "R$ 1.890"
    },
    {
      name: "Marina Costa",
      role: "Usuária desde 2022",
      content: "O clube VIP vale cada centavo. O cashback premium e o suporte são excepcionais.",
      rating: 5,
      savings: "R$ 3.200"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: CreditCard,
      title: "Cadastre-se Grátis",
      description: "Crie sua conta em menos de 2 minutos"
    },
    {
      step: 2,
      icon: MapPin,
      title: "Compre nas Lojas Parceiras",
      description: "Mais de 5.000 lojas online e físicas"
    },
    {
      step: 3,
      icon: Gift,
      title: "Receba Cashback",
      description: "Dinheiro na sua carteira automaticamente"
    },
    {
      step: 4,
      icon: RefreshCw,
      title: "Resgate ou Reinvista",
      description: "Use como quiser ou potencialize ganhos"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Soluções para Consumidor
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Maximize suas Recompensas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubra como nossa plataforma revoluciona a forma como você ganha cashback, 
            com tecnologia avançada e experiência gamificada única no mercado brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing/consumer">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Ver Planos
              </Button>
            </Link>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              4 passos simples para começar a ganhar cashback
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative">
                    <step.icon className="h-8 w-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
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

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de quem já está economizando
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      {testimonial.savings}
                    </Badge>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
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

      {/* Pricing Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para Todos os Perfis
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Desde usuário casual até o consumidor premium
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Gratuito</CardTitle>
                <div className="text-2xl font-bold">R$ 0<span className="text-sm font-normal">/mês</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Cashback até 5%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Missões básicas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    App mobile
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary scale-105 shadow-lg">
              <CardHeader>
                <Badge className="mb-2">Mais Popular</Badge>
                <CardTitle>Premium</CardTitle>
                <div className="text-2xl font-bold">R$ 19<span className="text-sm font-normal">/mês</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Cashback até 12%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Todas as missões
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    IA personalizada
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle>VIP</CardTitle>
                <div className="text-2xl font-bold">R$ 49<span className="text-sm font-normal">/mês</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Cashback até 20%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Acesso antecipado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Suporte priority
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Link to="/pricing/consumer">
            <Button size="lg" variant="outline">
              Ver Todos os Planos
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Pronto para Começar a Economizar?
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                Junte-se a mais de 2.5 milhões de usuários que já estão ganhando cashback inteligente
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    <Gift className="mr-2 h-5 w-5" />
                    Criar Conta Grátis
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    <Clock className="mr-2 h-5 w-5" />
                    Agendar Demonstração
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
