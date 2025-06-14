
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Sparkles,
  Star,
  CheckCircle,
  Wallet,
  BarChart3,
  Target,
  Crown,
  Globe,
  Smartphone,
  CreditCard,
  Gift,
  Rocket,
  Award
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const features = [
    {
      icon: Wallet,
      title: "Cashback Inteligente",
      description: "Ganhe dinheiro de volta em cada compra com nosso sistema avançado de recompensas.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançados",
      description: "Acompanhe seu desempenho com relatórios detalhados e insights em tempo real.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Missões Gamificadas",
      description: "Complete missões e desafios para ganhar recompensas extras e benefícios exclusivos.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Crown,
      title: "Clube VIP",
      description: "Acesse benefícios exclusivos, cashback maior e atendimento prioritário.",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "10K+", label: "Usuários Ativos", icon: Users, color: "text-blue-600" },
    { number: "R$ 2M+", label: "Cashback Distribuído", icon: TrendingUp, color: "text-green-600" },
    { number: "500+", label: "Empresas Parceiras", icon: Shield, color: "text-purple-600" },
    { number: "99.9%", label: "Uptime", icon: Zap, color: "text-orange-600" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "O sistema revolucionou nosso programa de fidelidade. Aumento de 40% na retenção de clientes!",
      rating: 5,
      avatar: "MS",
      company: "Silva & Associados"
    },
    {
      name: "João Santos",
      role: "Cliente",
      content: "Já economizei mais de R$ 500 este ano só com cashback. Recomendo para todos!",
      rating: 5,
      avatar: "JS",
      company: "Consumidor"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Marketing",
      content: "Os insights são incríveis. Conseguimos segmentar melhor nossa base de clientes.",
      rating: 5,
      avatar: "AC",
      company: "TechCorp"
    },
    {
      name: "Carlos Oliveira",
      role: "E-commerce Manager",
      content: "Integração perfeita com nossa loja. Vendas aumentaram 60% em 3 meses!",
      rating: 5,
      avatar: "CO",
      company: "ShopOnline"
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Conecte-se com milhares de parceiros em todo o país"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Gerencie tudo pelo celular com nosso app intuitivo"
    },
    {
      icon: CreditCard,
      title: "Múltiplos Pagamentos",
      description: "Aceite PIX, cartões e transferências bancárias"
    },
    {
      icon: Gift,
      title: "Recompensas Personalizadas",
      description: "Crie campanhas únicas para cada tipo de cliente"
    },
    {
      icon: Rocket,
      title: "Setup Rápido",
      description: "Configure em minutos e comece a vender hoje"
    },
    {
      icon: Award,
      title: "Suporte Premium",
      description: "Atendimento especializado 24/7 para sua empresa"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float animation-delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float animation-delay-500" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float animation-delay-2000" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
              Plataforma de Cashback Inteligente
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up">
              Transforme{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                  Compras
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-scale-in" />
              </span>{" "}
              em{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-pulse animation-delay-500">
                  Recompensas
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-full animate-scale-in animation-delay-500" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Una-se à revolução do cashback inteligente. Para empresas que querem fidelizar clientes e consumidores que querem economizar mais a cada compra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
              <Button size="xl" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Link to="/auth/register" className="flex items-center gap-2 relative z-10">
                  <Rocket className="w-5 h-5" />
                  Começar Grátis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button size="xl" variant="outline" className="border-2 hover:bg-accent/10 hover:border-primary transition-all duration-300 transform hover:scale-105">
                <Link to="/features" className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Ver Funcionalidades
                </Link>
              </Button>
            </div>

            {/* Interactive floating cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-up animation-delay-600">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="pt-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              <Target className="w-4 h-4 mr-2" />
              Funcionalidades
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Tudo que você precisa para{" "}
              <span className="text-primary">maximizar</span> suas recompensas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa plataforma oferece ferramentas avançadas para empresas e benefícios incríveis para consumidores.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up bg-background/80 backdrop-blur-sm" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher nossa <span className="text-accent">plataforma?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="group p-6 rounded-xl border bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              <Users className="w-4 h-4 mr-2" />
              Depoimentos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-accent">clientes</span> dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de empresas e consumidores já transformaram sua experiência com nosso sistema.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold shadow-lg">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-primary hover:text-white transition-colors" />
              <CarouselNext className="hover:bg-primary hover:text-white transition-colors" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float animation-delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float animation-delay-500" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Comece Hoje Mesmo
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pronto para <span className="text-yellow-300">revolucionar</span> seu negócio?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Junte-se a milhares de usuários que já estão economizando e ganhando mais com nosso sistema inteligente de cashback.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="xl" variant="secondary" className="group bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Link to="/auth/register" className="flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Criar Conta Grátis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                <Link to="/contact" className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Falar com Vendas
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-8 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Sem taxas escondidas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
