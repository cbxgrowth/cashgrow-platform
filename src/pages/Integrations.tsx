
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Globe,
  Settings,
  Monitor,
  Package,
  ShoppingCart,
  CreditCard,
  Smartphone,
  MessageSquare,
  BarChart3,
  Database,
  Cloud,
  Zap,
  CheckCircle,
  ArrowRight,
  Code,
  Webhook,
  Lock,
  Clock
} from 'lucide-react';

const Integrations: React.FC = () => {
  const integrationCategories = [
    {
      icon: Settings,
      title: "Sistemas de Gestão",
      description: "ERPs, CRMs e sistemas administrativos",
      color: "purple",
      integrations: [
        { name: "SAP", description: "Integração completa com SAP ERP" },
        { name: "Oracle", description: "Conectividade com Oracle Database" },
        { name: "Microsoft Dynamics", description: "Sincronização com Dynamics 365" },
        { name: "TOTVS", description: "Integração nativa com Protheus" },
        { name: "Senior", description: "Conectividade com Senior X" },
        { name: "Sankhya", description: "Integração com Sankhya ERP" }
      ]
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Plataformas de loja virtual",
      color: "blue",
      integrations: [
        { name: "Shopify", description: "Integração oficial Shopify" },
        { name: "WooCommerce", description: "Plugin nativo WordPress" },
        { name: "Magento", description: "Extensão para Magento 2" },
        { name: "Vtex", description: "App oficial na Vtex Store" },
        { name: "Nuvemshop", description: "Integração com Nuvemshop" },
        { name: "Tray", description: "Conectividade com Tray Corp" }
      ]
    },
    {
      icon: Monitor,
      title: "Pontos de Venda (PDV)",
      description: "Sistemas de frente de loja",
      color: "green",
      integrations: [
        { name: "Stone", description: "Integração com maquininhas Stone" },
        { name: "PagSeguro", description: "Conectividade PagBank" },
        { name: "Cielo", description: "Integração com Cielo LIO" },
        { name: "Rede", description: "Conectividade com Rede Pay" },
        { name: "GetNet", description: "Integração GetNet Terminal" },
        { name: "Mercado Pago", description: "Point de venda Mercado Pago" }
      ]
    },
    {
      icon: MessageSquare,
      title: "Comunicação",
      description: "Canais de atendimento e marketing",
      color: "orange",
      integrations: [
        { name: "WhatsApp Business", description: "API oficial WhatsApp" },
        { name: "Telegram", description: "Bot Telegram integrado" },
        { name: "Email Marketing", description: "Mailchimp, RD Station, etc." },
        { name: "SMS", description: "Envio de SMS automático" },
        { name: "Push Notifications", description: "Notificações mobile" },
        { name: "Zendesk", description: "Integração com suporte" }
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Code,
      title: "API REST Completa",
      description: "Documentação completa e SDKs para principais linguagens"
    },
    {
      icon: Webhook,
      title: "Webhooks em Tempo Real",
      description: "Notificações automáticas para eventos importantes"
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description: "OAuth 2.0, HTTPS e criptografia de ponta a ponta"
    },
    {
      icon: Clock,
      title: "Sincronização Automática",
      description: "Dados sempre atualizados em tempo real"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600"
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
              <span className="text-primary">Integrações</span> Poderosas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Conecte o Bloom com todas as ferramentas que você já usa. 
              APIs nativas, webhooks e sincronização em tempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/auth/register">
                  <Zap className="h-5 w-5 mr-2" />
                  Começar Integração
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#documentacao">
                  <Code className="h-5 w-5 mr-2" />
                  Ver Documentação
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias de Integração</h2>
            <p className="text-xl text-muted-foreground">
              Conectamos com os principais sistemas do mercado
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${getColorClasses(category.color)}`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {category.integrations.map((integration, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{integration.name}</p>
                          <p className="text-xs text-muted-foreground">{integration.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Técnicos</h2>
            <p className="text-xl text-muted-foreground">
              Tecnologia de ponta para integrações robustas e seguras
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section id="documentacao" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentação da API</h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para integrar rapidamente
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Guia de Início Rápido</CardTitle>
                <p className="text-muted-foreground">Configure sua primeira integração em minutos</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Autenticação OAuth 2.0
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Primeiras chamadas da API
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Exemplos de código
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Referência da API</CardTitle>
                <p className="text-muted-foreground">Documentação completa de todos os endpoints</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    200+ endpoints documentados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Exemplos de requisição/resposta
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Códigos de erro detalhados
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Webhook className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>SDKs e Bibliotecas</CardTitle>
                <p className="text-muted-foreground">Bibliotecas prontas para principais linguagens</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    JavaScript/Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Python, PHP, Java
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Postman Collection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Integrar?</h2>
            <p className="text-xl text-muted-foreground">Vantagens das nossas integrações</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Setup Rápido</h3>
              <p className="text-muted-foreground text-sm">Integração completa em poucas horas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Automação Total</h3>
              <p className="text-muted-foreground text-sm">Sincronização automática de dados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Segurança Máxima</h3>
              <p className="text-muted-foreground text-sm">Protocolos de segurança avançados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Relatórios Unificados</h3>
              <p className="text-muted-foreground text-sm">Visão completa em um só lugar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Integrar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe técnica está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Falar com Especialista
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                <Link to="/auth/register">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Começar Agora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
