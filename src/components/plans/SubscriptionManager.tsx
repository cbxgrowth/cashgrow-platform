
// Componente refatorado com melhor estrutura e acessibilidade
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Calendar, Settings, RefreshCw, AlertTriangle } from 'lucide-react';
import { useStripeSubscription } from '@/hooks/useStripeSubscription';
import { usePlans } from '@/hooks/usePlans';
import { toast } from 'sonner';

const SubscriptionManager: React.FC = () => {
  const { subscriptionData, loading, error, checkSubscription, openCustomerPortal } = useStripeSubscription();
  const { plans } = usePlans();
  
  // Busca o plano atual com fallback seguro
  const currentPlan = plans.find(p => p.id === subscriptionData.plan_id);
  
  // Formatação segura da data de expiração
  const subscriptionEnd = subscriptionData.subscription_end 
    ? new Date(subscriptionData.subscription_end).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit', 
        year: 'numeric'
      })
    : null;

  // Handler para abrir portal com tratamento de erro
  const handleOpenPortal = async () => {
    try {
      await openCustomerPortal();
    } catch (error) {
      console.error('Erro ao abrir portal:', error);
      toast.error('Não foi possível abrir o portal de gerenciamento');
    }
  };

  // Estado de loading
  if (loading) {
    return (
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Verificando assinatura...</p>
              <p className="text-xs text-muted-foreground mt-1">Aguarde um momento</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <Card className="shadow-sm border-destructive">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <AlertTriangle className="h-8 w-8 text-destructive mx-auto" />
            <div>
              <p className="text-destructive font-medium">Erro ao carregar assinatura</p>
              <p className="text-xs text-muted-foreground mt-1">{error}</p>
            </div>
            <Button onClick={checkSubscription} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Tentar Novamente
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Estado sem assinatura ativa
  if (!subscriptionData.subscribed || !currentPlan) {
    return (
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <Crown className="h-12 w-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="font-semibold text-lg">Nenhuma assinatura ativa</h3>
              <p className="text-muted-foreground text-sm">
                Assine um plano para aproveitar benefícios exclusivos
              </p>
            </div>
            <Button onClick={checkSubscription} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Verificar Status
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Renderização dos benefícios do plano
  const renderPlanBenefits = () => {
    const benefits = [];
    
    if (currentPlan.has_exclusive_campaigns) {
      benefits.push({ label: 'Campanhas VIP', key: 'campaigns' });
    }
    if (currentPlan.priority_support) {
      benefits.push({ label: 'Suporte Priority', key: 'support' });
    }
    if (currentPlan.has_early_access) {
      benefits.push({ label: 'Acesso Antecipado', key: 'early' });
    }
    if (currentPlan.has_bonus_dates) {
      benefits.push({ label: 'Cashback em Dobro', key: 'bonus' });
    }

    if (benefits.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2">
        {benefits.map((benefit) => (
          <Badge key={benefit.key} variant="outline" className="text-xs">
            {benefit.label}
          </Badge>
        ))}
      </div>
    );
  };

  // Estado com assinatura ativa
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            <span>Minha Assinatura</span>
          </div>
          <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
            {currentPlan.name}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Informações do plano */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <span className="text-muted-foreground">Plano</span>
            <div className="font-semibold">{currentPlan.name}</div>
          </div>
          <div className="space-y-1">
            <span className="text-muted-foreground">Valor</span>
            <div className="font-semibold">
              R$ {currentPlan.price.toFixed(2).replace('.', ',')}/mês
            </div>
          </div>
        </div>

        {/* Data de renovação */}
        {subscriptionEnd && (
          <div className="flex items-center gap-2 text-sm bg-muted/50 p-3 rounded-lg">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>Próxima cobrança: <strong>{subscriptionEnd}</strong></span>
          </div>
        )}

        {/* Benefícios do plano */}
        {renderPlanBenefits()}

        {/* Ações */}
        <div className="pt-4 border-t space-y-3">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleOpenPortal}
          >
            <Settings className="h-4 w-4 mr-2" />
            Gerenciar Assinatura
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full" 
            onClick={checkSubscription}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar Status
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionManager;
