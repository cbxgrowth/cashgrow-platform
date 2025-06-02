
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Settings, BarChart3, RefreshCw } from "lucide-react";
import { ShoppingBag, Database, CreditCard } from "lucide-react";
import { toast } from "sonner";

import ApiIntegrationCard from '@/components/integrations/ApiIntegrationCard';
import SyncHistoryTable from '@/components/integrations/SyncHistoryTable';
import AddIntegrationDialog from '@/components/integrations/AddIntegrationDialog';

const CompanyIntegrations: React.FC = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [integrations, setIntegrations] = useState([
    {
      id: '1',
      name: 'Loja Principal WooCommerce',
      description: 'Sincronização com loja WordPress',
      platform: 'WooCommerce',
      status: 'connected' as const,
      lastSync: '2 min atrás',
      enabled: true,
      syncFrequency: 'A cada hora',
      recordsSynced: 1250,
      icon: <ShoppingBag className="h-5 w-5 text-purple-600" />
    },
    {
      id: '2',
      name: 'Sistema ERP Interno',
      description: 'Integração com sistema interno',
      platform: 'API Custom',
      status: 'error' as const,
      lastSync: '1 hora atrás',
      enabled: true,
      syncFrequency: 'Tempo real',
      recordsSynced: 890,
      icon: <Database className="h-5 w-5 text-blue-600" />
    },
    {
      id: '3',
      name: 'Gateway de Pagamento',
      description: 'Sincronização de transações',
      platform: 'Stripe',
      status: 'syncing' as const,
      lastSync: 'Agora',
      enabled: true,
      syncFrequency: 'Tempo real',
      recordsSynced: 2340,
      icon: <CreditCard className="h-5 w-5 text-green-600" />
    }
  ]);

  const [syncHistory] = useState([
    {
      id: '1',
      integrationName: 'Loja Principal WooCommerce',
      timestamp: '02/06/2025 15:30',
      status: 'success' as const,
      recordsProcessed: 45,
      duration: '2.3s'
    },
    {
      id: '2',
      integrationName: 'Sistema ERP Interno',
      timestamp: '02/06/2025 14:45',
      status: 'error' as const,
      recordsProcessed: 0,
      duration: '0.5s',
      errorMessage: 'Timeout na conexão'
    },
    {
      id: '3',
      integrationName: 'Gateway de Pagamento',
      timestamp: '02/06/2025 15:31',
      status: 'running' as const,
      recordsProcessed: 23,
      duration: '45s'
    }
  ]);

  const handleConfigureIntegration = (id: string) => {
    toast.info(`Configurando integração ${id}`);
  };

  const handleSyncIntegration = async (id: string) => {
    const integration = integrations.find(i => i.id === id);
    if (integration) {
      setIntegrations(prev => 
        prev.map(i => i.id === id ? { ...i, status: 'syncing' as const } : i)
      );

      // Simulate sync process
      setTimeout(() => {
        setIntegrations(prev => 
          prev.map(i => i.id === id ? { 
            ...i, 
            status: 'connected' as const,
            lastSync: 'Agora'
          } : i)
        );
      }, 3000);
    }
  };

  const handleToggleIntegration = (id: string, enabled: boolean) => {
    setIntegrations(prev => 
      prev.map(i => i.id === id ? { ...i, enabled } : i)
    );
  };

  const handleDeleteIntegration = (id: string) => {
    setIntegrations(prev => prev.filter(i => i.id !== id));
    toast.success('Integração removida');
  };

  const handleAddIntegration = (newIntegration: any) => {
    const integration = {
      id: Date.now().toString(),
      ...newIntegration,
      status: 'disconnected' as const,
      lastSync: 'Nunca',
      enabled: false,
      recordsSynced: 0
    };

    setIntegrations(prev => [...prev, integration]);
  };

  const handleViewSyncDetails = (id: string) => {
    toast.info(`Visualizando detalhes da sincronização ${id}`);
  };

  const handleSyncAll = () => {
    const enabledIntegrations = integrations.filter(i => i.enabled);
    enabledIntegrations.forEach(integration => {
      handleSyncIntegration(integration.id);
    });
    toast.success(`Sincronização iniciada para ${enabledIntegrations.length} integrações`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Integrações</h1>
          <p className="text-muted-foreground">
            Gerencie as integrações com sistemas externos e sincronização de dados
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSyncAll} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sincronizar Tudo
          </Button>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Integração
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Integrações</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{integrations.length}</div>
            <p className="text-xs text-muted-foreground">
              {integrations.filter(i => i.enabled).length} ativas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {integrations.filter(i => i.status === 'connected').length}
            </div>
            <p className="text-xs text-muted-foreground">
              conectadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registros Sincronizados</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {integrations.reduce((sum, i) => sum + i.recordsSynced, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              no total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Última Sincronização</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 min</div>
            <p className="text-xs text-muted-foreground">
              atrás
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="integrations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="integrations">Integrações Ativas</TabsTrigger>
          <TabsTrigger value="history">Histórico de Sincronização</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <ApiIntegrationCard
                key={integration.id}
                integration={integration}
                onConfigure={handleConfigureIntegration}
                onSync={handleSyncIntegration}
                onToggle={handleToggleIntegration}
                onDelete={handleDeleteIntegration}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Sincronizações</CardTitle>
              <CardDescription>
                Acompanhe todas as sincronizações realizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SyncHistoryTable 
                records={syncHistory}
                onViewDetails={handleViewSyncDetails}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddIntegrationDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAdd={handleAddIntegration}
      />
    </div>
  );
};

export default CompanyIntegrations;
