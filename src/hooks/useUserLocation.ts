
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useGeolocation } from './useGeolocation';

export const useUserLocation = () => {
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [hasLocationStored, setHasLocationStored] = useState(false);
  const [loading, setLoading] = useState(true);
  const { latitude, longitude, error: geoError } = useGeolocation();

  const checkStoredLocation = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('user_proximity_data')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data) {
        setHasLocationStored(true);
        setPrivacyConsent(data.privacy_consent);
      }
    } catch (err) {
      console.error('Erro ao verificar localização:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserLocation = async (consent: boolean) => {
    if (!latitude || !longitude) {
      console.error('Localização não disponível');
      return { error: 'Localização não disponível' };
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return { error: 'Usuário não autenticado' };

      const { data, error } = await supabase
        .from('user_proximity_data')
        .upsert({
          user_id: user.id,
          latitude,
          longitude,
          privacy_consent: consent,
          is_active: true,
          last_updated: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;

      setPrivacyConsent(consent);
      setHasLocationStored(true);

      return { data, error: null };
    } catch (err) {
      console.error('Erro ao atualizar localização do usuário:', err);
      return { error: err instanceof Error ? err.message : 'Erro desconhecido' };
    }
  };

  const revokeLocationConsent = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return { error: 'Usuário não autenticado' };

      const { error } = await supabase
        .from('user_proximity_data')
        .update({
          privacy_consent: false,
          is_active: false
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setPrivacyConsent(false);
      return { error: null };
    } catch (err) {
      console.error('Erro ao revogar consentimento:', err);
      return { error: err instanceof Error ? err.message : 'Erro desconhecido' };
    }
  };

  useEffect(() => {
    checkStoredLocation();
  }, []);

  return {
    privacyConsent,
    hasLocationStored,
    loading,
    updateUserLocation,
    revokeLocationConsent,
    hasGeolocation: !!(latitude && longitude),
    geoError
  };
};
