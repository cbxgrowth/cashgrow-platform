
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Book, Code, Zap, Shield, Globe, ArrowRight, ExternalLink, Copy, CheckCircle } from "lucide-react";

const Docs = () => {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/cashback/calculate",
      description: "Calcula o cashback para uma transação",
      params: ["amount", "store_id", "user_id"]
    },
    {
      method: "POST",
      endpoint: "/api/v1/transactions",
      description: "Registra uma nova transação",
      params: ["amount", "store_id", "user_id", "product_data"]
    },
    {
      method: "GET",
      endpoint: "/api/v1/user/balance",
      description: "Consulta saldo do usuário",
      params: ["user_id"]
    }
  ];

  const quickStart = [
    {
      step: 1,
      title: "Obtenha sua API Key",
      description: "Acesse o painel e gere sua chave de API",
      icon: Shield
    },
    {
      step: 2,
      title: "Configure Headers",
      description: "Adicione autenticação às suas requisições",
      icon: Code
    },
    {
      step: 3,
      title: "Faça sua primeira chamada",
      description: "Teste a API com nossa documentação interativa",
      icon: Zap
    }
  ];

  const sdks = [
    {
      name: "JavaScript/Node.js",
      description: "SDK oficial para aplicações web e Node.js",
      version: "v2.1.0",
      install: "npm install @cbxgrowth/sdk"
    },
    {
      name: "Python",
      description: "SDK para aplicações Python e Django",
      version: "v1.8.0",
      install: "pip install cbxgrowth-python"
    },
    {
      name: "PHP",
      description: "SDK para aplicações PHP e Laravel",
      version: "v1.5.0",
      install: "composer require cbxgrowth/php-sdk"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              <Book className="h-3 w-3 mr-1" />
              Documentação
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Documentação{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Técnica
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Tudo que você precisa para integrar nossa API de cashback em seu sistema. Guias, exemplos e referências completas.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto animate-fade-in-up animation-delay-400">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar na documentação..." 
                  className="pl-10 bg-background border-2 hover:border-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Quick Start */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Início Rápido
                  </CardTitle>
                  <CardDescription>
                    Comece a usar nossa API em poucos minutos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {quickStart.map((item) => (
                      <div key={item.step} className="text-center p-4 border rounded-lg hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                          {item.step}
                        </div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* API Reference */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Endpoints da API
                  </CardTitle>
                  <CardDescription>
                    Principais endpoints para integração
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Badge 
                            variant={endpoint.method === 'GET' ? 'default' : 'secondary'}
                            className="font-mono"
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm bg-muted px-2 py-1 rounded">
                            {endpoint.endpoint}
                          </code>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{endpoint.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param) => (
                          <Badge key={param} variant="outline" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Exemplo de Código</CardTitle>
                  <CardDescription>
                    Implementação básica em JavaScript
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg relative">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute top-2 right-2 text-gray-300 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="text-sm overflow-x-auto">
{`// Configuração inicial
const CBXGrowth = require('@cbxgrowth/sdk');

const client = new CBXGrowth({
  apiKey: 'sua-api-key-aqui',
  environment: 'production' // ou 'sandbox'
});

// Calcular cashback
async function calculateCashback(amount, storeId, userId) {
  try {
    const response = await client.cashback.calculate({
      amount: amount,
      store_id: storeId,
      user_id: userId
    });
    
    console.log('Cashback calculado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

// Registrar transação
async function createTransaction(transactionData) {
  try {
    const response = await client.transactions.create(transactionData);
    console.log('Transação criada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro:', error.message);
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* SDKs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    SDKs Oficiais
                  </CardTitle>
                  <CardDescription>
                    Bibliotecas oficiais para diferentes linguagens
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {sdks.map((sdk, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold mb-2">{sdk.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{sdk.description}</p>
                        <Badge variant="outline" className="mb-3">
                          {sdk.version}
                        </Badge>
                        <div className="bg-muted p-2 rounded text-sm font-mono">
                          {sdk.install}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Navigation */}
              <Card>
                <CardHeader>
                  <CardTitle>Navegação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="#getting-started" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    Começando
                  </Link>
                  <Link to="#authentication" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    Autenticação
                  </Link>
                  <Link to="#api-reference" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    Referência da API
                  </Link>
                  <Link to="#webhooks" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    Webhooks
                  </Link>
                  <Link to="#sdks" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    SDKs
                  </Link>
                  <Link to="#examples" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    Exemplos
                  </Link>
                  <Link to="#errors" className="block p-2 rounded hover:bg-muted/50 text-sm">
                    Códigos de Erro
                  </Link>
                </CardContent>
              </Card>

              {/* Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Status da API</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Operacional</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Todos os sistemas funcionando normalmente
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Status Page
                  </Button>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Precisa de Ajuda?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nossa equipe está pronta para ajudar com sua integração.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Link to="/contact">
                        Falar com Suporte
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Abrir Ticket
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
