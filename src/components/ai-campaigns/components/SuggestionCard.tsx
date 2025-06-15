
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Users, 
  Heart, 
  Target,
  Zap,
  ArrowRight,
  DollarSign
} from "lucide-react";
import { AICampaignSuggestion } from '@/hooks/ai-campaigns/types';

interface SuggestionCardProps {
  suggestion: AICampaignSuggestion;
  onApply: (suggestionId: string) => void;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion, onApply }) => {
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

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
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
        <Badge variant={getPriorityColor(suggestion.priority)}>
          {suggestion.priority}
        </Badge>
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
            onClick={() => onApply(suggestion.id)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
          >
            Aplicar Sugestão
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
