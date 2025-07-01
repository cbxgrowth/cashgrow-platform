
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Book, 
  Search, 
  Code2, 
  Zap, 
  Shield, 
  Users,
  DollarSign,
  Smartphone,
  Globe,
  ArrowRight,
  ExternalLink,
  Copy,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Código copiado!",
      description: "O código foi copiado para sua área de transferência.",
    });
  };

  const quickStart = [
    {
      title: 'Cadastro e Configuração',
      description: 'Configure sua conta e comece a usar',
      icon: Users,
      time: '5 min',
      steps: ['Criar conta', 'Verificar email', 'Configurar perfil']
    },
    {
      title: 'Primeira Integração',
      description: 'Conecte sua loja em minutos',
      icon: Zap,
      time: '10 min',
      steps: ['Obter API key', 'Configurar webhook', 'Testar integração']
    },
    {
      title: 'Configurar Cashback',
      description: 'Defina suas regras de cashback',
      icon: DollarSign,
      time: '15 min',
      steps: ['Criar regras', 'Definir percentuais', 'Ativar sistema']
    }
  ];

  const sections = [
    {
      id: 'getting-started',
      title: 'Começando',
      description: 'Tudo que você precisa para começar',
      icon: Book,
      articles: [
        'Visão Geral da Plataforma',
        'Criando sua Primeira Conta',
        'Configurações Iniciais',
        'Primeiros Passos'
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      description: 'Documentação completa da API',
      icon: Code2,
      articles: [
        'Autenticação',
        'Endpoints de Transações',
        'Webhooks',
        'Rate Limiting',
        'Códigos de Erro'
      ]
    },
    {
      id: 'integrations',
      title: 'Integrações',
      description: 'Conecte com suas ferramentas',
      icon: Globe,
      articles: [
        'WooCommerce Plugin',
        'Shopify App',
        'Magento Extension',
        'API RESTful',
        'Webhook Configuration'
      ]
    },
    {
      id: 'mobile',
      title: 'SDK Mobile',
      description: 'SDKs para iOS e Android',
      icon: Smartphone,
      articles: [
        'iOS SDK Setup',
        'Android SDK Setup',
        'React Native',
        'Flutter Plugin',
        'Mobile Webhooks'
      ]
    },
    {
      id: 'security',
      title: 'Segurança',
      description: 'Boas práticas de segurança',
      icon: Shield,
      articles: [
        'Autenticação Segura',
        'Webhook Signing',
        'IP Whitelisting',
        'SSL/TLS Configuration',
        'Compliance'
      ]
    }
  ];

  const codeExamples = {
    transaction: `// Criar nova transação
const transaction = await fetch('/api/v1/transactions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customer_id: 'customer_123',
    amount: 100.00,
    currency: 'BRL',
    description: 'Compra online'
  })
});

const result = await transaction.json();
console.log(result);`,

    webhook: `// Configurar webhook
const webhook = {
  url: 'https://seu-site.com/webhook',
  events: ['transaction.created', 'cashback.paid'],
  secret: 'webhook_secret_key'
};

const response = await fetch('/api/v1/webhooks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(webhook)
});`,

    cashback: `// Calcular cashback
const cashback = await fetch('/api/v1/cashback/calculate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customer_id: 'customer_123',
    amount: 250.00,
    category: 'eletronicos'
  })
});

const result = await cashback.json();
// { cashback_amount: 12.50, percentage: 5.0 }`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Documentação
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guias, tutoriais e referências para integrar nossa plataforma de cashback
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar na documentação..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="quickstart">Início Rápido</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="examples">Exemplos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Quick Start Cards */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Comece Agora</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {quickStart.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline">{item.time}</Badge>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {item.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {step}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full">
                        Começar
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Documentation Sections */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Seções da Documentação</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((section) => (
                  <Card key={section.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <section.icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </div>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {section.articles.map((article, index) => (
                          <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer">
                            <span className="text-sm">{article}</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="quickstart" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Guia de Início Rápido</CardTitle>
                <CardDescription>Configure sua integração em 3 passos simples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Obtenha sua API Key</h3>
                      <p className="text-muted-foreground mb-3">
                        Após criar sua conta, acesse o painel de desenvolvedores para gerar sua chave de API.
                      </p>
                      <Button variant="outline">Ir para Dashboard</Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Configure o Webhook</h3>
                      <p className="text-muted-foreground mb-3">
                        Configure uma URL para receber notificações em tempo real sobre transações.
                      </p>
                      <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                        POST /api/v1/webhooks<br />
                        {`{ "url": "https://seu-site.com/webhook" }`}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Primeira Transação</h3>
                      <p className="text-muted-foreground mb-3">
                        Teste sua integração criando uma transação de exemplo.
                      </p>
                      <Button>Ver Exemplo Completo</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Endpoints Principais</CardTitle>
                  <CardDescription>URLs e métodos mais utilizados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge>POST</Badge>
                        <code className="text-sm">/api/v1/transactions</code>
                      </div>
                      <p className="text-xs text-muted-foreground">Criar nova transação</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">GET</Badge>
                        <code className="text-sm">/api/v1/customers</code>
                      </div>
                      <p className="text-xs text-muted-foreground">Listar clientes</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge>POST</Badge>
                        <code className="text-sm">/api/v1/cashback/calculate</code>
                      </div>
                      <p className="text-xs text-muted-foreground">Calcular cashback</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status da API</CardTitle>
                  <CardDescription>Monitoramento em tempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Status Geral</span>
                      <Badge className="bg-green-100 text-green-700">Operacional</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uptime</span>
                      <span className="font-bold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tempo de Resposta</span>
                      <span className="font-bold">127ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rate Limit</span>
                      <span className="font-bold">1000/min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-8">
            <div className="space-y-6">
              {Object.entries(codeExamples).map(([key, code]) => (
                <Card key={key}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="capitalize">
                        {key === 'transaction' ? 'Criar Transação' : 
                         key === 'webhook' ? 'Configurar Webhook' : 'Calcular Cashback'}
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(code)}
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copiar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Docs;
