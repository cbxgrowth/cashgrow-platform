
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Heart, 
  Target,
  Zap,
  ArrowRight,
  Brain,
  DollarSign,
  AlertCircle
} from "lucide-react";
import { useAICampaignSuggestionsWithCredits } from '@/hooks/useAICampaignSuggestionsWithCredits';
import { AICreditsBadge } from './AICreditsBadge';

interface AICampaignSuggestionsWithCreditsProps {
  companyId: string;
}

export const AICampaignSuggestionsWithCredits: React.FC<AICampaignSuggestionsWithCreditsProps> = ({ companyId }) => {
  const { 
    suggestions, 
    campaignData, 
    loading, 
    applySuggestion, 
    hasCredits,
    creditCosts 
  } = useAICampaignSuggestionsWithCredits(companyId);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'location': return <MapPin className="h-4 w-4" />;
      case 'retention': return <Heart className="h-4 w-4" />;
      case 'loyalty': return <Users className="h-4 w-4" />;
      case 'acquisition': return <Target className="h-4 w-4" />;
      default: return <Zap className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'location': return 'bg-blue-500';
      case 'retention': return 'bg-orange-500';
      case 'loyalty': return 'bg-purple-500';
      case 'acquisition': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Sugestões da IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Credits Overview */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Sugestões IA com Sistema de Créditos</h3>
          <p className="text-sm text-muted-foreground">
            Cada ação consome créditos: Gerar ({creditCosts.suggestion_generated}), Aplicar ({creditCosts.suggestion_applied})
          </p>
        </div>
        <AICreditsBadge companyId={companyId} />
      </div>

      {/* Analytics Overview */}
      {campaignData && (
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Usuários Próximos</span>
              </div>
              <div className="text-2xl font-bold">{campaignData.proximityUsers}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Transações (30d)</span>
              </div>
              <div className="text-2xl font-bold">{campaignData.transactions.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Base de Clientes</span>
              </div>
              <div className="text-2xl font-bold">{campaignData.customerSegments.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Sugestões IA</span>
              </div>
              <div className="text-2xl font-bold">{suggestions.length}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Credit Warning */}
      {!hasCredits(creditCosts.suggestion_generated) && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Créditos insuficientes para gerar novas sugestões IA. 
            Recarregue seus créditos para continuar usando as funcionalidades de IA.
          </AlertDescription>
        </Alert>
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
            <div className="text-center py-8">
              <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                {hasCredits(creditCosts.suggestion_generated) 
                  ? 'A IA está analisando seus dados. Novas sugestões aparecerão em breve.'
                  : 'Recarregue seus créditos para gerar sugestões IA.'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${getTypeColor(suggestion.type)} text-white`}>
                        {getTypeIcon(suggestion.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{suggestion.title}</h3>
                        <p className="text-sm text-gray-600">{suggestion.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityColor(suggestion.priority)}>
                        {suggestion.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        {suggestion.creditsRequired} créditos
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">ROI Esperado:</span>
                      <div className="flex items-center gap-1 font-semibold text-green-600">
                        <DollarSign className="h-3 w-3" />
                        {suggestion.expectedROI}%
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Audiência:</span>
                      <div className="flex items-center gap-1 font-semibold">
                        <Users className="h-3 w-3" />
                        {suggestion.targetAudience.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Impacto:</span>
                      <Progress 
                        value={suggestion.expectedROI / 5} 
                        className="h-2 mt-1"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <p className="text-sm">
                      <strong>Ação Recomendada:</strong> {suggestion.actionRequired}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Gerado em {new Date(suggestion.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => applySuggestion(suggestion.id)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                        disabled={!hasCredits(suggestion.creditsRequired)}
                      >
                        {hasCredits(suggestion.creditsRequired) ? (
                          <>
                            Aplicar Sugestão
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Sem Créditos
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
