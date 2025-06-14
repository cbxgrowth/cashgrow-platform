
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Plug, 
  Code, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Layers,
  Settings,
  Monitor,
  ShoppingCart,
  CreditCard,
  Users,
  BarChart3,
  Mail,
  Webhook,
  Key,
  Download
} from "lucide-react";

const Integrations = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const integrationCategories = [
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'payment', label: 'Pagamentos', icon: CreditCard },
    { id: 'crm', label: 'CRM', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'marketing', label: 'Marketing', icon: Mail },
    { id: 'api', label: 'APIs', icon: Code }
  ];

  const integrations = {
    ecommerce: [
      {
        name: "Shopify",
        description: "Integração completa com lojas Shopify para cashback automático",
        logo: "🛍️",
        status: "Disponível",
        features: ["Cashback automático", "Sync de produtos", "Relatórios", "Multi-loja"],
        color: "text-green-600"
      },
      {
        name: "WooCommerce",
        description: "Plugin nativo para WordPress/WooCommerce",
        logo: "🔌",
        status: "Disponível",
        features: ["Plugin WordPress", "Configuração simples", "Cashback personalizado", "Analytics"],
        color: "text-green-600"
      },
      {
        name: "Magento",
        description: "Módulo para Magento 2 com recursos avançados",
        logo: "🎯",
        status: "Em breve",
        features: ["Módulo nativo", "Multi-store", "B2B support", "API completa"],
        color: "text-yellow-600"
      },
      {
        name: "VTEX",
        description: "App oficial para plataforma VTEX",
        logo: "⚡",
        status: "Disponível",
        features: ["App oficial", "Marketplace", "Configuração visual", "Suporte 24/7"],
        color: "text-green-600"
      }
    ],
    payment: [
      {
        name: "Stripe",
        description: "Integração com Stripe para processamento de cashback",
        logo: "💳",
        status: "Disponível",
        features: ["Webhooks", "Processamento instantâneo", "Multi-moeda", "Relatórios"],
        color: "text-green-600"
      },
      {
        name: "PayPal",
        description: "Cashback direto via PayPal",
        logo: "🅿️",
        status: "Disponível",
        features: ["Pagamento direto", "API robusta", "Segurança", "Global"],
        color: "text-green-600"
      },
      {
        name: "PagSeguro",
        description: "Integração nativa com PagSeguro",
        logo: "🏦",
        status: "Disponível",
        features: ["API completa", "Cashback instantâneo", "Suporte BR", "Multi-bandeiras"],
        color: "text-green-600"
      },
      {
        name: "Mercado Pago",
        description: "Cashback via Mercado Pago",
        logo: "💰",
        status: "Em desenvolvimento",
        features: ["SDK oficial", "Checkout transparente", "QR Code", "Relatórios"],
        color: "text-yellow-600"
      }
    ],
    crm: [
      {
        name: "Salesforce",
        description: "Sincronização completa com Salesforce CRM",
        logo: "☁️",
        status: "Disponível",
        features: ["Sync bidirecionais", "Custom objects", "Automation", "Reports"],
        color: "text-green-600"
      },
      {
        name: "HubSpot",
        description: "Integração com HubSpot para marketing e vendas",
        logo: "🎯",
        status: "Disponível",
        features: ["Lead scoring", "Email marketing", "Automation", "Analytics"],
        color: "text-green-600"
      },
      {
        name: "Pipedrive",
        description: "Gestão de pipeline com dados de cashback",
        logo: "📊",
        status: "Em breve",
        features: ["Pipeline management", "Custom fields", "Automation", "Reports"],
        color: "text-yellow-600"
      },
      {
        name: "RD Station",
        description: "Automação de marketing com cashback",
        logo: "🚀",
        status: "Disponível",
        features: ["Marketing automation", "Lead nurturing", "Segmentação", "ROI tracking"],
        color: "text-green-600"
      }
    ],
    analytics: [
      {
        name: "Google Analytics",
        description: "Tracking avançado de eventos de cashback",
        logo: "📈",
        status: "Disponível",
        features: ["Event tracking", "Custom dimensions", "Goals", "Attribution"],
        color: "text-green-600"
      },
      {
        name: "Mixpanel",
        description: "Analytics de produto e comportamento",
        logo: "🔍",
        status: "Disponível",
        features: ["User journey", "Cohort analysis", "A/B testing", "Real-time"],
        color: "text-green-600"
      },
      {
        name: "Amplitude",
        description: "Product analytics para otimização",
        logo: "📊",
        status: "Em breve",
        features: ["Behavioral analytics", "User segments", "Retention", "Predictions"],
        color: "text-yellow-600"
      },
      {
        name: "Power BI",
        description: "Dashboards empresariais personalizados",
        logo: "📋",
        status: "Disponível",
        features: ["Custom dashboards", "Real-time data", "Enterprise security", "Mobile"],
        color: "text-green-600"
      }
    ],
    marketing: [
      {
        name: "Mailchimp",
        description: "Email marketing com dados de cashback",
        logo: "📧",
        status: "Disponível",
        features: ["Segmentação avançada", "Automation", "A/B testing", "ROI tracking"],
        color: "text-green-600"
      },
      {
        name: "SendGrid",
        description: "Envio de emails transacionais",
        logo: "✉️",
        status: "Disponível",
        features: ["Transactional emails", "Templates", "Analytics", "Deliverability"],
        color: "text-green-600"
      },
      {
        name: "WhatsApp Business",
        description: "Notificações via WhatsApp",
        logo: "💬",
        status: "Em desenvolvimento",
        features: ["Business API", "Templates", "Automation", "Rich media"],
        color: "text-yellow-600"
      },
      {
        name: "Facebook Ads",
        description: "Otimização de campanhas com dados de cashback",
        logo: "📱",
        status: "Disponível",
        features: ["Conversion API", "Custom audiences", "Attribution", "Optimization"],
        color: "text-green-600"
      }
    ],
    api: [
      {
        name: "REST API",
        description: "API RESTful completa para integração",
        logo: "🔗",
        status: "Disponível",
        features: ["OpenAPI 3.0", "Rate limiting", "Webhooks", "SDKs"],
        color: "text-green-600"
      },
      {
        name: "GraphQL",
        description: "API GraphQL para consultas flexíveis",
        logo: "⚡",
        status: "Disponível",
        features: ["Type-safe", "Real-time", "Introspection", "Playground"],
        color: "text-green-600"
      },
      {
        name: "Webhooks",
        description: "Notificações em tempo real de eventos",
        logo: "🔔",
        status: "Disponível",
        features: ["Real-time", "Retry logic", "Signature verification", "Logs"],
        color: "text-green-600"
      },
      {
        name: "SDK JavaScript",
        description: "SDK oficial para JavaScript/Node.js",
        logo: "🟨",
        status: "Disponível",
        features: ["TypeScript", "Promise-based", "Tree-shaking", "Examples"],
        color: "text-green-600"
      }
    ]
  };

  const apiFeatures = [
    {
      icon: Key,
      title: "Autenticação Segura",
      description: "OAuth 2.0 e API Keys com rate limiting inteligente"
    },
    {
      icon: Webhook,
      title: "Webhooks Confiáveis",
      description: "Notificações em tempo real com retry automático"
    },
    {
      icon: Code,
      title: "SDKs Oficiais",
      description: "Bibliotecas para JavaScript, Python, PHP e mais"
    },
    {
      icon: Monitor,
      title: "Monitoramento",
      description: "Logs detalhados e métricas de performance em tempo real"
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Escolha sua Integração",
      description: "Selecione a plataforma que você usa"
    },
    {
      step: "2",
      title: "Configure as Credenciais",
      description: "Adicione suas chaves de API no dashboard"
    },
    {
      step: "3",
      title: "Teste a Conexão",
      description: "Valide a integração com nosso ambiente de teste"
    },
    {
      step: "4",
      title: "Ative em Produção",
      description: "Publique e comece a processar cashback"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Integrações
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Conecte-se com{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Qualquer
              </span>{" "}
              Plataforma
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Nossa plataforma se integra facilmente com as principais ferramentas do mercado. 
              Configure em minutos e comece a processar cashback automaticamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button size="xl" className="hover-scale">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Integração
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale">
                <Code className="w-4 h-4 mr-2" />
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Categorias de <span className="text-primary">Integrações</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a categoria que melhor se adequa à sua necessidade e veja todas as opções disponíveis.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
            {integrationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover-scale ${
                  activeTab === category.id
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Integration Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations[activeTab as keyof typeof integrations]?.map((integration, index) => (
              <Card key={integration.name} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{integration.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <Badge 
                        variant={integration.status === 'Disponível' ? 'default' : 'outline'}
                        className={`text-xs ${integration.color}`}
                      >
                        {integration.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {integration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {integration.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={integration.status === 'Disponível' ? 'default' : 'outline'} 
                    size="sm" 
                    className="w-full hover-scale"
                    disabled={integration.status !== 'Disponível'}
                  >
                    {integration.status === 'Disponível' ? 'Conectar' : 'Em breve'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              API Developer-Friendly
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              API Robusta para <span className="text-accent">Desenvolvedores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa API foi desenhada para ser simples, poderosa e confiável. Documentação completa e suporte técnico especializado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {apiFeatures.map((feature, index) => (
              <Card key={feature.title} className="text-center hover-scale border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Code Example */}
          <Card className="max-w-4xl mx-auto border-0 shadow-xl animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Exemplo de Integração
              </CardTitle>
              <CardDescription>
                Veja como é simples integrar nossa API no seu projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`// Processar cashback para uma transação
const cashback = await cbxGrowth.transactions.create({
  customerId: 'customer_123',
  amount: 100.00,
  currency: 'BRL',
  category: 'electronics',
  metadata: {
    orderId: 'order_456',
    store: 'my-store'
  }
});

console.log('Cashback processado:', cashback.amount);`}
                </pre>
              </div>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="sm" className="hover-scale">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar SDK
                </Button>
                <Button variant="outline" size="sm" className="hover-scale">
                  <Code className="w-4 h-4 mr-2" />
                  Ver Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como <span className="text-primary">Implementar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Em apenas 4 passos simples, você terá sua integração funcionando perfeitamente.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={step.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                      {step.step}
                    </div>
                    {index < implementationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Suporte Especializado
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Suporte Técnico <span className="text-primary">Dedicado</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossa equipe de desenvolvedores está pronta para ajudar você em cada etapa da integração. 
              Documentação completa, exemplos práticos e suporte em tempo real.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-lg hover-scale">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Documentação</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Guias completos, exemplos de código e referência da API</p>
                  <Button variant="outline" size="sm" className="hover-scale">Ver Docs</Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover-scale">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Comunidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Fórum ativo com desenvolvedores e especialistas</p>
                  <Button variant="outline" size="sm" className="hover-scale">Participar</Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover-scale">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <Headphones className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Suporte Direto</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Chat e email para suporte técnico personalizado</p>
                  <Button variant="outline" size="sm" className="hover-scale">Contatar</Button>
                </CardContent>
              </Card>
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
              Comece sua Integração Hoje
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a centenas de empresas que já transformaram seus negócios com nossas integrações.
              Configure em minutos, não em semanas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Integração
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Code className="w-4 h-4 mr-2" />
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
