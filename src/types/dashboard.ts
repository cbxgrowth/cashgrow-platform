
// Tipos para dashboard - corrigindo tipagem inconsistente
export interface MenuItem {
  title: string;
  icon: React.ComponentType<any>;
  url: string;
  badge?: string | null;
}

export interface DashboardUser {
  id: string;
  email?: string;
  user_metadata?: {
    user_type?: 'client' | 'company';
    name?: string;
  };
}

// Adicionando tipos faltantes para o hook useDashboard
export interface DashboardStats {
  totalBalance: number;
  cashbackReceived: number;
  amountWithdrawn: number;
  nextLevelProgress: number;
}

export interface Transaction {
  id: string;
  store: string;
  amount: number;
  cashback: number;
  date: Date;
  percentage: number;
}

export interface Business {
  id: string;
  name: string;
  initials: string;
  cashbackRate: number;
}
