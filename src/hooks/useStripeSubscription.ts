
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface SubscriptionData {
  subscribed: boolean;
  plan_id: number | null;
  subscription_end: string | null;
}

export const useStripeSubscription = () => {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    subscribed: false,
    plan_id: null,
    subscription_end: null
  });
  const [loading, setLoading] = useState(true);

  const checkSubscription = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) throw error;
      
      setSubscriptionData(data);
    } catch (error) {
      console.error('Erro ao verificar assinatura:', error);
      toast.error('Erro ao verificar status da assinatura');
    } finally {
      setLoading(false);
    }
  };

  const createCheckout = async (planId: number) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planId }
      });
      
      if (error) throw error;
      
      // Abrir checkout em nova aba
      window.open(data.url, '_blank');
      
      return data.url;
    } catch (error) {
      console.error('Erro ao criar checkout:', error);
      toast.error('Erro ao processar checkout');
      throw error;
    }
  };

  const openCustomerPortal = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) throw error;
      
      // Abrir portal em nova aba
      window.open(data.url, '_blank');
      
      return data.url;
    } catch (error) {
      console.error('Erro ao abrir portal do cliente:', error);
      toast.error('Erro ao abrir portal de gerenciamento');
      throw error;
    }
  };

  useEffect(() => {
    checkSubscription();
  }, []);

  return {
    subscriptionData,
    loading,
    checkSubscription,
    createCheckout,
    openCustomerPortal
  };
};
