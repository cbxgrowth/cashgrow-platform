
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
  Crown
} from "lucide-react";

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
    { number: "10K+", label: "Usuários Ativos", icon: Users },
    { number: "R$ 2M+", label: "Cashback Distribuído", icon: TrendingUp },
    { number: "500+", label: "Empresas Parceiras", icon: Shield },
    { number: "99.9%", label: "Uptime", icon: Zap }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "O sistema revolucionou nosso programa de fidelidade. Aumento de 40% na retenção de clientes!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Cliente",
      content: "Já economizei mais de R$ 500 este ano só com cashback. Recomendo para todos!",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Marketing",
      content: "Os insights são incríveis. Conseguimos segmentar melhor nossa base de clientes.",
      rating: 5,
      avatar: "AC"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Sparkles className="w-3 h-3 mr-1" />
              Plataforma de Cashback Inteligente
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
              Transforme{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Compras
              </span>{" "}
              em{" "}
              <span className="text-gradient bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Recompensas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Una-se à revolução do cashback inteligente. Para empresas que querem fidelizar clientes e consumidores que querem economizar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Button size="xl" className="group hover-scale bg-gradient-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Grátis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-2 hover:bg-accent/10">
                <Link to="/features">Ver Funcionalidades</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float animation-delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float animation-delay-500" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center hover-scale border-0 shadow-lg bg-gradient-to-br from-background to-muted/30 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Funcionalidades
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tudo que você precisa para{" "}
              <span className="text-primary">maximizar</span> suas recompensas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa plataforma oferece ferramentas avançadas para empresas e benefícios incríveis para consumidores.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover-scale border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="relative">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${feature.gradient} transition-opacity duration-300`} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-accent">clientes</span> dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de empresas e consumidores já transformaram sua experiência com nosso sistema.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de usuários que já estão economizando e ganhando mais com nosso sistema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Criar Conta Grátis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Falar com Vendas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
