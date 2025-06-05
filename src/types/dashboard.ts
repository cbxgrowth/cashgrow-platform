
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
