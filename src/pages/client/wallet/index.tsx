
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, CreditCard, TrendingUp, ArrowUpRight, ArrowDownLeft, History, Plus } from "lucide-react";

const ClientWallet: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              💳 Minha Carteira
            </h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Gerencie seu saldo e transações
            </p>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
            <Card className="bg-gradient-to-r from-primary to-purple-600 text-white w-full min-w-0">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-base sm:text-lg lg:text-xl truncate">Saldo Disponível</CardTitle>
                    <CardDescription className="text-white/80 text-xs sm:text-sm">
                      Para resgate imediato
                    </CardDescription>
                  </div>
                  <Wallet className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">R$ 2.847,90</div>
                <Button variant="secondary" className="w-full">
                  Resgatar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="w-full min-w-0">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-base sm:text-lg lg:text-xl truncate">Cashback do Mês</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Acumulado em junho
                    </CardDescription>
                  </div>
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">R$ 186,45</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  +12% vs mês anterior
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 px-2 sm:px-4">
              <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm font-medium">Adicionar</span>
            </Button>
            
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 px-2 sm:px-4">
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm font-medium">Transferir</span>
            </Button>
            
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 px-2 sm:px-4">
              <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm font-medium">Cartão</span>
            </Button>
            
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 px-2 sm:px-4">
              <History className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm font-medium">Histórico</span>
            </Button>
          </div>

          {/* Recent Transactions */}
          <Card className="w-full min-w-0">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-base sm:text-lg lg:text-xl truncate">Transações Recentes</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Últimas movimentações
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="flex-shrink-0">
                  Ver todas
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {[
                  { type: 'in', store: 'Mercado Verde', amount: '+R$ 15,30', date: 'Hoje', status: 'Concluído' },
                  { type: 'out', store: 'Resgate PIX', amount: '-R$ 100,00', date: 'Ontem', status: 'Processando' },
                  { type: 'in', store: 'Farmácia Saúde', amount: '+R$ 8,75', date: '2 dias', status: 'Concluído' },
                  { type: 'in', store: 'Tech Store', amount: '+R$ 42,50', date: '3 dias', status: 'Concluído' },
                ].map((transaction, i) => (
                  <div key={i} className="flex items-center justify-between p-3 sm:p-4 bg-muted/30 rounded-lg w-full min-w-0">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        transaction.type === 'in' ? 'bg-green-100' : 'bg-orange-100'
                      }`}>
                        {transaction.type === 'in' ? (
                          <ArrowDownLeft className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm sm:text-base truncate">{transaction.store}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs sm:text-sm text-muted-foreground">{transaction.date}</p>
                          <Badge variant={transaction.status === 'Concluído' ? 'default' : 'secondary'} className="text-xs">
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className={`font-bold text-sm sm:text-base ${
                        transaction.type === 'in' ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {transaction.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            <Card className="w-full min-w-0">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-sm sm:text-base text-muted-foreground">Total Resgatado</CardTitle>
                <div className="text-xl sm:text-2xl font-bold">R$ 1.250,00</div>
              </CardHeader>
            </Card>
            
            <Card className="w-full min-w-0">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-sm sm:text-base text-muted-foreground">Maior Cashback</CardTitle>
                <div className="text-xl sm:text-2xl font-bold">R$ 89,30</div>
              </CardHeader>
            </Card>
            
            <Card className="w-full min-w-0 sm:col-span-2 lg:col-span-1">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-sm sm:text-base text-muted-foreground">Lojas Ativas</CardTitle>
                <div className="text-xl sm:text-2xl font-bold">12</div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWallet;
