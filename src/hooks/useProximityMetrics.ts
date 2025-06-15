
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ProximityMetric {
  id: string;
  company_id: string;
  radius_km: number;
  user_count: number;
  calculated_at: string;
}

interface CompanyLocation {
  id: string;
  company_id: string;
  latitude: number;
  longitude: number;
  address: string | null;
  city: string | null;
  state: string | null;
  country: string;
}

export const useProximityMetrics = (companyId?: string) => {
  const [metrics, setMetrics] = useState<ProximityMetric[]>([]);
  const [location, setLocation] = useState<CompanyLocation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = async () => {
    if (!companyId) return;

    try {
      setLoading(true);
      
      // Buscar localização da empresa
      const { data: locationData, error: locationError } = await supabase
        .from('company_locations')
        .select('*')
        .eq('company_id', companyId)
        .single();

      if (locationError && locationError.code !== 'PGRST116') {
        throw locationError;
      }

      setLocation(locationData);

      // Buscar métricas de proximidade
      const { data: metricsData, error: metricsError } = await supabase
        .from('proximity_metrics')
        .select('*')
        .eq('company_id', companyId)
        .order('radius_km', { ascending: true });

      if (metricsError) {
        throw metricsError;
      }

      setMetrics(metricsData || []);
    } catch (err) {
      console.error('Erro ao buscar métricas:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const updateLocation = async (locationData: {
    latitude: number;
    longitude: number;
    address?: string;
    city?: string;
    state?: string;
  }) => {
    if (!companyId) return { error: 'ID da empresa não fornecido' };

    try {
      const { data, error } = await supabase
        .from('company_locations')
        .upsert({
          company_id: companyId,
          ...locationData,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;

      setLocation(data);
      
      // Atualizar métricas após definir localização
      await refreshMetrics();
      
      return { data, error: null };
    } catch (err) {
      console.error('Erro ao atualizar localização:', err);
      return { error: err instanceof Error ? err.message : 'Erro desconhecido' };
    }
  };

  const refreshMetrics = async () => {
    try {
      // Chamar função para recalcular métricas
      const { error } = await supabase.rpc('update_proximity_metrics');
      if (error) throw error;
      
      // Recarregar métricas
      await fetchMetrics();
    } catch (err) {
      console.error('Erro ao atualizar métricas:', err);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [companyId]);

  return {
    metrics,
    location,
    loading,
    error,
    updateLocation,
    refreshMetrics,
    refetch: fetchMetrics
  };
};
