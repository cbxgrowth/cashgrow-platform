
import { useState, useEffect } from 'react';
import { useProximityMetrics } from './useProximityMetrics';
import { supabase } from '@/integrations/supabase/client';

interface AICampaignSuggestion {
  id: string;
  type: 'location' | 'retention' | 'loyalty' | 'acquisition';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  expectedROI: number;
  targetAudience: number;
  actionRequired: string;
  data: any;
  createdAt: string;
}

interface CampaignData {
  proximityUsers: number;
  transactions: any[];
  customerSegments: any[];
  competitorAnalysis: any;
}

export const useAICampaignSuggestions = (companyId: string) => {
  const [suggestions, setSuggestions] = useState<AICampaignSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [campaignData, setCampaignData] = useState<CampaignData | null>(null);
  const { metrics } = useProximityMetrics(companyId);

  const generateLocationBasedSuggestions = (proximityData: any[]): AICampaignSuggestion[] => {
    const suggestions: AICampaignSuggestion[] = [];
    
    proximityData.forEach(metric => {
      if (metric.radius_km === 10 && metric.user_count > 50) {
        suggestions.push({
          id: `loc-prox-${metric.id}`,
          type: 'location',
          title: 'Campanha de Proximidade Imediata',
          description: `${metric.user_count} usuários estão a menos de 10km. Lance uma promoção flash para atrair visitas imediatas.`,
          priority: 'high',
          expectedROI: 320,
          targetAudience: metric.user_count,
          actionRequired: 'Criar promoção flash com 20% de desconto + cashback duplo',
          data: { radius: metric.radius_km, userCount: metric.user_count },
          createdAt: new Date().toISOString()
        });
      }

      if (metric.radius_km === 50 && metric.user_count > 100) {
        suggestions.push({
          id: `loc-regional-${metric.id}`,
          type: 'acquisition',
          title: 'Expansão Regional Estratégica',
          description: `${metric.user_count} usuários na região de 50km. Oportunidade para campanhas de awareness e atração.`,
          priority: 'medium',
          expectedROI: 250,
          targetAudience: metric.user_count,
          actionRequired: 'Lançar campanha de awareness com cashback progressivo',
          data: { radius: metric.radius_km, userCount: metric.user_count },
          createdAt: new Date().toISOString()
        });
      }
    });

    return suggestions;
  };

  const generateRetentionSuggestions = (transactions: any[]): AICampaignSuggestion[] => {
    const suggestions: AICampaignSuggestion[] = [];
    
    // Análise de padrões de compra
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentTransactions = transactions.filter(t => 
      new Date(t.transaction_date) >= thirtyDaysAgo
    );

    if (recentTransactions.length < transactions.length * 0.3) {
      suggestions.push({
        id: 'retention-reactivation',
        type: 'retention',
        title: 'Campanha de Reativação de Clientes',
        description: 'Detectamos queda de 70% nas transações. Lance uma campanha de reativação personalizada.',
        priority: 'high',
        expectedROI: 280,
        targetAudience: transactions.length - recentTransactions.length,
        actionRequired: 'Criar ofertas personalizadas baseadas no histórico de compras',
        data: { inactiveCustomers: transactions.length - recentTransactions.length },
        createdAt: new Date().toISOString()
      });
    }

    return suggestions;
  };

  const generateLoyaltySuggestions = (customerData: any[]): AICampaignSuggestion[] => {
    const suggestions: AICampaignSuggestion[] = [];
    
    const highValueCustomers = customerData.filter(c => c.total_spent > 1000);
    const loyalCustomers = customerData.filter(c => c.transaction_count > 10);

    if (highValueCustomers.length > 0) {
      suggestions.push({
        id: 'loyalty-vip',
        type: 'loyalty',
        title: 'Programa VIP Exclusivo',
        description: `${highValueCustomers.length} clientes de alto valor. Crie um programa VIP com benefícios exclusivos.`,
        priority: 'high',
        expectedROI: 450,
        targetAudience: highValueCustomers.length,
        actionRequired: 'Implementar tier VIP com cashback 3x e acesso antecipado',
        data: { vipCustomers: highValueCustomers.length },
        createdAt: new Date().toISOString()
      });
    }

    if (loyalCustomers.length > 20) {
      suggestions.push({
        id: 'loyalty-referral',
        type: 'loyalty',
        title: 'Programa de Indicação Inteligente',
        description: `${loyalCustomers.length} clientes leais podem se tornar embaixadores da marca.`,
        priority: 'medium',
        expectedROI: 380,
        targetAudience: loyalCustomers.length,
        actionRequired: 'Lançar programa de indicação com bônus progressivo',
        data: { loyalCustomers: loyalCustomers.length },
        createdAt: new Date().toISOString()
      });
    }

    return suggestions;
  };

  const fetchCampaignData = async () => {
    try {
      setLoading(true);
      
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

      setCampaignData({
        proximityUsers: metrics.reduce((sum, m) => sum + m.user_count, 0),
        transactions: transactions || [],
        customerSegments: customers || [],
        competitorAnalysis: {} // Placeholder para análise futura
      });

      // Gerar sugestões baseadas em IA
      const locationSuggestions = generateLocationBasedSuggestions(metrics);
      const retentionSuggestions = generateRetentionSuggestions(transactions || []);
      const loyaltySuggestions = generateLoyaltySuggestions(customers || []);

      const allSuggestions = [
        ...locationSuggestions,
        ...retentionSuggestions,
        ...loyaltySuggestions
      ].sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

      setSuggestions(allSuggestions);
    } catch (error) {
      console.error('Erro ao buscar dados para campanhas IA:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (companyId && metrics.length > 0) {
      fetchCampaignData();
    }
  }, [companyId, metrics]);

  const applySuggestion = async (suggestionId: string) => {
    const suggestion = suggestions.find(s => s.id === suggestionId);
    if (!suggestion) return;

    try {
      // Convert suggestion to JSON-compatible format
      const suggestionJson = JSON.parse(JSON.stringify(suggestion));
      
      // Log da ação aplicada
      await supabase
        .from('audit_logs')
        .insert({
          action: 'ai_campaign_applied',
          resource_type: 'campaign_suggestion',
          resource_id: suggestionId,
          new_values: suggestionJson
        });

      console.log('Sugestão aplicada:', suggestion);
      
      // Remover sugestão aplicada
      setSuggestions(prev => prev.filter(s => s.id !== suggestionId));
      
      return { success: true };
    } catch (error) {
      console.error('Erro ao aplicar sugestão:', error);
      return { success: false, error };
    }
  };

  return {
    suggestions,
    campaignData,
    loading,
    applySuggestion,
    refetch: fetchCampaignData
  };
};
