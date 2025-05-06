
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAddNotification } from '@/hooks/useAddNotification';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const ExampleNotifications: React.FC = () => {
  const sendNotification = useAddNotification();

  const handleSimpleNotification = () => {
    sendNotification(
      "Notificação Simples", 
      "Esta é uma notificação básica de informação.",
      "info"
    );
  };

  const handleSuccessNotification = () => {
    sendNotification(
      "Operação Concluída", 
      "A operação foi concluída com sucesso!",
      "success"
    );
  };

  const handleWarningNotification = () => {
    sendNotification(
      "Aviso Importante", 
      "Seu saldo está abaixo do limite mínimo.",
      "warning"
    );
  };

  const handleErrorNotification = () => {
    sendNotification(
      "Erro Detectado", 
      "Ocorreu um erro durante o processamento.",
      "error"
    );
  };

  const handleLinkNotification = () => {
    sendNotification(
      "Acesse seu Perfil", 
      "Clique para atualizar suas informações pessoais.",
      "info",
      "/client/profile"
    );
  };

  const handleAutoDismissNotification = () => {
    sendNotification(
      "Auto Dismiss", 
      "Esta notificação desaparecerá em 5 segundos.",
      "info",
      { autoDismissAfter: 5000 }
    );
  };

  const handleActionNotification = () => {
    const notificationId = sendNotification(
      "Ação Personalizada", 
      "Clique para ver um alerta personalizado.",
      "info",
      { 
        onClick: () => {
          alert("Você clicou na notificação com ação personalizada!");
        }
      }
    );
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Exemplos de Notificações</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notificações Básicas</CardTitle>
            <CardDescription>
              Envie notificações simples com diferentes tipos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleSimpleNotification} className="w-full">
              Notificação de Informação
            </Button>
            <Button 
              onClick={handleSuccessNotification} 
              className="w-full bg-green-500 hover:bg-green-600"
            >
              Notificação de Sucesso
            </Button>
            <Button 
              onClick={handleWarningNotification} 
              className="w-full bg-yellow-500 hover:bg-yellow-600"
            >
              Notificação de Aviso
            </Button>
            <Button 
              onClick={handleErrorNotification} 
              className="w-full bg-red-500 hover:bg-red-600"
            >
              Notificação de Erro
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notificações Avançadas</CardTitle>
            <CardDescription>
              Notificações com comportamentos especiais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleLinkNotification} className="w-full">
              Notificação com Link
            </Button>
            <Button onClick={handleAutoDismissNotification} className="w-full">
              Notificação com Auto Dismiss (5s)
            </Button>
            <Button onClick={handleActionNotification} className="w-full">
              Notificação com Ação Personalizada
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExampleNotifications;
