
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAddNotification } from '@/hooks/useAddNotification';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { ArrowLeft, Bell, Building2, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExampleNotifications: React.FC = () => {
  const sendNotification = useAddNotification();
  const { userType } = useAuth();

  const clientExamples = [
    {
      title: 'Cashback Recebido',
      message: 'Você ganhou R$ 15,50 de cashback na sua última compra!',
      type: 'success' as const,
      link: '/client/wallet'
    },
    {
      title: 'Nova Promoção',
      message: 'Triplo cashback no Supermercado ABC este fim de semana!',
      type: 'info' as const,
      link: '/client/companies'
    },
    {
      title: 'Nível Aumentado',
      message: 'Parabéns! Você subiu para o nível Prata e ganhou benefícios exclusivos.',
      type: 'success' as const,
      link: '/client/vip-club'
    },
    {
      title: 'Resgate Disponível',
      message: 'Você tem R$ 50,00 disponíveis para resgate via PIX.',
      type: 'warning' as const,
      link: '/client/wallet'
    }
  ];

  const companyExamples = [
    {
      title: 'Novo Cliente',
      message: 'Maria Santos se cadastrou e fez sua primeira compra de R$ 120,00.',
      type: 'success' as const,
      link: '/company/clients'
    },
    {
      title: 'Meta Atingida',
      message: 'Sua empresa atingiu 200 transações este mês! Meta superada em 25%.',
      type: 'success' as const,
      link: '/company/performance'
    },
    {
      title: 'Relatório Disponível',
      message: 'Seu relatório mensal de cashback está pronto para download.',
      type: 'info' as const,
      link: '/company/reports'
    },
    {
      title: 'Integração Requerida',
      message: 'Atualize sua integração ERP para continuar sincronizando dados.',
      type: 'warning' as const,
      link: '/company/integrations'
    }
  ];

  const examples = userType === 'company' ? companyExamples : clientExamples;

  const handleSendExample = (example: typeof examples[0]) => {
    sendNotification(example.title, example.message, example.type, example.link);
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/notifications">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {userType === 'company' ? <Building2 className="h-6 w-6" /> : <User className="h-6 w-6" />}
            Exemplos de Notificações - {userType === 'company' ? 'Empresa' : 'Cliente'}
          </h1>
          <p className="text-muted-foreground">
            Teste diferentes tipos de notificações específicas para {userType === 'company' ? 'empresas' : 'clientes'}
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {examples.map((example, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    {example.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {example.message}
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleSendExample(example)}
                >
                  Enviar Exemplo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className={`px-2 py-1 rounded text-xs ${
                  example.type === 'success' ? 'bg-green-100 text-green-800' :
                  example.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {example.type}
                </span>
                <span>Link: {example.link}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Como Funciona</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            • <strong>Clientes</strong> recebem notificações sobre cashback, promoções, níveis e resgates
          </p>
          <p className="text-sm text-muted-foreground">
            • <strong>Empresas</strong> recebem notificações sobre novos clientes, metas, relatórios e integrações
          </p>
          <p className="text-sm text-muted-foreground">
            • As notificações são filtradas automaticamente pelo tipo de usuário logado
          </p>
          <p className="text-sm text-muted-foreground">
            • Cada notificação pode ter links específicos para páginas relevantes do painel
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExampleNotifications;
