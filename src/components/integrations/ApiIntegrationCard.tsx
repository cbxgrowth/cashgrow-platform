
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Clock,
  ExternalLink,
  Trash2
} from "lucide-react";
import { toast } from "sonner";

interface ApiIntegration {
  id: string;
  name: string;
  description: string;
  platform: string;
  status: 'connected' | 'disconnected' | 'error' | 'syncing';
  lastSync: string;
  enabled: boolean;
  syncFrequency: string;
  recordsSynced: number;
  icon: React.ReactNode;
  logoUrl?: string;
  brandColor: string;
}

interface ApiIntegrationCardProps {
  integration: ApiIntegration;
  onConfigure: (id: string) => void;
  onSync: (id: string) => void;
  onToggle: (id: string, enabled: boolean) => void;
  onDelete: (id: string) => void;
}

const ApiIntegrationCard: React.FC<ApiIntegrationCardProps> = ({
  integration,
  onConfigure,
  onSync,
  onToggle,
  onDelete
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'disconnected':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'syncing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle2 className="h-4 w-4" />;
      case 'disconnected':
        return <AlertCircle className="h-4 w-4" />;
      case 'error':
        return <AlertCircle className="h-4 w-4" />;
      case 'syncing':
        return <RefreshCw className="h-4 w-4 animate-spin" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleSync = async () => {
    setIsLoading(true);
    try {
      await onSync(integration.id);
      toast.success(`Sincronização iniciada para ${integration.name}`);
    } catch (error) {
      toast.error('Erro ao iniciar sincronização');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = (enabled: boolean) => {
    onToggle(integration.id, enabled);
    toast.success(`Integração ${enabled ? 'ativada' : 'desativada'}`);
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: `${integration.brandColor}20` }}
            >
              {integration.logoUrl ? (
                <img 
                  src={integration.logoUrl} 
                  alt={`${integration.name} logo`}
                  className="w-8 h-8 object-cover rounded"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.appendChild(
                      Object.assign(document.createElement('div'), {
                        innerHTML: integration.icon as any,
                        className: 'flex items-center justify-center'
                      })
                    );
                  }}
                />
              ) : (
                <div style={{ color: integration.brandColor }}>
                  {integration.icon}
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {integration.name}
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: integration.brandColor }}
                  title={`Cor da marca: ${integration.brandColor}`}
                />
              </CardTitle>
              <CardDescription>{integration.description}</CardDescription>
            </div>
          </div>
          <Switch
            checked={integration.enabled}
            onCheckedChange={handleToggle}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge className={`${getStatusColor(integration.status)} flex items-center gap-1`}>
            {getStatusIcon(integration.status)}
            {integration.status === 'connected' ? 'Conectado' :
             integration.status === 'disconnected' ? 'Desconectado' :
             integration.status === 'error' ? 'Erro' : 'Sincronizando'}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {integration.platform}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Última Sync:</span>
            <p className="font-medium">{integration.lastSync}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Frequência:</span>
            <p className="font-medium">{integration.syncFrequency}</p>
          </div>
          <div className="col-span-2">
            <span className="text-muted-foreground">Registros Sincronizados:</span>
            <p className="font-medium">{integration.recordsSynced.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex gap-2 pt-2 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onConfigure(integration.id)}
            className="flex-1"
          >
            <Settings className="h-4 w-4 mr-1" />
            Configurar
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSync}
            disabled={isLoading || integration.status === 'syncing'}
            className="flex-1"
          >
            <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
            Sincronizar
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onDelete(integration.id)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiIntegrationCard;
