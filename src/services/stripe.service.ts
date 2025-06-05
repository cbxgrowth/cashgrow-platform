
// Serviço centralizado para operações Stripe - melhora organização e reutilização
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface SubscriptionData {
  subscribed: boolean;
  plan_id: number | null;
  subscription_end: string | null;
}

export interface CreateCheckoutParams {
  planId: number;
}

class StripeService {
  /**
   * Verifica status da assinatura atual do usuário
   * @returns Promise<SubscriptionData>
   */
  async checkSubscription(): Promise<SubscriptionData> {
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        console.error('Erro ao verificar assinatura:', error);
        throw new Error('Falha na verificação da assinatura');
      }
      
      return data;
    } catch (error) {
      console.error('Erro no serviço de verificação:', error);
      toast.error('Erro ao verificar status da assinatura');
      throw error;
    }
  }

  /**
   * Cria sessão de checkout do Stripe
   * @param params - Parâmetros do checkout
   * @returns Promise<string> - URL do checkout
   */
  async createCheckout(params: CreateCheckoutParams): Promise<string> {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planId: params.planId }
      });
      
      if (error) {
        console.error('Erro ao criar checkout:', error);
        throw new Error('Falha na criação do checkout');
      }
      
      // Abrir checkout em nova aba para melhor UX
      window.open(data.url, '_blank');
      
      return data.url;
    } catch (error) {
      console.error('Erro no serviço de checkout:', error);
      toast.error('Erro ao processar checkout');
      throw error;
    }
  }

  /**
   * Abre portal do cliente Stripe
   * @returns Promise<string> - URL do portal
   */
  async openCustomerPortal(): Promise<string> {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) {
        console.error('Erro ao abrir portal:', error);
        throw new Error('Falha ao abrir portal do cliente');
      }
      
      // Abrir portal em nova aba
      window.open(data.url, '_blank');
      
      return data.url;
    } catch (error) {
      console.error('Erro no serviço de portal:', error);
      toast.error('Erro ao abrir portal de gerenciamento');
      throw error;
    }
  }
}

// Singleton pattern para garantir uma única instância
export const stripeService = new StripeService();
