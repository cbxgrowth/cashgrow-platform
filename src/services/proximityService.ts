
interface Company {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  cashbackPercentage: number;
  category: string;
}

export class ProximityService {
  private static instance: ProximityService;
  private notifiedCompanies = new Set<string>();

  static getInstance(): ProximityService {
    if (!ProximityService.instance) {
      ProximityService.instance = new ProximityService();
    }
    return ProximityService.instance;
  }

  // Calcula distância entre dois pontos usando a fórmula de Haversine
  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // Raio da Terra em km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Distância em metros
    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  checkProximity(
    userLat: number,
    userLon: number,
    companies: Company[],
    onNotify: (company: Company, distance: number) => void
  ): void {
    companies.forEach((company) => {
      const distance = this.calculateDistance(
        userLat,
        userLon,
        company.latitude,
        company.longitude
      );

      // Verifica se está dentro das distâncias de interesse (100m, 50m, 10m)
      const notificationDistances = [100, 50, 10];
      
      for (const targetDistance of notificationDistances) {
        const notificationKey = `${company.id}-${targetDistance}`;
        
        if (distance <= targetDistance && !this.notifiedCompanies.has(notificationKey)) {
          this.notifiedCompanies.add(notificationKey);
          onNotify(company, distance);
          break; // Só notifica uma vez por empresa
        }
      }

      // Remove da lista de notificados se o usuário se afastou muito (>200m)
      if (distance > 200) {
        notificationDistances.forEach(d => {
          this.notifiedCompanies.delete(`${company.id}-${d}`);
        });
      }
    });
  }

  resetNotifications(): void {
    this.notifiedCompanies.clear();
  }
}
