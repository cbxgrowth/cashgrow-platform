
export interface AICampaignSuggestion {
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

export interface CampaignData {
  proximityUsers: number;
  transactions: any[];
  customerSegments: any[];
  competitorAnalysis: any;
}
