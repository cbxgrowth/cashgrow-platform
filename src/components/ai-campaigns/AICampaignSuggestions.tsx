
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import { useAICampaignSuggestions } from '@/hooks/useAICampaignSuggestions';
import { 
  AnalyticsOverview, 
  SuggestionCard, 
  SuggestionsLoadingState, 
  EmptyState 
} from './components';

interface AICampaignSuggestionsProps {
  companyId: string;
}

export const AICampaignSuggestions: React.FC<AICampaignSuggestionsProps> = ({ companyId }) => {
  const { suggestions, campaignData, loading, applySuggestion } = useAICampaignSuggestions(companyId);

  if (loading) {
    return <SuggestionsLoadingState />;
  }

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      {campaignData && (
        <AnalyticsOverview 
          campaignData={campaignData} 
          suggestionsCount={suggestions.length} 
        />
      )}

      {/* AI Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Sugestões Inteligentes de Campanhas
          </CardTitle>
          <CardDescription>
            IA analisou seus dados de localização, transações e comportamento dos clientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          {suggestions.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <SuggestionCard
                  key={suggestion.id}
                  suggestion={suggestion}
                  onApply={applySuggestion}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
