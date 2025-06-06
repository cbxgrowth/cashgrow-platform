
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Target
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
      borderColor: "border-blue-200"
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
      borderColor: "border-purple-200"
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
      borderColor: "border-green-200"
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
      borderColor: "border-orange-200"
    }
  ];

  const businessBenefits = [
    {
      icon: Users,
      title: "Aumento de Engajamento",
      description: "Até 300% mais engajamento com programas gamificados",
      metric: "+300%"
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Retorno médio de 4x o investimento em 6 meses",
      metric: "4x ROI"
    },
    {
      icon: Target,
      title: "Retenção de Clientes",
      description: "Aumente a retenção em até 85% com cashback inteligente",
      metric: "+85%"
    },
    {
      icon: Brain,
      title: "Insights Preditivos",
      description: "IA que prevê comportamento com 95% de precisão",
      metric: "95%"
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Compliance total com LGPD, SOC2 e ISO 27001"
    },
    {
      icon: Building2,
      title: "Suporte Dedicado",
      description: "Account manager exclusivo e suporte 24/7"
    },
    {
      icon: CreditCard,
      title: "Pagamentos Flexíveis",
      description: "Múltiplas opções de pagamento e faturamento customizado"
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "99.9% uptime e resposta em menos de 100ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            Soluções para Empresas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Revolucione seu Negócio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Plataforma completa de cashback e gamificação para empresas que querem 
            aumentar vendas, engajamento e fidelidade dos clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-blue-100">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {benefit.metric}
                  </div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
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

      {/* Enterprise Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos Enterprise
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que sua empresa precisa para escalar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-purple-100">
                      <feature.icon className="h-8 w-8 text-purple-600" />
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
              <div className="grid md:grid-cols-3 gap-6 text-center">
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
                Agende uma demonstração personalizada e veja como podemos aumentar seus resultados
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Agendar Demonstração
                  </Button>
                </Link>
                <Link to="/pricing/business">
                  <Button variant="outline" size="lg">
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
