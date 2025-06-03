
export interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  badge?: string | null;
}

export interface UserInfo {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
    company_name?: string;
    user_type?: 'client' | 'company';
  };
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
  logo?: string;
}

export interface DashboardStats {
  totalBalance: number;
  cashbackReceived: number;
  amountWithdrawn: number;
  nextLevelProgress: number;
}
