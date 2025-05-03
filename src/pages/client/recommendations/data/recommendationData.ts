
// Types for recommendations
export interface PersonalizedRecommendation {
  id: number;
  name: string;
  logo: string;
  category: string;
  cashbackPercentage: number;
  relevanceScore: number;
  reasoning: string;
  distance: string;
}

export interface TrendingRecommendation {
  id: number;
  name: string;
  logo: string;
  category: string;
  cashbackPercentage: number;
  trendingReason: string;
  endsIn: string;
}

export interface UpcomingRecommendation {
  id: number;
  name: string;
  logo: string;
  category: string;
  predictedDate: string;
  usualCashback: number;
  boostedCashback: number;
  reasoning: string;
}

// Mock data for recommendations
export const personalizedRecommendations: PersonalizedRecommendation[] = [
  {
    id: 1,
    name: 'Tech Store',
    logo: 'TS',
    category: 'Eletrônicos',
    cashbackPercentage: 8,
    relevanceScore: 98,
    reasoning: 'Baseado em suas compras recentes de gadgets',
    distance: '2.5 km'
  },
  {
    id: 2,
    name: 'Mercado Verde',
    logo: 'MV',
    category: 'Varejo',
    cashbackPercentage: 6,
    relevanceScore: 95,
    reasoning: 'Compras semanais frequentes em mercados',
    distance: '1.2 km'
  },
  {
    id: 3,
    name: 'Livraria Cultura',
    logo: 'LC',
    category: 'Educação',
    cashbackPercentage: 10,
    relevanceScore: 92,
    reasoning: 'Interesses em livros de tecnologia',
    distance: '4.2 km'
  },
];

export const trendingRecommendations: TrendingRecommendation[] = [
  {
    id: 1,
    name: 'Restaurante Bom Sabor',
    logo: 'RB',
    category: 'Alimentação',
    cashbackPercentage: 15,
    trendingReason: 'Oferta especial por tempo limitado',
    endsIn: '12h'
  },
  {
    id: 2,
    name: 'Pet Shop Amigo Fiel',
    logo: 'PS',
    category: 'Pet',
    cashbackPercentage: 12,
    trendingReason: 'Cashback aumentado para novos clientes',
    endsIn: '2d'
  },
  {
    id: 3,
    name: 'Farmácia Saúde',
    logo: 'FS',
    category: 'Saúde',
    cashbackPercentage: 9,
    trendingReason: 'Produtos para gripe em alta',
    endsIn: '3d'
  },
];

export const upcomingRecommendations: UpcomingRecommendation[] = [
  {
    id: 1,
    name: 'Padaria Delícia',
    logo: 'PD',
    category: 'Alimentação',
    predictedDate: '24/05',
    usualCashback: 6,
    boostedCashback: 9,
    reasoning: 'Você costuma comprar pão nos sábados'
  },
  {
    id: 2,
    name: 'Tech Store',
    logo: 'TS',
    category: 'Eletrônicos',
    predictedDate: '28/05',
    usualCashback: 5,
    boostedCashback: 10,
    reasoning: 'Nova versão do produto que você comprou há 1 ano'
  },
];
