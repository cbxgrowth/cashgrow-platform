
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Users, Upload, Calendar, Mail, Phone, DollarSign } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useCompanyClients } from '@/hooks/useCompanyClients';
import CreateClientDialog from './CreateClientDialog';

const CompanyClients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { clients, loading } = useCompanyClients();

  const filteredClients = clients.filter(client =>
    client.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.cpf.includes(searchTerm)
  );

  const activeClients = clients.filter(c => c.account_status === 'active');
  const totalSpent = clients.reduce((sum, c) => sum + c.total_spent, 0);
  const totalCashback = clients.reduce((sum, c) => sum + c.total_cashback, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">Gerencie sua base de clientes</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => navigate('/company/imports/clients')}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Importar CSV
          </Button>
          <Button className="bg-gradient-primary" onClick={() => setCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Novo Cliente
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clients.length}</div>
            <p className="text-xs text-green-600">Base completa</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients.length}</div>
            <p className="text-xs text-green-600">{clients.length > 0 ? Math.round((activeClients.length / clients.length) * 100) : 0}% ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Gasto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              R$ {totalSpent.toFixed(2)}
            </div>
            <p className="text-xs text-green-600">Volume total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {totalCashback.toFixed(2)}
            </div>
            <p className="text-xs text-green-600">Valor retornado</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Base de Clientes</CardTitle>
              <CardDescription>Todos os seus clientes cadastrados</CardDescription>
            </div>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Carregando clientes...</div>
          ) : filteredClients.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {clients.length === 0 ? 'Nenhum cliente cadastrado' : 'Nenhum cliente encontrado'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Cliente</th>
                    <th className="text-left p-4">Contato</th>
                    <th className="text-left p-4">CPF</th>
                    <th className="text-left p-4">Total Gasto</th>
                    <th className="text-left p-4">Cashback</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Última Compra</th>
                    <th className="text-left p-4">Origem</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <span className="font-medium">{client.full_name}</span>
                            <div className="text-sm text-muted-foreground">
                              {client.birth_date && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(client.birth_date).toLocaleDateString('pt-BR')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            {client.email}
                          </div>
                          {client.phone && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              {client.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-mono text-sm">{client.cpf}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          R$ {client.total_spent.toFixed(2)}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-green-600 font-medium">
                          R$ {client.total_cashback.toFixed(2)}
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={client.account_status === 'active' ? 'default' : 'outline'}>
                          {client.account_status === 'active' ? 'Ativo' : 'Pendente'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">
                          {client.last_purchase_at 
                            ? new Date(client.last_purchase_at).toLocaleDateString('pt-BR')
                            : 'Nunca'
                          }
                        </span>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline">
                          {client.created_by_integration ? client.integration_source || 'Integração' : 'Manual'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <CreateClientDialog 
        open={createDialogOpen} 
        onOpenChange={setCreateDialogOpen} 
      />
    </div>
  );
};

export default CompanyClients;
