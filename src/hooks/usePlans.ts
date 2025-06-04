
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Plan, UserPlan } from '@/types/plans';
import { toast } from 'sonner';

export const usePlans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [userPlan, setUserPlan] = useState<UserPlan | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('price', { ascending: true });

      if (error) throw error;
      setPlans(data || []);
    } catch (error) {
      console.error('Error fetching plans:', error);
      toast.error('Erro ao carregar planos');
    }
  };

  const fetchUserPlan = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('user_plans')
        .select(`
          *,
          plan:plans(*)
        `)
        .eq('user_id', user.id)
        .eq('status', 'active')
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      
      // Garantir que o status seja do tipo correto
      if (data) {
        const userPlanData = {
          ...data,
          status: data.status as 'active' | 'canceled' | 'expired'
        };
        setUserPlan(userPlanData);
      }
    } catch (error) {
      console.error('Error fetching user plan:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchPlans(), fetchUserPlan()]);
      setLoading(false);
    };

    loadData();
  }, []);

  const calculateCashback = (baseAmount: number, plan?: Plan) => {
    const multiplier = plan?.cashback_multiplier || 1.0;
    const finalAmount = baseAmount * multiplier;
    const bonusAmount = finalAmount - baseAmount;

    return {
      baseAmount,
      multiplier,
      finalAmount,
      bonusAmount
    };
  };

  const canRescuePix = (userPlan: UserPlan | null) => {
    if (!userPlan) return false;
    
    const plan = userPlan.plan as Plan;
    if (plan?.name === 'Premium') return true;
    
    return userPlan.current_month_pix_count < (plan?.pix_limit_per_month || 1);
  };

  return {
    plans,
    userPlan,
    loading,
    fetchUserPlan,
    calculateCashback,
    canRescuePix
  };
};
