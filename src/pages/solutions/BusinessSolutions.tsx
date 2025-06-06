
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  Rocket, 
  Puzzle, 
  Star, 
  Users, 
  Shield, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  CreditCard,
  Brain,
  Target,
  Clock,
  Globe,
  LineChart,
  Megaphone,
  Settings,
  Database,
  Code,
  Headphones,
  Award,
  DollarSign,
  Activity,
  Layers,
  PieChart,
  Workflow,
  CalendarIcon
} from "lucide-react";
import { Link } from 'react-router-dom';

const BusinessSolutions = () => {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Dashboard Empresarial",
      description: "Gerencie campanhas e analise performance em tempo real",
      features: [
        "Analytics em tempo real",
        "Relatórios customizáveis",
        "KPIs de performance",
        "Métricas de ROI detalhadas"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      stats: { percentage: "99.9%", label: "Uptime garantido" }
    },
    {
      icon: Rocket,
      title: "Campanhas IA",
      description: "Crie campanhas inteligentes automatizadas com IA",
      features: [
        "Segmentação automática",
        "Otimização de ofertas",
        "Predição de comportamento",
        "A/B testing automático"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      stats: { percentage: "85%", label: "Redução no CAC" }
    },
    {
      icon: Puzzle,
      title: "Integrações API",
      description: "Conecte com seus sistemas existentes facilmente",
      features: [
        "API REST completa",
        "Webhooks em tempo real",
        "SDKs para múltiplas linguagens",
        "Documentação técnica completa"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      stats: { percentage: "50+", label: "Integrações prontas" }
    },
    {
      icon: Star,
      title: "Análises Avançadas",
      description: "Relatórios detalhados e insights em tempo real",
      features: [
        "Customer journey mapping",
        "Análise de cohort",
        "Predição de churn",
        "Lifetime value (LTV)"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      stats: { percentage: "95%", label: "Precisão preditiva" }
    }
  ];

  const businessBenefits = [
    {
      icon: Users,
      title: "Aumento de Engajamento",
      description: "Até 300% mais engajamento com programas gamificados",
      metric: "+300%",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Retorno médio de 4x o investimento em 6 meses",
      metric: "4x ROI",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Retenção de Clientes",
      description: "Aumente a retenção em até 85% com cashback inteligente",
      metric: "+85%",
      color: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Insights Preditivos",
      description: "IA que prevê comportamento com 95% de precisão",
      metric: "95%",
      color: "text-orange-600"
    }
  ];

  const clientSuccess = [
    {
      company: "TechMart",
      industry: "E-commerce",
      results: "+450% vendas",
      description: "Implementação de cashback gamificado resultou em crescimento explosivo",
      logo: "🛒",
      stats: { revenue: "+450%", retention: "+78%", nps: "92" }
    },
    {
      company: "FashionHub",
      industry: "Moda",
      results: "+320% engajamento",
      description: "Missões personalizadas aumentaram frequência de compras",
      logo: "👗",
      stats: { revenue: "+280%", retention: "+65%", nps: "89" }
    },
    {
      company: "FoodChain",
      industry: "Alimentação",
      results: "+200% fidelidade",
      description: "Programa VIP revolucionou relacionamento com clientes",
      logo: "🍕",
      stats: { revenue: "+200%", retention: "+90%", nps: "94" }
    }
  ];

  const platformFeatures = [
    {
      category: "Analytics & BI",
      icon: PieChart,
      features: [
        "Dashboards customizáveis",
        "Relatórios automatizados",
        "Análise de cohort",
        "Previsão de churn"
      ]
    },
    {
      category: "Automação IA",
      icon: Brain,
      features: [
        "Segmentação inteligente",
        "Otimização de campanhas",
        "Recomendações personalizadas",
        "Predição de comportamento"
      ]
    },
    {
      category: "Integrações",
      icon: Workflow,
      features: [
        "E-commerce platforms",
        "CRM systems",
        "Payment gateways",
        "Marketing tools"
      ]
    },
    {
      category: "Segurança",
      icon: Shield,
      features: [
        "LGPD compliance",
        "ISO 27001",
        "SOC 2 Type II",
        "Criptografia 256-bit"
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Compliance total com LGPD, SOC2 e ISO 27001",
      highlight: "99.9% Uptime"
    },
    {
      icon: Building2,
      title: "Suporte Dedicado",
      description: "Account manager exclusivo e suporte 24/7",
      highlight: "SLA garantido"
    },
    {
      icon: CreditCard,
      title: "Pagamentos Flexíveis",
      description: "Múltiplas opções de pagamento e faturamento customizado",
      highlight: "NET 30"
    },
    {
      icon: Code,
      title: "API Completa",
      description: "SDK em 8 linguagens e documentação interativa",
      highlight: "GraphQL & REST"
    },
    {
      icon: Database,
      title: "Data Warehouse",
      description: "Armazenamento e processamento de big data em tempo real",
      highlight: "Petabyte scale"
    },
    {
      icon: Headphones,
      title: "Onboarding Premium",
      description: "Implementação guiada com especialistas certificados",
      highlight: "30 dias grátis"
    }
  ];

  const pricingTiers = [
    {
      name: "Startup",
      price: "R$ 199",
      period: "/mês",
      description: "Perfeito para empresas em crescimento",
      features: [
        "Até 10K transações/mês",
        "Dashboard básico",
        "API essencial",
        "Suporte por email"
      ],
      highlight: false
    },
    {
      name: "Business",
      price: "R$ 699",
      period: "/mês",
      description: "Para empresas estabelecidas",
      features: [
        "Até 100K transações/mês",
        "IA e automação",
        "Integrações premium",
        "Suporte prioritário"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Soluções sob medida",
      features: [
        "Transações ilimitadas",
        "White label",
        "Account manager",
        "SLA personalizado"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            <Building2 className="w-4 h-4 mr-2" />
            Soluções para Empresas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Revolucione seu Negócio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Plataforma completa de cashback e gamificação para empresas que querem 
            aumentar vendas, engajamento e fidelidade dos clientes com tecnologia de IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth/register">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform">
                Demonstração Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing/business">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Ver Planos Enterprise
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>LGPD Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o impacto real em empresas como a sua
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-blue-100">
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                    {benefit.metric}
                  </div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          {/* Client Success Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            {clientSuccess.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{client.logo}</div>
                    <div>
                      <CardTitle className="text-xl">{client.company}</CardTitle>
                      <Badge variant="secondary">{client.industry}</Badge>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {client.results}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{client.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-bold text-green-600">{client.stats.revenue}</div>
                      <div className="text-xs text-muted-foreground">Receita</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">{client.stats.retention}</div>
                      <div className="text-xs text-muted-foreground">Retenção</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600">{client.stats.nps}</div>
                      <div className="text-xs text-muted-foreground">NPS</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades Enterprise
            </h2>
            <p className="text-xl text-muted-foreground">
              Tecnologia de ponta para empresas que pensam grande
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
                    <Progress 
                      value={feature.stats.percentage.includes('%') ? parseInt(feature.stats.percentage) : 80} 
                      className="mt-2" 
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plataforma Completa
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa em uma única solução
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos Enterprise
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que sua empresa precisa para escalar globalmente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 relative">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-purple-100">
                      <feature.icon className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos Enterprise
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para o tamanho da sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${tier.highlight ? 'border-primary scale-105 shadow-lg' : ''}`}>
                {tier.highlight && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {tier.price}<span className="text-base font-normal text-muted-foreground">{tier.period}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.highlight ? 'bg-primary' : ''}`}
                    variant={tier.highlight ? 'default' : 'outline'}
                  >
                    {tier.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Integração Simples e Rápida
              </CardTitle>
              <CardDescription className="text-blue-100 text-lg mb-8">
                Configure sua plataforma em menos de 24 horas com nossa equipe especializada
              </CardDescription>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">24h</div>
                  <div className="text-blue-100">Setup Completo</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Integrações Prontas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">Uptime Garantido</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Suporte Premium</div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Pronto para Transformar seu Negócio?
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                Agende uma demonstração personalizada e veja como podemos aumentar seus resultados em até 400%
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Agendar Demonstração
                  </Button>
                </Link>
                <Link to="/pricing/business">
                  <Button variant="outline" size="lg">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Ver Planos e Preços
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

export default BusinessSolutions;
