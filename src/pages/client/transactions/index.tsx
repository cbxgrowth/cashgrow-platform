
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Search } from "lucide-react";

const ClientTransactions: React.FC = () => {
  // Dados simulados para a tabela de transações
  const transactionsData = [
    { id: 1, date: '20/05/2025', company: 'Mercado Verde', amount: 'R$ 150,00', cashback: 'R$ 7,50', status: 'Aprovado' },
    { id: 2, date: '18/05/2025', company: 'Farmácia Saúde', amount: 'R$ 80,00', cashback: 'R$ 4,00', status: 'Aprovado' },
    { id: 3, date: '15/05/2025', company: 'Tech Store', amount: 'R$ 1.200,00', cashback: 'R$ 60,00', status: 'Aprovado' },
    { id: 4, date: '10/05/2025', company: 'Moda Express', amount: 'R$ 350,00', cashback: 'R$ 17,50', status: 'Pendente' },
    { id: 5, date: '05/05/2025', company: 'Padaria Delícia', amount: 'R$ 45,00', cashback: 'R$ 2,25', status: 'Aprovado' },
    { id: 6, date: '01/05/2025', company: 'Mercado Verde', amount: 'R$ 120,00', cashback: 'R$ 6,00', status: 'Aprovado' },
    { id: 7, date: '28/04/2025', company: 'Farmácia Saúde', amount: 'R$ 65,00', cashback: 'R$ 3,25', status: 'Aprovado' },
    { id: 8, date: '25/04/2025', company: 'Tech Store', amount: 'R$ 500,00', cashback: 'R$ 25,00', status: 'Rejeitado' },
    { id: 9, date: '20/04/2025', company: 'Restaurante Bom Sabor', amount: 'R$ 180,00', cashback: 'R$ 18,00', status: 'Aprovado' },
    { id: 10, date: '15/04/2025', company: 'Livraria Cultura', amount: 'R$ 95,00', cashback: 'R$ 4,75', status: 'Aprovado' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Histórico de Transações</h1>
        <Button variant="outline" size="sm" className="hover-scale">
          <Calendar className="mr-2 h-4 w-4" /> Últimos 30 dias
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
                <Input id="search" placeholder="Empresa ou ID" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-from">Data inicial</Label>
              <Input id="date-from" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">Data final</Label>
              <Input id="date-to" type="date" />
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

      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Todas as Transações</CardTitle>
            <CardDescription>
              Um total de {transactionsData.length} transações encontradas
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
                  <TableHead>Data</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Cashback</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactionsData.map((transaction) => (
                  <TableRow key={transaction.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.company}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell className="text-green-600 font-medium">{transaction.cashback}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        transaction.status === 'Aprovado' ? 'bg-green-100 text-green-800' : 
                        transaction.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
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

export default ClientTransactions;
