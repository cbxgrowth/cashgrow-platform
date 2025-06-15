
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, RefreshCw, Clock } from 'lucide-react';
import { useProximityMetrics } from '@/hooks/useProximityMetrics';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ProximityMetricsCardProps {
  companyId: string;
}

export const ProximityMetricsCard: React.FC<ProximityMetricsCardProps> = ({ companyId }) => {
  const { metrics, location, loading, refreshMetrics } = useProximityMetrics(companyId);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Usuários Próximos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!location) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Usuários Próximos
          </CardTitle>
          <CardDescription>
            Configure a localização da sua empresa para ver quantos usuários estão próximos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Vá para Configurações → Perfil para definir a localização da empresa.
          </p>
        </CardContent>
      </Card>
    );
  }

  const getRadiusLabel = (radius: number) => {
    if (radius <= 10) return 'Muito próximos';
    if (radius <= 50) return 'Próximos';
    return 'Na região';
  };

  const getRadiusColor = (radius: number) => {
    if (radius <= 10) return 'bg-green-500';
    if (radius <= 50) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Usuários Próximos
            </CardTitle>
            <CardDescription>
              Veja quantos usuários do app estão na sua região
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={refreshMetrics}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Localização da empresa */}
        <div className="p-3 bg-muted/50 rounded-lg">
          <p className="text-sm font-medium">Localização da empresa:</p>
          <p className="text-sm text-muted-foreground">
            {location.address || `${location.city}, ${location.state}`}
          </p>
        </div>

        {/* Métricas por raio */}
        <div className="space-y-3">
          {metrics.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Nenhuma métrica disponível ainda. Clique em "Atualizar" para calcular.
            </p>
          ) : (
            metrics.map((metric) => (
              <div key={metric.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getRadiusColor(metric.radius_km)}`} />
                  <div>
                    <p className="font-medium">{metric.radius_km}km - {getRadiusLabel(metric.radius_km)}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Atualizado {formatDistanceToNow(new Date(metric.calculated_at), { locale: ptBR, addSuffix: true })}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {metric.user_count} usuários
                </Badge>
              </div>
            ))
          )}
        </div>

        {/* Informações sobre privacidade */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-800">
            💡 Os dados são agregados e anônimos. Apenas usuários que consentiram com o compartilhamento de localização são contabilizados.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
