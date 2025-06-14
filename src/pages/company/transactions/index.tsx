
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, ArrowUpRight, ArrowDownRight, Filter } from "lucide-react";

const CompanyTransactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const transactions = [
    { id: 1, client: 'Ana Silva', type: 'purchase', amount: 250.00, cashback: 12.50, date: '2024-06-14', status: 'Concluído' },
    { id: 2, client: 'Carlos Santos', type: 'refund', amount: -80.00, cashback: -4.00, date: '2024-06-13', status: 'Processado' },
    { id: 3, client: 'Mariana Costa', type: 'purchase', amount: 450.00, cashback: 22.50, date: '2024-06-12', status: 'Pendente' },
    { id: 4, client: 'Pedro Lima', type: 'purchase', amount: 180.00, cashback: 9.00, date: '2024-06-11', status: 'Concluído' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transações</h1>
          <p className="text-muted-foreground">Histórico completo de transações</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Filtrar Período
          </Button>
          <Button className="bg-gradient-primary">
            Exportar Relatório
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Volume Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 127.450</div>
            <p className="text-xs text-green-600">+18% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 6.372</div>
            <p className="text-xs text-green-600">+15% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Transações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.847</div>
            <p className="text-xs text-green-600">+22% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 89,50</div>
            <p className="text-xs text-green-600">+5% este mês</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Todas as Transações</CardTitle>
              <CardDescription>Histórico detalhado de transações</CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar transações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="completed">Concluído</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="processed">Processado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Cliente</th>
                  <th className="text-left p-4">Tipo</th>
                  <th className="text-left p-4">Valor</th>
                  <th className="text-left p-4">Cashback</th>
                  <th className="text-left p-4">Data</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {transaction.client.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium">{transaction.client}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {transaction.type === 'purchase' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                        {transaction.type === 'purchase' ? 'Compra' : 'Estorno'}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                        R$ {Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={transaction.cashback > 0 ? 'text-green-600' : 'text-red-600'}>
                        R$ {Math.abs(transaction.cashback).toFixed(2)}
                      </span>
                    </td>
                    <td className="p-4">
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="p-4">
                      <Badge variant={
                        transaction.status === 'Concluído' ? 'default' : 
                        transaction.status === 'Pendente' ? 'secondary' : 'outline'
                      }>
                        {transaction.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyTransactions;
