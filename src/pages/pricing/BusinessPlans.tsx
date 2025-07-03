
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
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const BusinessPlans = () => {
  const plans = [
    {
      name: 'START',
      price: 'R$ 279',
      period: '/mês',
      setupPrice: 'R$ 1.999',
      originalSetupPrice: 'R$ 2.557',
      description: 'O jeito mais rápido e econômico de fidelizar seus clientes!',
      icon: Building2,
      features: [
        'Até 5.000 clientes cadastrados',
        'Integrações nativas',
        'Campanhas promocionais eficazes',
        'Suporte via Email',
        'Gatilhos Mentais',
        'Cashback ou Pontos',
        'Estratégia de Prêmios',
        '10 Créditos IA',
        'Implementação incluída'
      ],
      cta: 'Começar Teste Grátis',
      popular: false,
      color: 'border-gray-200',
      note: 'O Plano START não inclui API. Para integrações personalizadas com sistemas externos, opte pelo Plano Pro ou Growth.'
    },
    {
      name: 'PRO',
      price: 'R$ 399',
      period: '/mês',
      setupPrice: 'R$ 3.890',
      originalSetupPrice: 'R$ 4.917',
      description: 'Para empresas em crescimento que buscam a solução completa.',
      icon: TrendingUp,
      features: [
        'Processo completo de criação e desenvolvimento',
        'Estratégia única para seu nicho',
        'Configuração completa da plataforma',
        'Suporte total à API',
        'Até 25.000 clientes cadastrados',
        'Funcionalidades avançadas',
        '40 Créditos IA',
        'Mentoria incluída',
        'Primeira mensalidade incluída na implementação'
      ],
      cta: 'Escolher PRO',
      popular: true,
      color: 'border-blue-500',
      note: 'A implementação já inclui a primeira mensalidade e Mentoria.'
    },
    {
      name: 'GROWTH',
      price: 'R$ 1.849',
      period: '/mês',
      setupPrice: 'R$ 4.799',
      originalSetupPrice: 'R$ 6.615',
      description: 'Solução completa com automação via WhatsApp Oficial, aplicativos iOS e Android personalizados e mentoria.',
      icon: Crown,
      features: [
        'Até 100.000 clientes (expansível)',
        'Infraestrutura dedicada',
        'API completa',
        'Automação via WhatsApp Oficial',
        'Aplicativos iOS e Android personalizados',
        'Customização total',
        '100 Créditos IA',
        'Mentoria para implementação',
        'Solução adaptável ao seu negócio'
      ],
      cta: 'Falar com Vendas',
      popular: false,
      color: 'border-purple-500',
      note: 'Combina todos os recursos avançados para excelência no gerenciamento de programas de fidelidade.'
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
            Aumente a fidelização, otimize campanhas com IA e maximize o ROI com implementação completa incluída
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
                    plan.name === 'GROWTH' ? 'bg-purple-100' :
                    plan.name === 'PRO' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.name === 'GROWTH' ? 'text-purple-600' :
                      plan.name === 'PRO' ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-2xl">PLANO {plan.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  
                  {/* Setup Price */}
                  <div className="bg-muted/30 rounded-lg p-3 mt-4">
                    <p className="text-sm font-medium">Implementação:</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg font-bold text-green-600">{plan.setupPrice}</span>
                      <span className="text-sm text-muted-foreground line-through">{plan.originalSetupPrice}</span>
                    </div>
                    <p className="text-xs text-green-600">Economia na implementação!</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Principais Benefícios:</h4>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                {plan.note && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-orange-800">
                        <strong>Observação:</strong> {plan.note}
                      </p>
                    </div>
                  </div>
                )}
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                  {plan.name !== 'GROWTH' && <ArrowRight className="h-4 w-4 ml-2" />}
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
