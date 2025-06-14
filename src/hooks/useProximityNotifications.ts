
import { useEffect, useRef } from 'react';
import { useGeolocation } from './useGeolocation';
import { useAddNotification } from './useAddNotification';
import { ProximityService } from '@/services/proximityService';

interface Company {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  cashbackPercentage: number;
  category: string;
}

export const useProximityNotifications = (companies: Company[]) => {
  const { latitude, longitude, error } = useGeolocation();
  const sendNotification = useAddNotification();
  const proximityService = useRef(ProximityService.getInstance());

  useEffect(() => {
    if (!latitude || !longitude || error || companies.length === 0) {
      return;
    }

    const checkInterval = setInterval(() => {
      proximityService.current.checkProximity(
        latitude,
        longitude,
        companies,
        (company, distance) => {
          const distanceText = distance < 50 ? 
            `${Math.round(distance)}m` : 
            `${Math.round(distance)}m`;

          let title = '';
          let message = '';

          if (distance <= 10) {
            title = `🎯 Você chegou na ${company.name}!`;
            message = `Aproveite ${company.cashbackPercentage}% de cashback agora mesmo!`;
          } else if (distance <= 50) {
            title = `🚶‍♂️ Quase lá na ${company.name}!`;
            message = `Só mais ${distanceText}! ${company.cashbackPercentage}% de cashback te esperando.`;
          } else if (distance <= 100) {
            title = `📍 ${company.name} está pertinho!`;
            message = `A apenas ${distanceText} de você. Que tal aproveitar ${company.cashbackPercentage}% de cashback?`;
          }

          sendNotification(
            title,
            message,
            'info',
            '/client/companies',
            {
              autoDismissAfter: 10000, // 10 segundos
              actionData: { companyId: company.id }
            }
          );

          console.log(`Notificação enviada: ${company.name} a ${Math.round(distance)}m`);
        }
      );
    }, 30000); // Verifica a cada 30 segundos

    return () => clearInterval(checkInterval);
  }, [latitude, longitude, companies, error, sendNotification]);

  return {
    userLocation: { latitude, longitude },
    locationError: error,
    isLocationEnabled: !!(latitude && longitude)
  };
};
