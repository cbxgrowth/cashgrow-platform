
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, Filter, Download, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const ClientTransactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('all');

  const transactions = [
    { id: 1, type: 'cashback', store: 'Mercado Verde', amount: '+R$ 15,30', date: '2025-06-14', status: 'Concluído', category: 'Alimentação' },
    { id: 2, type: 'withdrawal', store: 'Resgate PIX', amount: '-R$ 100,00', date: '2025-06-13', status: 'Processando', category: 'Resgate' },
    { id: 3, type: 'cashback', store: 'Farmácia Saúde', amount: '+R$ 8,75', date: '2025-06-12', status: 'Concluído', category: 'Saúde' },
    { id: 4, type: 'cashback', store: 'Tech Store', amount: '+R$ 42,50', date: '2025-06-11', status: 'Concluído', category: 'Tecnologia' },
    { id: 5, type: 'cashback', store: 'Moda Express', amount: '+R$ 23,80', date: '2025-06-10', status: 'Concluído', category: 'Vestuário' },
    { id: 6, type: 'withdrawal', store: 'Resgate Cartão', amount: '-R$ 50,00', date: '2025-06-09', status: 'Concluído', category: 'Resgate' },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              📊 Minhas Transações
            </h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Histórico completo de cashback e resgates
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            <Card className="w-full min-w-0">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="text-xs sm:text-sm text-muted-foreground">Este Mês</CardTitle>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">+R$ 186,45</div>
              </CardHeader>
            </Card>
            
            <Card className="w-full min-w-0">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="text-xs sm:text-sm text-muted-foreground">Total Ganho</CardTitle>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">R$ 2.847,90</div>
              </CardHeader>
            </Card>
            
            <Card className="w-full min-w-0">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="text-xs sm:text-sm text-muted-foreground">Resgatado</CardTitle>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">R$ 1.250,00</div>
              </CardHeader>
            </Card>
            
            <Card className="w-full min-w-0">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="text-xs sm:text-sm text-muted-foreground">Transações</CardTitle>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">127</div>
              </CardHeader>
            </Card>
          </div>

          {/* Filters */}
          <Card className="w-full min-w-0">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por loja ou categoria..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
                
                <div className="flex gap-2 sm:gap-3">
                  <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                    <SelectTrigger className="w-full sm:w-32">
                      <SelectValue placeholder="Período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="today">Hoje</SelectItem>
                      <SelectItem value="week">7 dias</SelectItem>
                      <SelectItem value="month">30 dias</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="icon" className="flex-shrink-0">
                    <Filter className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" className="flex-shrink-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Transactions List */}
          <Card className="w-full min-w-0">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg lg:text-xl">Histórico de Transações</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 sm:p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors w-full min-w-0">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        transaction.type === 'cashback' ? 'bg-green-100' : 'bg-orange-100'
                      }`}>
                        {transaction.type === 'cashback' ? (
                          <ArrowDownLeft className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-sm sm:text-base truncate">{transaction.store}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                {new Date(transaction.date).toLocaleDateString('pt-BR')}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {transaction.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="text-left sm:text-right flex-shrink-0">
                            <p className={`font-bold text-sm sm:text-base ${
                              transaction.type === 'cashback' ? 'text-green-600' : 'text-orange-600'
                            }`}>
                              {transaction.amount}
                            </p>
                            <Badge 
                              variant={transaction.status === 'Concluído' ? 'default' : 'secondary'} 
                              className="text-xs mt-1"
                            >
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="w-full sm:w-auto">
                  Carregar mais transações
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientTransactions;
