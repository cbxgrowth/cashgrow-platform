
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TransactionsHeader from './components/TransactionsHeader';
import StatsSummary from './components/StatsSummary';
import TransactionsFilter from './components/TransactionsFilter';
import TransactionsTable from './components/TransactionsTable';
import { useTransactions } from './hooks/useTransactions';
import CreateTransactionDialog from './CreateTransactionDialog';

const CompanyTransactions: React.FC = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const {
    transactions,
    loading,
    filters,
    updateFilters,
    stats
  } = useTransactions();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <TransactionsHeader />
        <Button className="bg-gradient-primary" onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nova Transação
        </Button>
      </div>

      <StatsSummary stats={stats} />
      
      <TransactionsFilter 
        filters={filters}
        onFiltersChange={updateFilters}
      />
      
      <TransactionsTable 
        transactions={transactions}
        loading={loading}
      />

      <CreateTransactionDialog 
        open={createDialogOpen} 
        onOpenChange={setCreateDialogOpen} 
      />
    </div>
  );
};

export default CompanyTransactions;
