
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Key, Zap, Shield, Globe, Copy, Check, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const CompanyAPIIntegration: React.FC = () => {
  const { toast } = useToast();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [apiKey] = useState("sk_test_1234567890abcdef1234567890abcdef");

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(type);
    toast({
      title: "Copiado!",
      description: `${type} copiado para a área de transferência`,
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/transactions",
      description: "Listar todas as transações",
      params: "page, limit, status"
    },
    {
      method: "POST", 
      endpoint: "/api/v1/transactions",
      description: "Criar nova transação",
      params: "client_id, amount, description"
    },
    {
      method: "GET",
      endpoint: "/api/v1/clients",
      description: "Listar clientes",
      params: "page, limit, search"
    },
    {
      method: "POST",
      endpoint: "/api/v1/clients",
      description: "Criar novo cliente",
      params: "name, email, cpf, phone"
    },
    {
      method: "GET",
      endpoint: "/api/v1/products",
      description: "Listar produtos",
      params: "category, active"
    },
    {
      method: "GET",
      endpoint: "/api/v1/analytics",
      description: "Dados de analytics",
      params: "period, metrics"
    }
  ];

  const webhookEvents = [
    { event: "transaction.created", description: "Nova transação criada" },
    { event: "transaction.updated", description: "Transação atualizada" },
    { event: "client.created", description: "Novo cliente cadastrado" },
    { event: "client.updated", description: "Cliente atualizado" },
    { event: "product.created", description: "Produto criado" },
    { event: "cashback.processed", description: "Cashback processado" }
  ];

  const codeExamples = {
    javascript: `// Exemplo de integração com JavaScript
const apiKey = 'sk_test_your_api_key';
const baseURL = 'https://api.cashback.com/v1';

// Criar uma nova transação
const createTransaction = async (transactionData) => {
  const response = await fetch(\`\${baseURL}/transactions\`, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  });
  
  return response.json();
};

// Listar transações
const getTransactions = async () => {
  const response = await fetch(\`\${baseURL}/transactions\`, {
    headers: {
      'Authorization': \`Bearer \${apiKey}\`
    }
  });
  
  return response.json();
};`,
    python: `# Exemplo de integração com Python
import requests

API_KEY = 'sk_test_your_api_key'
BASE_URL = 'https://api.cashback.com/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Criar uma nova transação
def create_transaction(transaction_data):
    response = requests.post(
        f'{BASE_URL}/transactions',
        headers=headers,
        json=transaction_data
    )
    return response.json()

# Listar transações
def get_transactions():
    response = requests.get(
        f'{BASE_URL}/transactions',
        headers=headers
    )
    return response.json()`,
    curl: `# Exemplo com cURL

# Criar nova transação
curl -X POST https://api.cashback.com/v1/transactions \\
  -H "Authorization: Bearer sk_test_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "client_123",
    "amount": 100.00,
    "description": "Compra de produto"
  }'

# Listar transações
curl -X GET https://api.cashback.com/v1/transactions \\
  -H "Authorization: Bearer sk_test_your_api_key"`
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API & Integrações</h1>
          <p className="text-muted-foreground">
            Integre nosso sistema com suas aplicações
          </p>
        </div>
        <Button>
          <ExternalLink className="mr-2 h-4 w-4" />
          Documentação Completa
        </Button>
      </div>

      <Tabs defaultValue="keys" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="keys">Chaves API</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="examples">Exemplos</TabsTrigger>
          <TabsTrigger value="testing">Testes</TabsTrigger>
        </TabsList>

        <TabsContent value="keys" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Chaves de API
                </CardTitle>
                <CardDescription>
                  Gerencie suas chaves de acesso à API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Chave de Teste</Label>
                  <div className="flex gap-2">
                    <Input 
                      value={apiKey}
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => copyToClipboard(apiKey, "Chave de Teste")}
                    >
                      {copiedKey === "Chave de Teste" ? 
                        <Check className="h-4 w-4" /> : 
                        <Copy className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Use esta chave para testes e desenvolvimento
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Chave de Produção</Label>
                  <div className="flex gap-2">
                    <Input 
                      value="sk_live_••••••••••••••••••••••••••••••••"
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => copyToClipboard("sk_live_production_key", "Chave de Produção")}
                    >
                      {copiedKey === "Chave de Produção" ? 
                        <Check className="h-4 w-4" /> : 
                        <Copy className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Chave para ambiente de produção (oculta por segurança)
                  </p>
                </div>

                <Button className="w-full">
                  Gerar Nova Chave
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Configurações de Segurança
                </CardTitle>
                <CardDescription>
                  Configure as opções de segurança da API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>IPs Permitidos</Label>
                  <Textarea 
                    placeholder="192.168.1.1&#10;203.0.113.0/24"
                    className="font-mono text-sm"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Lista de IPs ou ranges permitidos (um por linha)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Rate Limiting</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Input placeholder="1000" />
                      <p className="text-xs text-muted-foreground mt-1">Requests/hora</p>
                    </div>
                    <div>
                      <Input placeholder="100" />
                      <p className="text-xs text-muted-foreground mt-1">Requests/minuto</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  Salvar Configurações
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Endpoints Disponíveis</CardTitle>
              <CardDescription>
                Lista completa de endpoints da API REST
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={
                          endpoint.method === 'GET' ? 'secondary' :
                          endpoint.method === 'POST' ? 'default' :
                          endpoint.method === 'PUT' ? 'outline' : 'destructive'
                        }>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {endpoint.endpoint}
                        </code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {endpoint.description}
                      </p>
                      {endpoint.params && (
                        <p className="text-xs text-muted-foreground">
                          Parâmetros: {endpoint.params}
                        </p>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      Testar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Configurar Webhooks
                </CardTitle>
                <CardDescription>
                  Receba notificações em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>URL do Webhook</Label>
                  <Input placeholder="https://seu-site.com/webhook" />
                </div>

                <div className="space-y-2">
                  <Label>Eventos</Label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {webhookEvents.map((webhook, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input type="checkbox" id={`webhook-${index}`} />
                        <label htmlFor={`webhook-${index}`} className="text-sm">
                          <code className="bg-muted px-1 rounded text-xs">
                            {webhook.event}
                          </code>
                          <span className="ml-2 text-muted-foreground">
                            {webhook.description}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Secret Key (Opcional)</Label>
                  <Input placeholder="Chave secreta para validação" />
                  <p className="text-xs text-muted-foreground">
                    Usado para validar a origem dos webhooks
                  </p>
                </div>

                <Button className="w-full">
                  Salvar Webhook
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Webhooks Configurados</CardTitle>
                <CardDescription>
                  Webhooks ativos na sua conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm">https://api.exemplo.com/webhook</code>
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Eventos: transaction.created, client.created
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Editar</Button>
                      <Button size="sm" variant="outline">Testar</Button>
                      <Button size="sm" variant="destructive">Remover</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exemplos de Código</CardTitle>
              <CardDescription>
                Exemplos práticos de integração
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(code, `Código ${lang}`)}
                      >
                        {copiedKey === `Código ${lang}` ? 
                          <Check className="h-3 w-3" /> : 
                          <Copy className="h-3 w-3" />
                        }
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Playground da API
              </CardTitle>
              <CardDescription>
                Teste os endpoints diretamente no navegador
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Método</Label>
                  <select className="w-full p-2 border rounded">
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Endpoint</Label>
                  <Input placeholder="/api/v1/transactions" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Headers</Label>
                <Textarea 
                  placeholder='{"Authorization": "Bearer your_api_key", "Content-Type": "application/json"}'
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Body (JSON)</Label>
                <Textarea 
                  placeholder='{"client_id": "123", "amount": 100.00}'
                  rows={4}
                />
              </div>

              <Button className="w-full">
                Executar Requisição
              </Button>

              <div className="space-y-2">
                <Label>Resposta</Label>
                <pre className="bg-muted p-4 rounded-lg text-sm">
                  <code>
{`{
  "status": "success",
  "data": {
    "id": "tx_123456",
    "amount": 100.00,
    "cashback": 5.00,
    "created_at": "2024-01-15T10:30:00Z"
  }
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyAPIIntegration;
