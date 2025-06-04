
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PlanCard from '@/components/plans/PlanCard';
import CashbackCalculator from '@/components/plans/CashbackCalculator';
import SubscriptionManager from '@/components/plans/SubscriptionManager';
import StripeCheckoutButton from '@/components/plans/StripeCheckoutButton';
import { usePlans } from '@/hooks/usePlans';
import { useStripeSubscription } from '@/hooks/useStripeSubscription';
import { Crown, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const ClientPlans: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { plans, loading: plansLoading } = usePlans();
  const { subscriptionData, checkSubscription } = useStripeSubscription();

  // Verificar parâmetros de retorno do Stripe
  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast.success('Assinatura realizada com sucesso!');
      checkSubscription(); // Atualizar status da assinatura
    } else if (searchParams.get('canceled') === 'true') {
      toast.info('Checkout cancelado. Você pode tentar novamente quando quiser.');
    }
  }, [searchParams, checkSubscription]);

  if (plansLoading) {
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

      {/* Subscription Manager */}
      <div className="max-w-md mx-auto">
        <SubscriptionManager />
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
          <Card key={plan.id} className={`relative transition-all duration-300 hover:shadow-lg ${
            subscriptionData.plan_id === plan.id ? 'ring-2 ring-primary' : ''
          }`}>
            {subscriptionData.plan_id === plan.id && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Seu Plano Atual
              </div>
            )}
            
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Crown className={`h-6 w-6 ${
                  plan.name === 'Premium' ? 'text-yellow-500' : 
                  plan.name === 'Essencial' ? 'text-blue-500' : 
                  'text-gray-500'
                }`} />
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-3xl font-bold text-primary">
                {plan.price === 0 ? 'Gratuito' : `R$ ${plan.price.toFixed(2)}`}
                {plan.price > 0 && <span className="text-sm text-muted-foreground">/mês</span>}
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Cashback padrão em todas as compras</span>
                </li>
                {plan.cashback_multiplier > 1 && (
                  <li className="flex items-start gap-2">
                    <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Cashback {Math.round((plan.cashback_multiplier - 1) * 100)}% maior
                    </span>
                  </li>
                )}
                {plan.pix_limit_per_month > 1 && (
                  <li className="flex items-start gap-2">
                    <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      {plan.pix_limit_per_month === 999999 ? 'Resgates PIX ilimitados' : `${plan.pix_limit_per_month} resgates PIX/mês`}
                    </span>
                  </li>
                )}
                {plan.has_exclusive_campaigns && (
                  <li className="flex items-start gap-2">
                    <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Vouchers e cupons exclusivos</span>
                  </li>
                )}
                {plan.has_early_access && (
                  <li className="flex items-start gap-2">
                    <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Acesso antecipado a promoções</span>
                  </li>
                )}
                {plan.priority_support && (
                  <li className="flex items-start gap-2">
                    <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Atendimento prioritário</span>
                  </li>
                )}
                {plan.has_bonus_dates && (
                  <li className="flex items-start gap-2">
                    <Crown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cashback em dobro em datas especiais</span>
                  </li>
                )}
              </ul>

              <StripeCheckoutButton 
                plan={plan}
                isCurrentPlan={subscriptionData.plan_id === plan.id}
              />
            </CardContent>
          </Card>
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
              Sim! Você pode cancelar seu plano a qualquer momento através do portal de gerenciamento. 
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
          <div>
            <h4 className="font-semibold mb-2">O pagamento é seguro?</h4>
            <p className="text-sm text-muted-foreground">
              Sim! Utilizamos o Stripe, uma das plataformas de pagamento mais seguras do mundo, 
              com certificação PCI DSS e criptografia de ponta a ponta.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientPlans;
