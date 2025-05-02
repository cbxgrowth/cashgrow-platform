
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Download, UserPlus, Mail, Phone, Calendar, CreditCard } from 'lucide-react';

const CompanyClients: React.FC = () => {
  // Dados simulados de clientes
  const clients = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@email.com',
      cpf: '123.456.789-00',
      phone: '(11) 98765-4321',
      totalSpent: 'R$ 1.250,00',
      cashbackBalance: 'R$ 62,50',
      registeredAt: '15/02/2025',
      lastPurchase: '01/05/2025',
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      cpf: '987.654.321-00',
      phone: '(11) 91234-5678',
      totalSpent: 'R$ 3.450,00',
      cashbackBalance: 'R$ 172,50',
      registeredAt: '20/01/2025',
      lastPurchase: '28/04/2025',
      status: 'active'
    },
    {
      id: 3,
      name: 'Pedro Santos',
      email: 'pedro.santos@email.com',
      cpf: '456.789.123-00',
      phone: '(11) 92345-6789',
      totalSpent: 'R$ 875,00',
      cashbackBalance: 'R$ 43,75',
      registeredAt: '05/03/2025',
      lastPurchase: '20/04/2025',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Ana Souza',
      email: 'ana.souza@email.com',
      cpf: '321.654.987-00',
      phone: '(11) 93456-7890',
      totalSpent: 'R$ 2.100,00',
      cashbackBalance: 'R$ 105,00',
      registeredAt: '10/02/2025',
      lastPurchase: '05/05/2025',
      status: 'active'
    },
    {
      id: 5,
      name: 'Carlos Pereira',
      email: 'carlos.pereira@email.com',
      cpf: '789.123.456-00',
      phone: '(11) 94567-8901',
      totalSpent: 'R$ 650,00',
      cashbackBalance: 'R$ 32,50',
      registeredAt: '22/03/2025',
      lastPurchase: '15/04/2025',
      status: 'active'
    },
    {
      id: 6,
      name: 'Fernanda Lima',
      email: 'fernanda.lima@email.com',
      cpf: '654.987.321-00',
      phone: '(11) 95678-9012',
      totalSpent: 'R$ 1.800,00',
      cashbackBalance: 'R$ 90,00',
      registeredAt: '18/01/2025',
      lastPurchase: '02/05/2025',
      status: 'active'
    },
    {
      id: 7,
      name: 'Roberto Alves',
      email: 'roberto.alves@email.com',
      cpf: '234.567.890-00',
      phone: '(11) 96789-0123',
      totalSpent: 'R$ 425,00',
      cashbackBalance: 'R$ 21,25',
      registeredAt: '25/03/2025',
      lastPurchase: '10/04/2025',
      status: 'inactive'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
        <Button className="hover-scale bg-gradient-primary">
          <UserPlus className="mr-2 h-4 w-4" /> Adicionar Cliente
        </Button>
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
                        <p className="font-medium">{client.name}</p>
                        <p className="text-xs text-muted-foreground">CPF: {client.cpf}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Cadastro: {client.registeredAt}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {client.email}
                        </p>
                        <p className="text-sm flex items-center gap-1">
                          <Phone className="h-3 w-3" /> {client.phone}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p>{client.totalSpent}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <CreditCard className="h-3 w-3" /> Última: {client.lastPurchase}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {client.cashbackBalance}
                    </TableCell>
                    <TableCell>
                      <Badge className={client.status === 'active' ? 'bg-green-500/20 text-green-600' : 'bg-red-500/20 text-red-600'}>
                        {client.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Ver</Button>
                      <Button variant="ghost" size="sm">Editar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
    </div>
  );
};

export default CompanyClients;
