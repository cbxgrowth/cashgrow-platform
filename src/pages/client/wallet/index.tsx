
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, TrendingUp, DollarSign, History, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const ClientWalletPage: React.FC = () => {
  const walletData = {
    balance: 2847.90,
    pendingCashback: 156.30,
    totalEarned: 5420.75,
    transactions: [
      { id: 1, type: 'earned', amount: 45.80, description: 'Cashback TechStore', date: '2024-01-15', status: 'confirmed' },
      { id: 2, type: 'used', amount: -120.00, description: 'Compra Fashion Plus', date: '2024-01-14', status: 'completed' },
      { id: 3, type: 'earned', amount: 23.50, description: 'Cashback SuperMercado', date: '2024-01-13', status: 'pending' },
      { id: 4, type: 'earned', amount: 67.20, description: 'Cashback ElectroShop', date: '2024-01-12', status: 'confirmed' },
    ]
  };

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Carteira</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie seu saldo de cashback e histórico de transações
        </p>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <Wallet className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">
              R$ {walletData.balance.toFixed(2)}
            </div>
            <p className="text-xs text-green-600 mt-1">
              Pronto para usar
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback Pendente</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-700">
              R$ {walletData.pendingCashback.toFixed(2)}
            </div>
            <p className="text-xs text-yellow-600 mt-1">
              Aguardando confirmação
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ganho</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">
              R$ {walletData.totalEarned.toFixed(2)}
            </div>
            <p className="text-xs text-blue-600 mt-1">
              Desde o início
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Ações rápidas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Ações Rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <Button className="h-auto p-4 flex flex-col items-center gap-2">
              <ArrowUpRight className="h-5 w-5" />
              <span>Transferir PIX</span>
              <span className="text-xs opacity-70">Envie para sua conta</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <History className="h-5 w-5" />
              <span>Ver Histórico</span>
              <span className="text-xs opacity-70">Todas as transações</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>Relatórios</span>
              <span className="text-xs opacity-70">Análise detalhada</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Histórico de transações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Transações Recentes
          </CardTitle>
          <CardDescription>
            Acompanhe seus ganhos e gastos de cashback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {walletData.transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'earned' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'earned' ? (
                      <ArrowDownRight className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'earned' ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <Badge variant={transaction.status === 'confirmed' ? 'default' : 'secondary'}>
                    {transaction.status === 'confirmed' ? 'Confirmado' : 
                     transaction.status === 'pending' ? 'Pendente' : 'Concluído'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientWalletPage;
