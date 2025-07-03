import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Zap, 
  Shield, 
  Puzzle, 
  Database, 
  Webhook,
  Settings,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Clock,
  Users,
  CreditCard
} from 'lucide-react';

const ApiPage = () => {
  const integrations = [
    {
      name: 'E-commerce',
      description: 'WooCommerce, Shopify, Magento',
      icon: Globe,
      status: 'Disponível'
    },
    {
      name: 'CRM',
      description: 'Salesforce, HubSpot, Pipedrive',
      icon: Users,
      status: 'Disponível'
    },
    {
      name: 'ERP',
      description: 'SAP, Oracle, Microsoft Dynamics',
      icon: Database,
      status: 'Disponível'
    },
    {
      name: 'Pagamentos',
      description: 'Stripe, PayPal, PagSeguro',
      icon: CreditCard,
      status: 'Disponível'
    }
  ];

  const features = [
    {
      icon: Code,
      title: 'API REST Completa',
      description: 'Documentação completa e endpoints bem estruturados',
      highlights: ['Documentação interativa', 'SDKs múltiplas linguagens', 'Rate limiting', 'Versionamento']
    },
    {
      icon: Webhook,
      title: 'Webhooks em Tempo Real',
      description: 'Receba notificações instantâneas de eventos',
      highlights: ['Eventos customizáveis', 'Retry automático', 'Assinatura flexível', 'Logs detalhados']
    },
    {
      icon: Shield,
      title: 'Segurança Enterprise',
      description: 'Autenticação robusta e criptografia avançada',
      highlights: ['OAuth 2.0', 'JWT tokens', 'Rate limiting', 'IP whitelisting']
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Respostas rápidas e alta disponibilidade',
      highlights: ['99.9% uptime', '< 100ms resposta', 'CDN global', 'Auto-scaling']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-background to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            <Code className="w-4 h-4 mr-2" />
            Integração API
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Integre em Minutos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Conecte nossa plataforma com seus sistemas existentes usando nossa API robusta e documentação completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Code className="mr-2 h-5 w-5" />
              Ver Documentação
            </Button>
            <Button variant="outline" size="lg">
              <Settings className="mr-2 h-5 w-5" />
              Testar API
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              API de Nível Enterprise
            </h2>
            <p className="text-xl text-muted-foreground">
              Robusta, segura e fácil de implementar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple-100">
                      <feature.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Integrações Prontas</h2>
            <p className="text-muted-foreground">Conecte com os principais sistemas do mercado</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-blue-100">
                      <integration.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    {integration.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">
                Implementação Simples
              </CardTitle>
              <CardDescription className="text-center">
                Veja como é fácil integrar nossa API em seu sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-500">// Exemplo de integração</div>
                <div className="mt-2">
                  <span className="text-blue-400">const</span> cbx = <span className="text-yellow-400">require</span>(<span className="text-red-400">'@cbx/sdk'</span>);
                </div>
                <div className="mt-2">
                  <span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> cbx.Client({'{'}
                </div>
                <div className="ml-4">
                  apiKey: <span className="text-red-400">'your-api-key'</span>,
                </div>
                <div className="ml-4">
                  environment: <span className="text-red-400">'production'</span>
                </div>
                <div>{'}'});</div>
                <div className="mt-4">
                  <span className="text-gray-500">// Criar transação de cashback</span>
                </div>
                <div className="mt-2">
                  <span className="text-blue-400">const</span> transaction = <span className="text-blue-400">await</span> client.transactions.create({'{'}
                </div>
                <div className="ml-4">
                  amount: <span className="text-yellow-400">100.00</span>,
                </div>
                <div className="ml-4">
                  clientId: <span className="text-red-400">'client-123'</span>,
                </div>
                <div className="ml-4">
                  cashbackRate: <span className="text-yellow-400">0.05</span>
                </div>
                <div>{'}'});</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <Puzzle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-4">
                Pronto para Integrar?
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                Nossa equipe técnica está pronta para ajudar você a implementar nossa API
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Clock className="mr-2 h-5 w-5" />
                  Começar Integração
                </Button>
                <Button variant="outline" size="lg">
                  <Lock className="mr-2 h-5 w-5" />
                  Falar com Suporte Técnico
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApiPage;
