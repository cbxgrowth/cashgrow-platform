
export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: 'super_admin' | 'admin' | 'user';
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  name: string;
  description: string | null;
  logo_url: string | null;
  website: string | null;
  industry: string | null;
  size: string | null;
  owner_id: string | null;
  subscription_status: 'active' | 'inactive' | 'suspended' | 'cancelled';
  subscription_plan_id: number | null;
  subscription_started_at: string | null;
  subscription_ends_at: string | null;
  monthly_revenue: number;
  total_users: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SystemSetting {
  id: string;
  key: string;
  value: any;
  description: string | null;
  category: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuditLog {
  id: string;
  user_id: string | null;
  action: string;
  resource_type: string | null;
  resource_id: string | null;
  old_values: any;
  new_values: any;
  ip_address: unknown | null;
  user_agent: string | null;
  created_at: string;
}

export interface AdminStats {
  totalUsers: number;
  totalCompanies: number;
  activeSubscriptions: number;
  totalRevenue: number;
  recentSignups: number;
  activeUsersToday: number;
}
