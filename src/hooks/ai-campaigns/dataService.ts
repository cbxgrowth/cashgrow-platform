
import { supabase } from '@/integrations/supabase/client';
import { CampaignData } from './types';

export const fetchCampaignData = async (companyId: string, proximityUsers: number): Promise<CampaignData> => {
  // Buscar dados de transações
  const { data: transactions } = await supabase
    .from('client_transactions')
    .select('*')
    .eq('company_id', companyId)
    .order('transaction_date', { ascending: false })
    .limit(1000);

  // Buscar dados de clientes
  const { data: customers } = await supabase
    .from('company_clients')
    .select('*')
    .eq('company_id', companyId);

  return {
    proximityUsers,
    transactions: transactions || [],
    customerSegments: customers || [],
    competitorAnalysis: {}
  };
};

export const logSuggestionApplication = async (suggestionId: string, suggestion: any) => {
  const suggestionJson = JSON.parse(JSON.stringify(suggestion));
  
  await supabase
    .from('audit_logs')
    .insert({
      action: 'ai_campaign_applied',
      resource_type: 'campaign_suggestion',
      resource_id: suggestionId,
      new_values: suggestionJson
    });
};
