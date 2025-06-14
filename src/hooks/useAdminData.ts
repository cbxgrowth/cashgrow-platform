
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Company, Profile, SystemSetting, AuditLog, AdminStats } from '@/types/admin';

export const useAdminData = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [users, setUsers] = useState<Profile[]>([]);
  const [settings, setSettings] = useState<SystemSetting[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCompanies = async () => {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setCompanies(data || []);
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setUsers(data || []);
  };

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from('system_settings')
      .select('*')
      .order('category', { ascending: true });

    if (!error) setSettings(data || []);
  };

  const fetchAuditLogs = async () => {
    const { data, error } = await supabase
      .from('audit_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (!error) setAuditLogs(data || []);
  };

  const fetchStats = async () => {
    // Fetch statistics
    const [companiesRes, usersRes, subscriptionsRes] = await Promise.all([
      supabase.from('companies').select('id, monthly_revenue'),
      supabase.from('profiles').select('id, created_at'),
      supabase.from('companies').select('id').eq('subscription_status', 'active')
    ]);

    const totalRevenue = companiesRes.data?.reduce((sum, company) => 
      sum + (company.monthly_revenue || 0), 0) || 0;

    const recentSignups = usersRes.data?.filter(user => {
      const created = new Date(user.created_at);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return created > weekAgo;
    }).length || 0;

    setStats({
      totalUsers: usersRes.data?.length || 0,
      totalCompanies: companiesRes.data?.length || 0,
      activeSubscriptions: subscriptionsRes.data?.length || 0,
      totalRevenue,
      recentSignups,
      activeUsersToday: Math.floor(Math.random() * 50) // Mock data
    });
  };

  const updateSetting = async (id: string, value: any) => {
    const { error } = await supabase
      .from('system_settings')
      .update({ value, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (!error) {
      fetchSettings();
    }
    return { error };
  };

  const updateCompanyStatus = async (id: string, status: Company['subscription_status']) => {
    const { error } = await supabase
      .from('companies')
      .update({ subscription_status: status })
      .eq('id', id);

    if (!error) {
      fetchCompanies();
    }
    return { error };
  };

  const updateUserRole = async (id: string, role: Profile['role']) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role })
      .eq('id', id);

    if (!error) {
      fetchUsers();
    }
    return { error };
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([
        fetchCompanies(),
        fetchUsers(),
        fetchSettings(),
        fetchAuditLogs(),
        fetchStats()
      ]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  return {
    companies,
    users,
    settings,
    auditLogs,
    stats,
    loading,
    updateSetting,
    updateCompanyStatus,
    updateUserRole,
    refreshData: () => {
      fetchCompanies();
      fetchUsers();
      fetchSettings();
      fetchAuditLogs();
      fetchStats();
    }
  };
};
