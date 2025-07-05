
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
      message: 'Você ganhou R$ 22,50 de cashback na sua compra no Mercado Verde!',
      type: 'success' as const,
      link: '/client/transactions'
    },
    {
      title: 'Resgate Processado',
      message: 'Seu resgate de R$ 100,00 via PIX foi processado com sucesso.',
      type: 'success' as const,
      link: '/client/wallet'
    },
    {
      title: 'Compra Confirmada',
      message: 'Sua compra de R$ 89,90 na Farmácia Saúde foi confirmada. Cashback será creditado em até 24h.',
      type: 'info' as const,
      link: '/client/transactions'
    },
    {
      title: 'Promoção Especial',
      message: 'Dobro de cashback em todos os supermercados parceiros até domingo!',
      type: 'warning' as const,
      link: '/client/companies'
    },
    {
      title: 'Nível Atualizado',
      message: 'Parabéns! Você subiu para o nível Gold e agora tem 12% de cashback.',
      type: 'success' as const,
      link: '/client/vip-club'
    },
    {
      title: 'Limite de Resgate',
      message: 'Você atingiu 80% do seu limite mensal de resgate PIX.',
      type: 'warning' as const,
      link: '/client/wallet'
    }
  ];

  const companyExamples = [
    {
      title: 'Nova Venda Registrada',
      message: 'Cliente Ana Costa realizou uma compra de R$ 245,80 com cashback de R$ 29,50.',
      type: 'success' as const,
      link: '/company/transactions'
    },
    {
      title: 'Cliente Cadastrado',
      message: 'Pedro Oliveira se cadastrou e já realizou 3 compras totalizando R$ 567,20.',
      type: 'success' as const,
      link: '/company/clients'
    },
    {
      title: 'Meta de Vendas Atingida',
      message: 'Parabéns! Sua empresa atingiu 1.000 transações este mês, superando a meta em 35%.',
      type: 'success' as const,
      link: '/company/performance'
    },
    {
      title: 'Cashback Alto Detectado',
      message: 'Cliente VIP realizou compra de R$ 1.200,00 gerando R$ 180,00 de cashback.',
      type: 'info' as const,
      link: '/company/transactions'
    },
    {
      title: 'Relatório Mensal Pronto',
      message: 'Seu relatório de performance mensal está disponível para download.',
      type: 'info' as const,
      link: '/company/reports'
    },
    {
      title: 'Integração Requer Atenção',
      message: 'Sua integração ERP apresentou erro na última sincronização.',
      type: 'error' as const,
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
                  example.type === 'error' ? 'bg-red-100 text-red-800' :
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
          <CardTitle>Notificações Específicas por Tipo de Usuário</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium text-blue-900 mb-1">
              <User className="h-4 w-4 inline mr-2" />
              Clientes recebem notificações sobre:
            </p>
            <ul className="text-xs text-blue-800 ml-6 list-disc space-y-1">
              <li>Cashback recebido e confirmado</li>
              <li>Compras processadas e status</li>
              <li>Resgates via PIX realizados</li>
              <li>Promoções e ofertas especiais</li>
              <li>Mudanças de nível VIP</li>
              <li>Limites de resgate atingidos</li>
            </ul>
          </div>
          
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm font-medium text-green-900 mb-1">
              <Building2 className="h-4 w-4 inline mr-2" />
              Empresas recebem notificações sobre:
            </p>
            <ul className="text-xs text-green-800 ml-6 list-disc space-y-1">
              <li>Novas vendas e transações registradas</li>
              <li>Clientes cadastrados e atividade</li>
              <li>Metas de vendas atingidas</li>
              <li>Cashback gerado e distribuído</li>
              <li>Relatórios de performance disponíveis</li>
              <li>Status de integrações e sincronizações</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExampleNotifications;
