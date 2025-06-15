
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Save, Loader2 } from 'lucide-react';
import { useProximityMetrics } from '@/hooks/useProximityMetrics';
import { useToast } from '@/hooks/use-toast';

interface CompanyLocationSettingsProps {
  companyId: string;
}

export const CompanyLocationSettings: React.FC<CompanyLocationSettingsProps> = ({ companyId }) => {
  const { location, updateLocation, loading } = useProximityMetrics(companyId);
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    latitude: location?.latitude?.toString() || '',
    longitude: location?.longitude?.toString() || '',
    address: location?.address || '',
    city: location?.city || '',
    state: location?.state || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.latitude || !formData.longitude) {
      toast({
        title: "Erro",
        description: "Latitude e longitude são obrigatórias",
        variant: "destructive"
      });
      return;
    }

    setSaving(true);
    
    try {
      const { error } = await updateLocation({
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
        address: formData.address,
        city: formData.city,
        state: formData.state
      });

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Sucesso",
        description: "Localização da empresa atualizada com sucesso!"
      });
    } catch (err) {
      toast({
        title: "Erro",
        description: err instanceof Error ? err.message : "Erro ao salvar localização",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          }));
          toast({
            title: "Localização obtida",
            description: "Localização atual preenchida nos campos"
          });
        },
        (error) => {
          toast({
            title: "Erro",
            description: "Não foi possível obter a localização atual",
            variant: "destructive"
          });
        }
      );
    } else {
      toast({
        title: "Erro",
        description: "Geolocalização não é suportada neste navegador",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Localização da Empresa</CardTitle>
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Localização da Empresa
        </CardTitle>
        <CardDescription>
          Configure a localização da sua empresa para calcular quantos usuários estão próximos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="latitude">Latitude *</Label>
              <Input
                id="latitude"
                type="number"
                step="any"
                placeholder="-23.5505"
                value={formData.latitude}
                onChange={(e) => setFormData(prev => ({ ...prev, latitude: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="longitude">Longitude *</Label>
              <Input
                id="longitude"
                type="number"
                step="any"
                placeholder="-46.6333"
                value={formData.longitude}
                onChange={(e) => setFormData(prev => ({ ...prev, longitude: e.target.value }))}
                required
              />
            </div>
          </div>

          <Button type="button" variant="outline" onClick={getCurrentLocation}>
            <MapPin className="h-4 w-4 mr-2" />
            Usar Localização Atual
          </Button>

          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              placeholder="Rua, número, bairro"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                placeholder="São Paulo"
                value={formData.city}
                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="state">Estado</Label>
              <Input
                id="state"
                placeholder="SP"
                value={formData.state}
                onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
              />
            </div>
          </div>

          <Button type="submit" disabled={saving}>
            {saving ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Salvar Localização
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
