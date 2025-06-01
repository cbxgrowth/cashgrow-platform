
import React from 'react';
import WalletOverview from '@/components/client/WalletOverview';
import CashbackCalculator from '@/components/client/CashbackCalculator';

const ClientWallet: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Carteira</h1>
        <p className="text-muted-foreground">
          Gerencie seus ganhos de cashback e faça simulações
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WalletOverview />
        </div>
        <div>
          <CashbackCalculator />
        </div>
      </div>
    </div>
  );
};

export default ClientWallet;
