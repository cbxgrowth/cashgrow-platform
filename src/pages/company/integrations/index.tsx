
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Settings, BarChart3, RefreshCw, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import ApiIntegrationCard from '@/components/integrations/ApiIntegrationCard';
import SyncHistoryTable from '@/components/integrations/SyncHistoryTable';
import AddIntegrationDialog from '@/components/integrations/AddIntegrationDialog';
import { useIntegrations } from '@/hooks/useIntegrations';
import { integrationCategories } from '@/data/integrations';

const CompanyIntegrations: React.FC = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const {
    integrations,
    isLoading,
    handleConfigureIntegration,
    handleSyncIntegration,
    handleToggleIntegration,
    handleDeleteIntegration,
    handleAddIntegration,
    handleSyncAll
  } = useIntegrations();

  const [syncHistory] = useState([
    {
      id: '1',
      integrationName: 'WooCommerce',
      timestamp: '02/06/2025 15:30',
      status: 'success' as const,
      recordsProcessed: 45,
      duration: '2.3s'
    },
    {
      id: '2',
      integrationName: 'Stone Pagamentos',
      timestamp: '02/06/2025 14:45',
      status: 'error' as const,
      recordsProcessed: 0,
      duration: '0.5s',
      errorMessage: 'Timeout na conexão'
    },
    {
      id: '3',
      integrationName: 'WhatsApp Business',
      timestamp: '02/06/2025 15:31',
      status: 'running' as const,
      recordsProcessed: 23,
      duration: '45s'
    }
  ]);

  const handleViewSyncDetails = (id: string) => {
    console.log(`Visualizando detalhes da sincronização ${id}`);
  };

  const filteredIntegrations = integrations.filter(integration => {
    const categoryMatch = selectedCategory === 'all' || integration.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || integration.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const getStatsForCategory = (category: string) => {
    const categoryIntegrations = category === 'all' 
      ? integrations 
      : integrations.filter(i => i.category === category);
    
    return {
      total: categoryIntegrations.length,
      connected: categoryIntegrations.filter(i => i.status === 'connected').length,
      enabled: categoryIntegrations.filter(i => i.enabled).length,
      totalRecords: categoryIntegrations.reduce((sum, i) => sum + i.recordsSynced, 0)
    };
  };

  const stats = getStatsForCategory(selectedCategory);

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
          <Button onClick={handleSyncAll} variant="outline" disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Sincronizar Tudo
          </Button>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Integração
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filtros:</span>
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Todas as categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as categorias</SelectItem>
            {integrationCategories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Todos os status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="connected">Conectado</SelectItem>
            <SelectItem value="disconnected">Desconectado</SelectItem>
            <SelectItem value="error">Erro</SelectItem>
            <SelectItem value="syncing">Sincronizando</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Integrações</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.enabled} ativas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conectadas</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.connected}
            </div>
            <p className="text-xs text-muted-foreground">
              funcionando
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
              {stats.totalRecords.toLocaleString()}
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

      {/* Category Badges */}
      <div className="flex gap-2 flex-wrap">
        {integrationCategories.map((category) => {
          const categoryStats = getStatsForCategory(category.id);
          return (
            <Badge 
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="h-3 w-3 mr-1" />
              {category.name} ({categoryStats.total})
            </Badge>
          );
        })}
      </div>

      <Tabs defaultValue="integrations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="integrations">Integrações Ativas</TabsTrigger>
          <TabsTrigger value="history">Histórico de Sincronização</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((integration) => (
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
          
          {filteredIntegrations.length === 0 && (
            <Card className="p-8 text-center">
              <CardContent>
                <p className="text-muted-foreground">
                  Nenhuma integração encontrada com os filtros selecionados.
                </p>
                <Button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedStatus('all');
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          )}
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
