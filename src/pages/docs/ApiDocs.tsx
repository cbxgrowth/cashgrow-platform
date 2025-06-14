
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  Key, 
  Database,
  Webhook,
  Settings,
  ExternalLink,
  Copy,
  Play,
  Download,
  GitBranch
} from "lucide-react";

const ApiDocs = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/cashback/balance",
      description: "Consultar saldo de cashback do usuário",
      params: ["user_id"],
      response: "{ balance: number, currency: string }"
    },
    {
      method: "POST",
      endpoint: "/api/v1/transactions",
      description: "Registrar nova transação de cashback",
      params: ["amount", "user_id", "merchant_id"],
      response: "{ transaction_id: string, cashback_amount: number }"
    },
    {
      method: "GET",
      endpoint: "/api/v1/campaigns",
      description: "Listar campanhas ativas",
      params: ["limit", "offset"],
      response: "{ campaigns: Array, total: number }"
    },
    {
      method: "PUT",
      endpoint: "/api/v1/users/profile",
      description: "Atualizar perfil do usuário",
      params: ["user_id", "profile_data"],
      response: "{ success: boolean, updated_fields: Array }"
    }
  ];

  const sdks = [
    {
      language: "JavaScript",
      description: "SDK oficial para Node.js e navegadores",
      install: "npm install cbx-growth-sdk",
      version: "v2.1.0"
    },
    {
      language: "Python",
      description: "SDK oficial para Python 3.7+",
      install: "pip install cbx-growth-sdk",
      version: "v2.0.8"
    },
    {
      language: "PHP",
      description: "SDK oficial para PHP 7.4+",
      install: "composer require cbx/growth-sdk",
      version: "v1.9.2"
    },
    {
      language: "Ruby",
      description: "SDK oficial para Ruby 2.7+",
      install: "gem install cbx_growth_sdk",
      version: "v1.8.5"
    }
  ];

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Code className="w-4 h-4 mr-2" />
              Documentação da API
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Integre com a <span className="text-accent">API CBX Growth</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Documentação completa, SDKs oficiais e exemplos práticos para integrar 
              nossa plataforma de cashback em seus sistemas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Play className="mr-2 h-5 w-5" />
                Começar Agora
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Baixar Postman Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Visão Geral da API
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>REST API</CardTitle>
                <CardDescription>
                  API RESTful com endpoints intuitivos e documentação OpenAPI
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                  OAuth 2.0, API Keys e criptografia TLS 1.3 para máxima segurança
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Rate Limiting</CardTitle>
                <CardDescription>
                  1000 requisições/minuto para contas gratuitas, ilimitado para premium
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Endpoints Principais
          </h2>
          
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge className={
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }>
                        {endpoint.method}
                      </Badge>
                      <code className="text-lg font-mono">{endpoint.endpoint}</code>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(endpoint.endpoint, endpoint.endpoint)}
                    >
                      {copiedEndpoint === endpoint.endpoint ? 'Copiado!' : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <CardDescription className="text-base">
                    {endpoint.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Parâmetros:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {endpoint.params.map((param, idx) => (
                          <li key={idx}>• {param}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Resposta:</h4>
                      <code className="text-sm bg-muted p-2 rounded block">
                        {endpoint.response}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SDKs Oficiais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {sdk.language}
                  </CardTitle>
                  <CardDescription>{sdk.description}</CardDescription>
                  <Badge variant="secondary">{sdk.version}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Instalação:</p>
                    <code className="text-xs bg-muted p-2 rounded block">
                      {sdk.install}
                    </code>
                  </div>
                  <Button variant="outline" className="w-full">
                    <GitBranch className="mr-2 h-4 w-4" />
                    Ver no GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Início Rápido
          </h2>
          
          <Tabs defaultValue="auth" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="auth">Autenticação</TabsTrigger>
              <TabsTrigger value="transaction">Transação</TabsTrigger>
              <TabsTrigger value="webhook">Webhooks</TabsTrigger>
              <TabsTrigger value="testing">Testes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="auth" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Configurar Autenticação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.cbxgrowth.com/v1/cashback/balance?user_id=123`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transaction" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Registrar Transação</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`const transaction = await cbx.transactions.create({
  amount: 100.00,
  user_id: "user_123",
  merchant_id: "merchant_456",
  currency: "BRL"
});`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="webhook" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Webhook className="h-5 w-5" />
                    Configurar Webhooks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`{
  "event": "transaction.completed",
  "data": {
    "transaction_id": "txn_123",
    "cashback_amount": 5.00,
    "user_id": "user_123"
  }
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="testing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Ambiente de Testes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Use nossa sandbox para testar integrações sem afetar dados reais.
                  </p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`// URL da Sandbox
https://sandbox-api.cbxgrowth.com/v1/

// API Key de Teste
sk_test_123456789abcdef`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar a integração?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Crie sua conta gratuita e obtenha suas chaves da API em segundos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Criar Conta Grátis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Exemplos Completos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocs;
