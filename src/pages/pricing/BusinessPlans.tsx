
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  ArrowRight
} from 'lucide-react';

const BusinessPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 299',
      period: '/mês',
      description: 'Ideal para pequenas empresas',
      icon: Building2,
      features: [
        'Até 1.000 clientes ativos',
        'Dashboard básico',
        'Relatórios mensais',
        'Suporte por email',
        'API básica',
        'Campanhas simples'
      ],
      cta: 'Começar Teste Grátis',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Professional',
      price: 'R$ 599',
      period: '/mês',
      description: 'Para empresas em crescimento',
      icon: TrendingUp,
      features: [
        'Até 10.000 clientes ativos',
        'Dashboard avançado',
        'Relatórios em tempo real',
        'Suporte prioritário',
        'API completa',
        'Campanhas IA',
        'Integrações avançadas',
        'Análises preditivas',
        'White-label básico'
      ],
      cta: 'Escolher Professional',
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Solução completa para grandes empresas',
      icon: Crown,
      features: [
        'Clientes ilimitados',
        'Dashboard customizado',
        'Relatórios personalizados',
        'Gerente de conta dedicado',
        'API enterprise',
        'IA personalizada',
        'Integrações sob medida',
        'SLA garantido',
        'White-label completo',
        'Treinamento da equipe'
      ],
      cta: 'Falar com Vendas',
      popular: false,
      color: 'border-purple-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Campanhas Inteligentes',
      description: 'IA que cria campanhas personalizadas automaticamente'
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançado',
      description: 'Insights detalhados sobre performance e ROI'
    },
    {
      icon: Users,
      title: 'Gestão de Clientes',
      description: 'CRM integrado para fidelização e retenção'
    },
    {
      icon: Rocket,
      title: 'Integrações',
      description: 'Conecte com ERPs, e-commerce e outros sistemas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Building2 className="h-3 w-3 mr-1" />
            Planos Empresariais
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Impulsione seu Negócio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aumente a fidelização, otimize campanhas com IA e maximize o ROI dos seus investimentos em marketing
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.color} ${
                plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Recomendado
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full ${
                    plan.name === 'Enterprise' ? 'bg-purple-100' :
                    plan.name === 'Professional' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.name === 'Enterprise' ? 'text-purple-600' :
                      plan.name === 'Professional' ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.name !== 'Enterprise' && (
                    <p className="text-sm text-muted-foreground">30 dias grátis</p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                  {plan.name !== 'Enterprise' && <ArrowRight className="h-4 w-4 ml-2" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Recursos Poderosos para seu Negócio</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Pronto para Revolucionar seu Negócio?</h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se a mais de 10.000 empresas que já transformaram suas estratégias de fidelização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-primary">
              Agendar Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Começar Teste Grátis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlans;
