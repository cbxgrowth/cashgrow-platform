
// Hook refatorado para usar serviço centralizado - melhora testabilidade e manutenção
import { useState, useEffect } from 'react';
import { stripeService, type SubscriptionData } from '@/services/stripe.service';

export const useStripeSubscription = () => {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    subscribed: false,
    plan_id: null,
    subscription_end: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para verificar assinatura com tratamento de erro melhorado
  const checkSubscription = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await stripeService.checkSubscription();
      setSubscriptionData(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setError(errorMessage);
      console.error('Erro na verificação da assinatura:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para criar checkout com validação melhorada
  const createCheckout = async (planId: number): Promise<string | null> => {
    try {
      // Validação de entrada
      if (!planId || planId <= 0) {
        throw new Error('ID do plano inválido');
      }

      const url = await stripeService.createCheckout({ planId });
      return url;
    } catch (error) {
      console.error('Erro ao criar checkout:', error);
      throw error;
    }
  };

  // Função para abrir portal do cliente
  const openCustomerPortal = async (): Promise<string | null> => {
    try {
      const url = await stripeService.openCustomerPortal();
      return url;
    } catch (error) {
      console.error('Erro ao abrir portal:', error);
      throw error;
    }
  };

  // Effect para carregar dados iniciais
  useEffect(() => {
    checkSubscription();
  }, []);

  return {
    subscriptionData,
    loading,
    error,
    checkSubscription,
    createCheckout,
    openCustomerPortal
  };
};
