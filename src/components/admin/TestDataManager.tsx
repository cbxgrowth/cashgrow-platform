
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Trash2, 
  RefreshCw, 
  Database, 
  Shield, 
  User, 
  Bell,
  BarChart3,
  Upload,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { TestDataService } from '@/services/testData.service';
import { useToast } from "@/hooks/use-toast";

const TestDataManager: React.FC = () => {
  const { toast } = useToast();

  const handleCompleteReset = () => {
    if (confirm('⚠️ Isso irá limpar TODOS os dados de teste. Tem certeza?')) {
      TestDataService.initializeCleanSystem();
      toast({
        title: "Sistema Resetado",
        description: "Todos os dados de teste foram limpos. O sistema está pronto para novos testes.",
      });
      
      // Recarregar a página após 2 segundos
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const handleSpecificReset = (type: string) => {
    switch (type) {
      case 'onboarding':
        TestDataService.resetOnboarding();
        break;
      case 'notifications':
        TestDataService.resetNotifications();
        break;
      case 'dashboard':
        TestDataService.resetDashboardData();
        break;
      case 'preferences':
        TestDataService.resetUserPreferences();
        break;
      case 'imports':
        TestDataService.resetImportData();
        break;
    }
    
    toast({
      title: "Dados Limpos",
      description: `${type} foi resetado com sucesso.`,
    });
  };

  const testCredentials = TestDataService.getTestCredentials();

  const resetOptions = [
    {
      id: 'onboarding',
      title: 'Onboarding',
      description: 'Resetar tutorial inicial para ambos os tipos de usuário',
      icon: User,
      color: 'text-blue-600'
    },
    {
      id: 'notifications',
      title: 'Notificações',
      description: 'Limpar todas as notificações e configurações',
      icon: Bell,
      color: 'text-green-600'
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Resetar dados e preferências dos dashboards',
      icon: BarChart3,
      color: 'text-purple-600'
    },
    {
      id: 'preferences',
      title: 'Preferências',
      description: 'Limpar configurações de usuário e tema',
      icon: Shield,
      color: 'text-orange-600'
    },
    {
      id: 'imports',
      title: 'Importações',
      description: 'Limpar histórico de importações e templates',
      icon: Upload,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2 mb-2">
          <Database className="h-8 w-8 text-primary" />
          Gerenciador de Dados de Teste
        </h1>
        <p className="text-muted-foreground">
          Controle e reset dos dados de teste do sistema
        </p>
      </div>

      {/* Credenciais de Teste */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            Credenciais de Teste Configuradas
          </CardTitle>
          <CardDescription>Use estas credenciais para fazer login no sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-blue-700">Email:</label>
              <div className="font-mono text-lg text-blue-900">{testCredentials.email}</div>
            </div>
            <div>
              <label className="text-sm font-medium text-blue-700">Senha:</label>
              <div className="font-mono text-lg text-blue-900">{testCredentials.password}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reset Completo */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            Reset Completo do Sistema
          </CardTitle>
          <CardDescription>
            Limpa todos os dados de teste e reinicia o sistema do zero
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Esta ação irá limpar todos os dados locais exceto as credenciais de autenticação.
              </p>
              <Badge variant="destructive">Ação Irreversível</Badge>
            </div>
            <Button 
              variant="destructive" 
              onClick={handleCompleteReset}
              className="ml-4"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Reset Completo
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Reset Específico */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Reset Específico por Área</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {resetOptions.map((option) => (
            <Card key={option.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <option.icon className={`h-4 w-4 ${option.color}`} />
                  {option.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleSpecificReset(option.id)}
                  className="w-full"
                >
                  <RefreshCw className="h-3 w-3 mr-2" />
                  Resetar {option.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Informações Adicionais */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Informações Importantes</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>• Os dados de autenticação são preservados durante o reset</p>
          <p>• O reset completo recarregará a página automaticamente</p>
          <p>• Os dados no banco de dados (Supabase) não são afetados</p>
          <p>• Apenas dados locais (localStorage/sessionStorage) são limpos</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestDataManager;
