
import { useState } from 'react';

interface Transaction {
  id: string;
  date: string;
  client: string;
  clientId: string;
  amount: string;
  cashback: string;
  cashbackPercentage: string;
  status: 'approved' | 'pending' | 'rejected';
}

export const useTransactions = () => {
  // Dados simulados para transações - no futuro, estes dados poderiam vir de uma API
  const [transactions] = useState<Transaction[]>([
    {
      id: 'TX12345',
      date: '05/05/2025',
      client: 'João Silva',
      clientId: '001',
      amount: 'R$ 150,00',
      cashback: 'R$ 7,50',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12346',
      date: '04/05/2025',
      client: 'Maria Oliveira',
      clientId: '002',
      amount: 'R$ 320,00',
      cashback: 'R$ 16,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12347',
      date: '04/05/2025',
      client: 'Pedro Santos',
      clientId: '003',
      amount: 'R$ 75,00',
      cashback: 'R$ 3,75',
      cashbackPercentage: '5%',
      status: 'pending',
    },
    {
      id: 'TX12348',
      date: '03/05/2025',
      client: 'Ana Souza',
      clientId: '004',
      amount: 'R$ 250,00',
      cashback: 'R$ 12,50',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12349',
      date: '03/05/2025',
      client: 'Carlos Pereira',
      clientId: '005',
      amount: 'R$ 90,00',
      cashback: 'R$ 4,50',
      cashbackPercentage: '5%',
      status: 'rejected',
    },
    {
      id: 'TX12350',
      date: '02/05/2025',
      client: 'Fernanda Lima',
      clientId: '006',
      amount: 'R$ 180,00',
      cashback: 'R$ 9,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12351',
      date: '02/05/2025',
      client: 'Roberto Alves',
      clientId: '007',
      amount: 'R$ 130,00',
      cashback: 'R$ 6,50',
      cashbackPercentage: '5%',
      status: 'pending',
    },
    {
      id: 'TX12352',
      date: '01/05/2025',
      client: 'João Silva',
      clientId: '001',
      amount: 'R$ 200,00',
      cashback: 'R$ 10,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
    {
      id: 'TX12353',
      date: '01/05/2025',
      client: 'Maria Oliveira',
      clientId: '002',
      amount: 'R$ 300,00',
      cashback: 'R$ 15,00',
      cashbackPercentage: '5%',
      status: 'approved',
    },
  ]);

  // Poderia adicionar mais funcionalidades aqui como paginação, ordenação, filtros, etc.
  
  return {
    transactions,
  };
};
