
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Calendar, Settings, RefreshCw } from 'lucide-react';
import { useStripeSubscription } from '@/hooks/useStripeSubscription';
import { usePlans } from '@/hooks/usePlans';

const SubscriptionManager: React.FC = () => {
  const { subscriptionData, loading, checkSubscription, openCustomerPortal } = useStripeSubscription();
  const { plans } = usePlans();
  
  const currentPlan = plans.find(p => p.id === subscriptionData.plan_id);
  const subscriptionEnd = subscriptionData.subscription_end 
    ? new Date(subscriptionData.subscription_end).toLocaleDateString('pt-BR')
    : null;

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Verificando assinatura...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!subscriptionData.subscribed || !currentPlan) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <Crown className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Nenhuma assinatura ativa</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Assine um plano para aproveitar benefícios exclusivos
            </p>
            <Button onClick={checkSubscription} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Verificar Status
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            Minha Assinatura
          </div>
          <Badge variant="default">{currentPlan.name}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Plano</span>
            <div className="font-semibold">{currentPlan.name}</div>
          </div>
          <div>
            <span className="text-muted-foreground">Valor</span>
            <div className="font-semibold">R$ {currentPlan.price.toFixed(2)}/mês</div>
          </div>
        </div>

        {subscriptionEnd && (
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Próxima cobrança: {subscriptionEnd}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {currentPlan.has_exclusive_campaigns && (
            <Badge variant="outline" className="text-xs">
              Campanhas VIP
            </Badge>
          )}
          {currentPlan.priority_support && (
            <Badge variant="outline" className="text-xs">
              Suporte Priority
            </Badge>
          )}
          {currentPlan.has_early_access && (
            <Badge variant="outline" className="text-xs">
              Acesso Antecipado
            </Badge>
          )}
          {currentPlan.has_bonus_dates && (
            <Badge variant="outline" className="text-xs">
              Cashback em Dobro
            </Badge>
          )}
        </div>

        <div className="pt-4 border-t space-y-2">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={openCustomerPortal}
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
