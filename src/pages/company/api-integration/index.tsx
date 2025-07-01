
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  Zap, 
  Shield, 
  Key, 
  Database, 
  Globe, 
  Copy, 
  Eye, 
  EyeOff,
  CheckCircle,
  AlertCircle,
  Settings,
  Book
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const APIIntegration = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey] = useState('sk_live_1234567890abcdef...');
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Código copiado para a área de transferência.",
    });
  };

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/transactions',
      description: 'Criar nova transação',
      status: 'active'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/customers',
      description: 'Listar clientes',
      status: 'active'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/cashback/calculate',
      description: 'Calcular cashback',
      status: 'active'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/reports/sales',
      description: 'Relatórios de vendas',
      status: 'beta'
    }
  ];

  const integrationOptions = [
    {
      name: 'E-commerce Plugin',
      description: 'Plugin para WooCommerce, Shopify, Magento',
      icon: Globe,
      status: 'available',
      difficulty: 'Fácil'
    },
    {
      name: 'ERP Integration',
      description: 'Integração com SAP, Oracle, TOTVS',
      icon: Database,
      status: 'available',
      difficulty: 'Avançado'
    },
    {
      name: 'API RESTful',
      description: 'Integração completa via API REST',
      icon: Code2,
      status: 'available',
      difficulty: 'Intermediário'
    },
    {
      name: 'Webhook Events',
      description: 'Receba eventos em tempo real',
      icon: Zap,
      status: 'beta',
      difficulty: 'Fácil'
    }
  ];

  const codeExamples = {
    curl: `curl -X POST "https://api.cashback.com/v1/transactions" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "customer_123",
    "amount": 100.00,
    "currency": "BRL",
    "description": "Compra online"
  }'`,
    javascript: `const response = await fetch('https://api.cashback.com/v1/transactions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customer_id: 'customer_123',
    amount: 100.00,
    currency: 'BRL',
    description: 'Compra online'
  })
});

const data = await response.json();
console.log(data);`,
    python: `import requests

headers = {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
}

data = {
    'customer_id': 'customer_123',
    'amount': 100.00,
    'currency': 'BRL',
    'description': 'Compra online'
}

response = requests.post(
    'https://api.cashback.com/v1/transactions',
    headers=headers,
    json=data
)

print(response.json())`
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            Integração API
          </h1>
          <p className="text-muted-foreground">Conecte seus sistemas com nossa API poderosa</p>
        </div>
        <Button className="bg-gradient-primary">
          <Book className="mr-2 h-4 w-4" />
          Documentação
        </Button>
      </div>

      {/* API Status */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Status da API
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Operacional</div>
            <p className="text-xs text-muted-foreground">99.9% uptime</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Requisições/mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.7K</div>
            <p className="text-xs text-green-600">+18% vs mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tempo Resposta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127ms</div>
            <p className="text-xs text-blue-600">Média global</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Exemplos</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Opções de Integração</CardTitle>
                <CardDescription>Escolha a melhor forma de integrar seu sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {integrationOptions.map((option, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <option.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{option.name}</h4>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={option.status === 'available' ? 'default' : 'secondary'}>
                          {option.status === 'available' ? 'Disponível' : 'Beta'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{option.difficulty}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Segurança & Autenticação
                </CardTitle>
                <CardDescription>Suas credenciais de acesso à API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="api-key">Chave da API</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      id="api-key"
                      type={showApiKey ? "text" : "password"}
                      value={apiKey}
                      readOnly
                      className="font-mono"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(apiKey)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Recursos de Segurança</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      HTTPS/TLS 1.3
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      Rate Limiting
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      IP Whitelist
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      Webhook Signing
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Endpoints Disponíveis</CardTitle>
              <CardDescription>Lista completa de endpoints da nossa API</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant={endpoint.method === 'GET' ? 'outline' : 'default'}>
                        {endpoint.method}
                      </Badge>
                      <code className="font-mono text-sm">{endpoint.endpoint}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                      <Badge variant={endpoint.status === 'active' ? 'default' : 'secondary'}>
                        {endpoint.status === 'active' ? 'Ativo' : 'Beta'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Exemplos de Código</CardTitle>
              <CardDescription>Veja como integrar em diferentes linguagens</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(code)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configurações da API
                </CardTitle>
                <CardDescription>Personalize o comportamento da API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="rate-limit">Rate Limit (req/min)</Label>
                  <Input id="rate-limit" type="number" defaultValue="1000" />
                </div>
                <div>
                  <Label htmlFor="webhook-url">URL do Webhook</Label>
                  <Input id="webhook-url" placeholder="https://seu-site.com/webhook" />
                </div>
                <div>
                  <Label htmlFor="ip-whitelist">IPs Permitidos</Label>
                  <Input id="ip-whitelist" placeholder="192.168.1.1, 10.0.0.1" />
                </div>
                <Button>Salvar Configurações</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logs da API</CardTitle>
                <CardDescription>Últimas requisições à API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between p-2 bg-green-50 rounded">
                    <span>POST /api/v1/transactions</span>
                    <span className="text-green-600">200 OK</span>
                  </div>
                  <div className="flex justify-between p-2 bg-green-50 rounded">
                    <span>GET /api/v1/customers</span>
                    <span className="text-green-600">200 OK</span>
                  </div>
                  <div className="flex justify-between p-2 bg-yellow-50 rounded">
                    <span>POST /api/v1/cashback/calculate</span>
                    <span className="text-yellow-600">429 Rate Limited</span>
                  </div>
                  <div className="flex justify-between p-2 bg-green-50 rounded">
                    <span>GET /api/v1/reports/sales</span>
                    <span className="text-green-600">200 OK</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default APIIntegration;
