import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, Shield, Sparkles, ArrowRight, Heart, Globe, Award, Zap, Brain, Handshake, Building2, Star } from "lucide-react";
const About: React.FC = () => {
  const values = [{
    icon: Heart,
    title: "Transparência",
    description: "Somos transparentes em todas as nossas operações, desde as taxas até o funcionamento do nosso algoritmo de cashback."
  }, {
    icon: Shield,
    title: "Segurança",
    description: "Priorizamos a segurança dos dados e transações, utilizando as melhores práticas de criptografia e proteção."
  }, {
    icon: Users,
    title: "Relacionamento",
    description: "Construímos relacionamentos duradouros com clientes e parceiros, baseados na confiança e benefício mútuo."
  }, {
    icon: Zap,
    title: "Inovação",
    description: "Estamos sempre na vanguarda da tecnologia, implementando soluções inovadoras para melhorar a experiência."
  }];
  const team = [{
    name: "Carlos Silva",
    role: "CEO & Fundador",
    description: "15 anos de experiência em fintech e programas de fidelidade",
    avatar: "CS"
  }, {
    name: "Ana Costa",
    role: "CTO",
    description: "Especialista em sistemas distribuídos e inteligência artificial",
    avatar: "AC"
  }, {
    name: "Roberto Lima",
    role: "Head de Produto",
    description: "Designer de experiência com foco em gamificação e engagement",
    avatar: "RL"
  }, {
    name: "Marina Santos",
    role: "Head de Partnerships",
    description: "Especialista em desenvolvimento de negócios e parcerias estratégicas",
    avatar: "MS"
  }];
  const milestones = [{
    year: "2024",
    title: "Fundação da CBX Growth",
    description: "Início da jornada com foco em cashback inteligente"
  }, {
    year: "2024",
    title: "Primeiros Parceiros",
    description: "100+ empresas se juntaram à nossa plataforma"
  }, {
    year: "2024",
    title: "10.000 Usuários",
    description: "Marco de 10 mil usuários ativos na plataforma"
  }, {
    year: "2025",
    title: "Expansão Nacional",
    description: "Planos de expansão para todo o território brasileiro"
  }];
  const stats = [{
    number: "10K+",
    label: "Usuários Ativos",
    icon: Users
  }, {
    number: "R$ 2M+",
    label: "Cashback Distribuído",
    icon: TrendingUp
  }, {
    number: "500+",
    label: "Empresas Parceiras",
    icon: Building2
  }, {
    number: "4.9/5",
    label: "Avaliação dos Usuários",
    icon: Star
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Nossa História
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Revolucionando o{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Futuro
              </span>{" "}
              do Cashback
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Nossa missão é transformar cada compra em uma oportunidade de economia, conectando empresas e consumidores através de um ecossistema inteligente de recompensas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={stat.label} className="text-center hover-scale border-0 shadow-lg bg-gradient-to-br from-background to-muted/30 animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    Nossa Missão
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Conectando Empresas e{" "}
                    <span className="text-primary">Consumidores</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Acreditamos que cada transação deve beneficiar ambas as partes. Nossa plataforma utiliza 
                    inteligência artificial e gamificação para criar experiências que geram valor real tanto 
                    para empresas quanto para consumidores.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Desenvolvemos tecnologia de ponta que transforma dados em insights acionáveis, 
                    permitindo que empresas ofereçam experiências personalizadas enquanto consumidores 
                    economizam de forma inteligente.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-xl shadow-md hover-scale">
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Para Empresas</h3>
                    <p className="text-muted-foreground text-sm">
                      Fidelização inteligente com insights em tempo real sobre comportamento do consumidor.
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-md hover-scale">
                    <Users className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Para Consumidores</h3>
                    <p className="text-muted-foreground text-sm">
                      Economia inteligente com recomendações personalizadas e recompensas gamificadas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-up animation-delay-200">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Visão Global</h3>
                          <p className="text-muted-foreground">Transformar o mercado brasileiro de cashback</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">40%</div>
                          <div className="text-sm text-muted-foreground">Aumento na retenção</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">25%</div>
                          <div className="text-sm text-muted-foreground">Crescimento no ticket médio</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Nossos Valores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que nos <span className="text-accent">Move</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos valores fundamentais guiam cada decisão e moldam nossa cultura organizacional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={value.title} className="text-center hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Nossa Jornada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              História de <span className="text-primary">Crescimento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desde nossa fundação, cada marco representa nosso compromisso com a inovação e excelência.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => <div key={milestone.year} className="flex gap-8 items-start animate-fade-in-up" style={{
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 hover-scale border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Nossa Equipe
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Líderes <span className="text-accent">Visionários</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma equipe experiente e apaixonada por tecnologia, dedicada a transformar o mercado de cashback.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <Card key={member.name} className="text-center hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <CardHeader>
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-xl font-bold mb-4">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Tecnologia
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Inovação em <span className="text-primary">Cada Linha de Código</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Utilizamos as mais avançadas tecnologias de inteligência artificial, machine learning e 
              arquitetura de microserviços para entregar uma experiência excepcional e escalável.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background p-6 rounded-xl shadow-lg hover-scale">
                <Brain className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Inteligência Artificial</h3>
                <p className="text-muted-foreground text-sm">
                  Algoritmos de ML para personalização e otimização de cashback em tempo real.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-lg hover-scale">
                <Shield className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Segurança Avançada</h3>
                <p className="text-muted-foreground text-sm">
                  Criptografia de ponta a ponta e conformidade com padrões internacionais.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-lg hover-scale">
                <Globe className="w-10 h-10 text-secondary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Arquitetura Escalável</h3>
                <p className="text-muted-foreground text-sm">
                  Microserviços em nuvem que suportam milhões de transações simultâneas.
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a nós nesta jornada de transformação do mercado de cashback. 
              Seja um cliente, parceiro ou colaborador - há um lugar para você em nossa história.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Jornada
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white hover:bg-white text-purple-800">
                <Link to="/contact">Falar Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;