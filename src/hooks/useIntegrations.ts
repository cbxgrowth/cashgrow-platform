
import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { defaultIntegrations, Integration } from '@/data/integrations';

export const useIntegrations = () => {
  const [integrations, setIntegrations] = useState<Integration[]>(defaultIntegrations);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfigureIntegration = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(`Configuração da integração ${id} iniciada`);
    } catch (error) {
      toast.error('Erro ao configurar integração');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSyncIntegration = useCallback(async (id: string) => {
    const integration = integrations.find(i => i.id === id);
    if (!integration) return;

    setIntegrations(prev => 
      prev.map(i => i.id === id ? { ...i, status: 'syncing' as const } : i)
    );

    try {
      // Simulate sync process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setIntegrations(prev => 
        prev.map(i => i.id === id ? { 
          ...i, 
          status: 'connected' as const,
          lastSync: 'Agora',
          recordsSynced: i.recordsSynced + Math.floor(Math.random() * 50) + 10
        } : i)
      );
      
      toast.success(`Sincronização da ${integration.name} concluída`);
    } catch (error) {
      setIntegrations(prev => 
        prev.map(i => i.id === id ? { ...i, status: 'error' as const } : i)
      );
      toast.error('Erro na sincronização');
    }
  }, [integrations]);

  const handleToggleIntegration = useCallback((id: string, enabled: boolean) => {
    setIntegrations(prev => 
      prev.map(i => i.id === id ? { ...i, enabled } : i)
    );
    toast.success(`Integração ${enabled ? 'ativada' : 'desativada'}`);
  }, []);

  const handleDeleteIntegration = useCallback((id: string) => {
    setIntegrations(prev => prev.filter(i => i.id !== id));
    toast.success('Integração removida');
  }, []);

  const handleAddIntegration = useCallback((newIntegration: Partial<Integration>) => {
    const integration: Integration = {
      id: Date.now().toString(),
      name: newIntegration.name || '',
      description: newIntegration.description || '',
      platform: newIntegration.platform || '',
      category: newIntegration.category || 'ecommerce',
      status: 'disconnected',
      lastSync: 'Nunca',
      enabled: false,
      syncFrequency: newIntegration.syncFrequency || 'A cada hora',
      recordsSynced: 0,
      icon: newIntegration.icon || null,
      setupInstructions: newIntegration.setupInstructions || '',
      apiEndpoint: newIntegration.apiEndpoint,
      webhookSupport: newIntegration.webhookSupport || false
    };

    setIntegrations(prev => [...prev, integration]);
    toast.success('Nova integração adicionada');
  }, []);

  const handleSyncAll = useCallback(() => {
    const enabledIntegrations = integrations.filter(i => i.enabled);
    enabledIntegrations.forEach(integration => {
      handleSyncIntegration(integration.id);
    });
    toast.success(`Sincronização iniciada para ${enabledIntegrations.length} integrações`);
  }, [integrations, handleSyncIntegration]);

  return {
    integrations,
    isLoading,
    handleConfigureIntegration,
    handleSyncIntegration,
    handleToggleIntegration,
    handleDeleteIntegration,
    handleAddIntegration,
    handleSyncAll
  };
};
