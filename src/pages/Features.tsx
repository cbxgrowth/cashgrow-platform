
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Brain,
  Globe,
  Target,
  Shield,
  Settings,
  MessageSquare,
  BarChart3,
  Crown,
  Zap,
  Users,
  Gift,
  Bell,
  Calendar,
  CreditCard,
  Star,
  Megaphone,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Aplicativo Nativo",
      description: "Apps iOS e Android totalmente personalizados com sua marca",
      details: [
        "Design personalizado com suas cores e logo",
        "Notificações push inteligentes",
        "Experiência nativa otimizada",
        "App Store e Google Play prontos"
      ],
      color: "blue"
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "IA avançada para campanhas e recomendações personalizadas",
      details: [
        "Recomendações baseadas em comportamento",
        "Campanhas automáticas otimizadas",
        "Previsão de churn de clientes",
        "Análise preditiva de vendas"
      ],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Integrações Nativas",
      description: "Conecte com ERPs, e-commerce e sistemas de PDV",
      details: [
        "APIs REST e webhooks",
        "Integrações pré-construídas",
        "Sincronização em tempo real",
        "Suporte técnico especializado"
      ],
      color: "green"
    },
    {
      icon: Target,
      title: "Missões Gamificadas",
      description: "Sistema de missões e desafios para engajar clientes",
      details: [
        "Missões diárias, semanais e mensais",
        "Sistema de conquistas e badges",
        "Rankings e competições",
        "Recompensas progressivas"
      ],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Máxima proteção de dados e transações",
      details: [
        "Criptografia de ponta a ponta",
        "Conformidade com LGPD",
        "Autenticação multifator",
        "Monitoramento 24/7"
      ],
      color: "red"
    },
    {
      icon: Settings,
      title: "Customização Total",
      description: "Personalize cada aspecto do seu programa",
      details: [
        "Regras de cashback flexíveis",
        "Interface administrativa intuitiva",
        "Fluxos de trabalho personalizados",
        "Configurações avançadas"
      ],
      color: "indigo"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      description: "Comunicação direta via WhatsApp oficial",
      details: [
        "API oficial do WhatsApp",
        "Mensagens automáticas",
        "Suporte ao cliente integrado",
        "Campanhas via WhatsApp"
      ],
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançados",
      description: "Relatórios e insights detalhados",
      details: [
        "Dashboard em tempo real",
        "Relatórios personalizáveis",
        "Métricas de performance",
        "Exportação de dados"
      ],
      color: "blue"
    },
    {
      icon: Crown,
      title: "Clube VIP",
      description: "Programa de fidelidade premium",
      details: [
        "Níveis de fidelidade automáticos",
        "Benefícios exclusivos por nível",
        "Cashback diferenciado",
        "Acesso antecipado a promoções"
      ],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Funcionalidades <span className="text-primary">Completas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra todas as ferramentas e recursos que fazem do Bloom a plataforma 
              de cashback mais completa do mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/auth/register">
                  <Zap className="h-5 w-5 mr-2" />
                  Começar Gratuitamente
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/precos">
                  Ver Planos e Preços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${getColorClasses(feature.color)}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Escolher o Bloom?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vantagens que fazem a diferença para seu negócio
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">+23% em Vendas</h3>
              <p className="text-muted-foreground text-sm">Aumento médio nas vendas dos nossos clientes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">85% Retenção</h3>
              <p className="text-muted-foreground text-sm">Taxa de retenção de clientes fidelizados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24h Setup</h3>
              <p className="text-muted-foreground text-sm">Implementação rápida e sem complicações</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4.9/5 Avaliação</h3>
              <p className="text-muted-foreground text-sm">Satisfação dos nossos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Experimentar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Comece hoje mesmo e veja o impacto em seus resultados
            </p>
            <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
              <Link to="/auth/register">
                Criar Conta Gratuitamente
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
