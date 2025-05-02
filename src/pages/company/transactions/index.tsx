
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Download, Plus, Calendar, User, FileText, Check, X } from 'lucide-react';

const CompanyTransactions: React.FC = () => {
  // Dados simulados para transações
  const transactions = [
    {
      id: 'TX12345',
      date: '05/05/2025',
      client: 'João Silva',
      clientId: '001',
      amount: 'R$ 150,00',
      cashback: 'R$ 7,50',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12346',
      date: '04/05/2025',
      client: 'Maria Oliveira',
      clientId: '002',
      amount: 'R$ 320,00',
      cashback: 'R$ 16,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12347',
      date: '04/05/2025',
      client: 'Pedro Santos',
      clientId: '003',
      amount: 'R$ 75,00',
      cashback: 'R$ 3,75',
      cashbackPercentage: '5%',
      status: 'pending',
    },
    {
      id: 'TX12348',
      date: '03/05/2025',
      client: 'Ana Souza',
      clientId: '004',
      amount: 'R$ 250,00',
      cashback: 'R$ 12,50',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12349',
      date: '03/05/2025',
      client: 'Carlos Pereira',
      clientId: '005',
      amount: 'R$ 90,00',
      cashback: 'R$ 4,50',
      cashbackPercentage: '5%',
      status: 'rejected',
    },
    {
      id: 'TX12350',
      date: '02/05/2025',
      client: 'Fernanda Lima',
      clientId: '006',
      amount: 'R$ 180,00',
      cashback: 'R$ 9,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12351',
      date: '02/05/2025',
      client: 'Roberto Alves',
      clientId: '007',
      amount: 'R$ 130,00',
      cashback: 'R$ 6,50',
      cashbackPercentage: '5%',
      status: 'pending',
    },
    {
      id: 'TX12352',
      date: '01/05/2025',
      client: 'João Silva',
      clientId: '001',
      amount: 'R$ 200,00',
      cashback: 'R$ 10,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12353',
      date: '01/05/2025',
      client: 'Maria Oliveira',
      clientId: '002',
      amount: 'R$ 300,00',
      cashback: 'R$ 15,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transações</h1>
        <Button className="hover-scale bg-gradient-primary">
          <Plus className="mr-2 h-4 w-4" /> Nova Transação
        </Button>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Filtrar Transações</CardTitle>
          <CardDescription>
            Utilize os filtros para encontrar transações específicas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="search">Busca</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="ID ou cliente" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-from">Data Inicial</Label>
              <div className="relative">
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="date-from" type="date" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">Data Final</Label>
              <div className="relative">
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="date-to" type="date" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select 
                id="status" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Todos</option>
                <option value="approved">Aprovado</option>
                <option value="pending">Pendente</option>
                <option value="rejected">Rejeitado</option>
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total de Transações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.235</div>
            <p className="text-sm text-muted-foreground">+8% em relação ao período anterior</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Volume Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 52.789,00</div>
            <p className="text-sm text-muted-foreground">+12% em relação ao período anterior</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Cashback Emitido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 2.639,45</div>
            <p className="text-sm text-muted-foreground">5% do volume total de vendas</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Histórico de Transações</CardTitle>
            <CardDescription>
              Visualize e gerencie todas as transações
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="hover-scale">
              <FileText className="mr-2 h-4 w-4" /> Relatório
            </Button>
            <Button variant="outline" size="sm" className="hover-scale">
              <Download className="mr-2 h-4 w-4" /> Exportar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Cashback</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-3 w-3 text-primary" />
                        </div>
                        <span>{transaction.client}</span>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-green-600">{transaction.cashback}</div>
                        <div className="text-xs text-muted-foreground">{transaction.cashbackPercentage}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        transaction.status === 'approved' ? 'bg-green-500/20 text-green-600' :
                        transaction.status === 'pending' ? 'bg-yellow-500/20 text-yellow-600' :
                        'bg-red-500/20 text-red-600'
                      }>
                        {transaction.status === 'approved' ? 'Aprovado' :
                         transaction.status === 'pending' ? 'Pendente' :
                         'Rejeitado'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {transaction.status === 'pending' && (
                          <>
                            <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="ghost">Ver</Button>
                      </div>
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

export default CompanyTransactions;
