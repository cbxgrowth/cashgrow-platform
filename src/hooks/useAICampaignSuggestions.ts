
import { useState, useEffect } from 'react';
import { useProximityMetrics } from './useProximityMetrics';
import { AICampaignSuggestion, CampaignData } from './ai-campaigns/types';
import { 
  generateLocationBasedSuggestions,
  generateRetentionSuggestions,
  generateLoyaltySuggestions
} from './ai-campaigns/suggestionGenerators';
import { fetchCampaignData, logSuggestionApplication } from './ai-campaigns/dataService';

export const useAICampaignSuggestions = (companyId: string) => {
  const [suggestions, setSuggestions] = useState<AICampaignSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [campaignData, setCampaignData] = useState<CampaignData | null>(null);
  const { metrics } = useProximityMetrics(companyId);

  const fetchCampaignDataAndGenerateSuggestions = async () => {
    try {
      setLoading(true);
      
      const proximityUsers = metrics.reduce((sum, m) => sum + m.user_count, 0);
      const data = await fetchCampaignData(companyId, proximityUsers);
      setCampaignData(data);

      // Gerar sugestões baseadas em IA
      const locationSuggestions = generateLocationBasedSuggestions(metrics);
      const retentionSuggestions = generateRetentionSuggestions(data.transactions);
      const loyaltySuggestions = generateLoyaltySuggestions(data.customerSegments);

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

  const applySuggestion = async (suggestionId: string) => {
    const suggestion = suggestions.find(s => s.id === suggestionId);
    if (!suggestion) return;

    try {
      await logSuggestionApplication(suggestionId, suggestion);
      console.log('Sugestão aplicada:', suggestion);
      
      // Remover sugestão aplicada
      setSuggestions(prev => prev.filter(s => s.id !== suggestionId));
      
      return { success: true };
    } catch (error) {
      console.error('Erro ao aplicar sugestão:', error);
      return { success: false, error };
    }
  };

  useEffect(() => {
    if (companyId && metrics.length > 0) {
      fetchCampaignDataAndGenerateSuggestions();
    }
  }, [companyId, metrics]);

  return {
    suggestions,
    campaignData,
    loading,
    applySuggestion,
    refetch: fetchCampaignDataAndGenerateSuggestions
  };
};
