
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PlanCard from '@/components/plans/PlanCard';
import CashbackCalculator from '@/components/plans/CashbackCalculator';
import UserPlanStatus from '@/components/plans/UserPlanStatus';
import { usePlans } from '@/hooks/usePlans';
import { Crown, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const ClientPlans: React.FC = () => {
  const navigate = useNavigate();
  const { plans, userPlan, loading } = usePlans();

  const handleSubscribe = async (planId: number) => {
    try {
      // TODO: Implementar integração com Stripe
      toast.info('Redirecionando para checkout...');
      console.log('Subscribe to plan:', planId);
    } catch (error) {
      toast.error('Erro ao processar assinatura');
    }
  };

  const handleManagePlan = () => {
    // TODO: Implementar gerenciamento de plano
    toast.info('Funcionalidade em desenvolvimento');
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Carregando planos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Crown className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Planos CashGrow</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Maximize seus ganhos com cashback turbinado e benefícios exclusivos
        </p>
      </div>

      {/* User Plan Status */}
      <div className="max-w-md mx-auto">
        <UserPlanStatus userPlan={userPlan} onManagePlan={handleManagePlan} />
      </div>

      {/* Benefits Highlight */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center justify-center">
            <Sparkles className="h-6 w-6" />
            Por que assinar um plano?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">+50%</div>
              <p className="text-sm">Mais cashback em suas compras</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">VIP</div>
              <p className="text-sm">Acesso a campanhas exclusivas</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">∞</div>
              <p className="text-sm">Resgates PIX ilimitados</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isCurrentPlan={userPlan?.plan_id === plan.id}
            onSubscribe={handleSubscribe}
            loading={loading}
          />
        ))}
      </div>

      {/* Cashback Calculator */}
      <div className="max-w-2xl mx-auto">
        <CashbackCalculator />
      </div>

      {/* FAQ Section */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Perguntas Frequentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Como funciona o cashback turbinado?</h4>
            <p className="text-sm text-muted-foreground">
              O cashback extra é aplicado automaticamente em todas as suas compras. 
              Se uma loja oferece 5% de cashback, você recebe 6% no Essencial e 7,5% no Premium.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h4>
            <p className="text-sm text-muted-foreground">
              Sim! Você pode cancelar seu plano a qualquer momento. 
              Os benefícios continuam até o final do período pago.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Como funcionam os resgates PIX?</h4>
            <p className="text-sm text-muted-foreground">
              Você pode resgatar seu saldo acumulado via PIX. O plano Gratuito permite 1 resgate/mês, 
              Essencial 2 resgates/mês e Premium resgates ilimitados.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientPlans;
