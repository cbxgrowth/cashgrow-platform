
import React from 'react';
import TransactionsHeader from './components/TransactionsHeader';
import TransactionsFilter from './components/TransactionsFilter';
import StatsSummary from './components/StatsSummary';
import TransactionsTable from './components/TransactionsTable';

const CompanyTransactions: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TransactionsHeader />
      <TransactionsFilter />
      <StatsSummary />
      <TransactionsTable />
    </div>
  );
};

export default CompanyTransactions;
