
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, User, Check, X } from 'lucide-react';
import { useTransactions } from '../hooks/useTransactions';

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
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
  );
};

export default TransactionsTable;
