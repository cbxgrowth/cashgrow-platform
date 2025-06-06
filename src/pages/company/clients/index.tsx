
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Download, UserPlus, Mail, Phone, Calendar, CreditCard, Database, Plus } from 'lucide-react';
import { useCompanyClients } from '@/hooks/useCompanyClients';
import AddClientDialog from '@/components/company/AddClientDialog';
import AddTransactionDialog from '@/components/company/AddTransactionDialog';
import ERPIntegrationDialog from '@/components/company/ERPIntegrationDialog';

const CompanyClients: React.FC = () => {
  const { clients, loading } = useCompanyClients();
  const [showAddClientDialog, setShowAddClientDialog] = useState(false);
  const [showAddTransactionDialog, setShowAddTransactionDialog] = useState(false);
  const [showERPDialog, setShowERPDialog] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  const handleAddTransaction = (client: any) => {
    setSelectedClient(client);
    setShowAddTransactionDialog(true);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'active': { label: 'Ativo', className: 'bg-green-500/20 text-green-600' },
      'pending': { label: 'Pendente', className: 'bg-yellow-500/20 text-yellow-600' },
      'inactive': { label: 'Inativo', className: 'bg-red-500/20 text-red-600' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setShowERPDialog(true)}
            className="hover-scale"
          >
            <Database className="mr-2 h-4 w-4" /> 
            Integração ERP/CRM
          </Button>
          <Button 
            onClick={() => setShowAddClientDialog(true)}
            className="hover-scale bg-gradient-primary"
          >
            <UserPlus className="mr-2 h-4 w-4" /> 
            Cadastrar Cliente
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clients.length}</div>
            <p className="text-xs text-muted-foreground">
              cadastrados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {clients.filter(c => c.account_status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              com conta ativa
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Faturado</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {clients.reduce((sum, c) => sum + c.total_spent, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              em vendas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback Concedido</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              R$ {clients.reduce((sum, c) => sum + c.total_cashback, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              em benefícios
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Filtrar Clientes</CardTitle>
          <CardDescription>
            Utilize os filtros para encontrar clientes específicos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="search">Busca</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="Nome, e-mail ou CPF" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="registered-from">Data de Cadastro</Label>
              <Input id="registered-from" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spent-min">Gasto Mínimo (R$)</Label>
              <Input id="spent-min" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select 
                id="status" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Todos</option>
                <option value="active">Ativo</option>
                <option value="pending">Pendente</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="hover-scale">
              Aplicar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Todos os Clientes</CardTitle>
            <CardDescription>
              Um total de {clients.length} clientes encontrados
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="hover-scale">
            <Download className="mr-2 h-4 w-4" /> Exportar
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <p>Carregando clientes...</p>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Total de Gastos</TableHead>
                    <TableHead>Cashback</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell>
                        <div>
                          <p className="font-medium">{client.full_name}</p>
                          <p className="text-xs text-muted-foreground">CPF: {client.cpf}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> 
                            Cadastro: {new Date(client.created_at).toLocaleDateString('pt-BR')}
                          </p>
                          {client.created_by_integration && (
                            <Badge variant="outline" className="mt-1">
                              <Database className="h-3 w-3 mr-1" />
                              {client.integration_source}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm flex items-center gap-1">
                            <Mail className="h-3 w-3" /> {client.email}
                          </p>
                          {client.phone && (
                            <p className="text-sm flex items-center gap-1">
                              <Phone className="h-3 w-3" /> {client.phone}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>R$ {client.total_spent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                          {client.last_purchase_at && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <CreditCard className="h-3 w-3" /> 
                              Última: {new Date(client.last_purchase_at).toLocaleDateString('pt-BR')}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        R$ {client.total_cashback.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(client.account_status)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleAddTransaction(client)}
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            Compra
                          </Button>
                          <Button variant="ghost" size="sm">Ver</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          {!loading && clients.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <UserPlus className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Nenhum cliente cadastrado ainda.</p>
              <p className="text-sm">Comece cadastrando seu primeiro cliente!</p>
            </div>
          )}

          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm" className="hover-scale">
              Anterior
            </Button>
            <Button variant="outline" size="sm" className="hover-scale">
              Próximo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dialogs */}
      <AddClientDialog 
        open={showAddClientDialog} 
        onOpenChange={setShowAddClientDialog} 
      />
      
      <AddTransactionDialog 
        open={showAddTransactionDialog} 
        onOpenChange={setShowAddTransactionDialog}
        client={selectedClient}
      />
      
      <ERPIntegrationDialog 
        open={showERPDialog} 
        onOpenChange={setShowERPDialog} 
      />
    </div>
  );
};

export default CompanyClients;
