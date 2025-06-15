
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AICredits {
  id: string;
  company_id: string;
  total_credits: number;
  used_credits: number;
  remaining_credits: number;
  last_refill_date: string;
}

interface CreditTransaction {
  id: string;
  company_id: string;
  action_type: string;
  credits_consumed: number;
  description: string | null;
  suggestion_id: string | null;
  created_at: string;
}

export const useAICredits = (companyId: string) => {
  const [credits, setCredits] = useState<AICredits | null>(null);
  const [transactions, setTransactions] = useState<CreditTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCredits = async () => {
    try {
      setLoading(true);
      
      // Buscar créditos atuais
      const { data: creditsData } = await supabase
        .from('company_ai_credits')
        .select('*')
        .eq('company_id', companyId)
        .single();

      setCredits(creditsData);

      // Buscar histórico de transações
      const { data: transactionsData } = await supabase
        .from('ai_credit_transactions')
        .select('*')
        .eq('company_id', companyId)
        .order('created_at', { ascending: false })
        .limit(50);

      setTransactions(transactionsData || []);
    } catch (error) {
      console.error('Erro ao buscar créditos IA:', error);
    } finally {
      setLoading(false);
    }
  };

  const consumeCredits = async (
    actionType: string,
    creditsAmount: number = 1,
    description?: string,
    suggestionId?: string
  ): Promise<boolean> => {
    try {
      const { data, error } = await supabase.rpc('consume_ai_credits', {
        p_company_id: companyId,
        p_action_type: actionType,
        p_credits_amount: creditsAmount,
        p_description: description,
        p_suggestion_id: suggestionId
      });

      if (error) {
        console.error('Erro ao consumir créditos:', error);
        return false;
      }

      // Atualizar créditos localmente
      if (data && credits) {
        setCredits(prev => prev ? {
          ...prev,
          used_credits: prev.used_credits + creditsAmount,
          remaining_credits: prev.remaining_credits - creditsAmount
        } : null);
      }

      // Recarregar dados
      await fetchCredits();
      
      return data;
    } catch (error) {
      console.error('Erro ao consumir créditos:', error);
      return false;
    }
  };

  const addCredits = async (
    creditsAmount: number,
    description: string = 'Recarga de créditos'
  ) => {
    try {
      const { error } = await supabase.rpc('add_ai_credits', {
        p_company_id: companyId,
        p_credits_amount: creditsAmount,
        p_description: description
      });

      if (error) {
        console.error('Erro ao adicionar créditos:', error);
        return false;
      }

      // Recarregar dados
      await fetchCredits();
      return true;
    } catch (error) {
      console.error('Erro ao adicionar créditos:', error);
      return false;
    }
  };

  const hasCredits = (amount: number = 1): boolean => {
    return credits ? credits.remaining_credits >= amount : false;
  };

  useEffect(() => {
    if (companyId) {
      fetchCredits();
    }
  }, [companyId]);

  return {
    credits,
    transactions,
    loading,
    consumeCredits,
    addCredits,
    hasCredits,
    refetch: fetchCredits
  };
};
