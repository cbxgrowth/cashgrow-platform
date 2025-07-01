
import { useState, useEffect } from 'react';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

export const useGeolocation = (enableHighAccuracy = true, timeout = 10000, maximumAge = 300000) => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'Geolocalização não é suportada neste navegador',
        loading: false
      }));
      return;
    }

    const options: PositionOptions = {
      enableHighAccuracy,
      timeout,
      maximumAge
    };

    const handleSuccess = (position: GeolocationPosition) => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        loading: false
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      let errorMessage = 'Erro ao obter localização';
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Permissão de localização negada pelo usuário';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Informações de localização indisponíveis';
          break;
        case error.TIMEOUT:
          errorMessage = 'Tempo limite para obter localização excedido';
          break;
      }

      setState(prev => ({
        ...prev,
        error: errorMessage,
        loading: false
      }));
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

    // Opcional: monitorar mudanças de posição
    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      { ...options, maximumAge: 60000 } // Atualiza a cada minuto
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [enableHighAccuracy, timeout, maximumAge]);

  return state;
};
