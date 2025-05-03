
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const TransactionsHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Transações</h1>
      <Button className="hover-scale bg-gradient-primary">
        <Plus className="mr-2 h-4 w-4" /> Nova Transação
      </Button>
    </div>
  );
};

export default TransactionsHeader;
