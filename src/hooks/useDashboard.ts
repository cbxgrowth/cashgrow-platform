
import { useState, useEffect } from 'react';
import { DashboardStats, Transaction, Business } from '@/types/dashboard';

export const useDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalBalance: 123.45,
    cashbackReceived: 76.25,
    amountWithdrawn: 30.00,
    nextLevelProgress: 75
  });

  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [connectedBusinesses, setConnectedBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      setLoading(true);
      
      // Mock data - replace with actual API calls
      const mockTransactions: Transaction[] = [
        {
          id: '1',
          store: 'Mercado Verde',
          amount: 150.00,
          cashback: 7.50,
          date: new Date(),
          percentage: 5
        },
        // Add more mock transactions...
      ];

      const mockBusinesses: Business[] = [
        {
          id: '1',
          name: 'Mercado Verde',
          initials: 'MV',
          cashbackRate: 5
        },
        // Add more mock businesses...
      ];

      setRecentTransactions(mockTransactions);
      setConnectedBusinesses(mockBusinesses);
      setLoading(false);
    };

    loadData();
  }, []);

  return {
    stats,
    recentTransactions,
    connectedBusinesses,
    loading
  };
};
