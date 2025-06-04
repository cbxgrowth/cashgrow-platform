
export interface Plan {
  id: number;
  name: string;
  price: number;
  cashback_multiplier: number;
  pix_limit_per_month: number;
  priority_support: boolean;
  has_exclusive_campaigns: boolean;
  has_early_access: boolean;
  has_bonus_dates: boolean;
  description: string;
  created_at: string;
}

export interface UserPlan {
  id: number;
  user_id: string;
  plan_id: number;
  start_date: string;
  renewal_date: string | null;
  status: 'active' | 'canceled' | 'expired';
  last_pix_rescue: string | null;
  current_month_pix_count: number;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
  plan?: Plan;
}

export interface CashbackCalculation {
  baseAmount: number;
  multiplier: number;
  finalAmount: number;
  bonusAmount: number;
}
