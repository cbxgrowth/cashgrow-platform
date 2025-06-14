
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/auth/useAuth';

export interface CompanyClient {
  id: string;
  cpf: string;
  full_name: string;
  email: string;
  phone?: string;
  birth_date?: string;
  address?: any;
  account_status: string;
  total_spent: number;
  total_cashback: number;
  last_purchase_at?: string;
  created_at: string;
  created_by_integration: boolean;
  integration_source?: string;
}

export interface ClientTransaction {
  id: string;
  amount: number;
  cashback_amount: number;
  cashback_percentage: number;
  transaction_type: string;
  description?: string;
  transaction_date: string;
}

export const useCompanyClients = () => {
  const { user } = useAuth();
  const [clients, setClients] = useState<CompanyClient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchClients();
    }
  }, [user]);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('company_clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error: any) {
      console.error('Erro ao buscar clientes:', error);
      toast.error('Erro ao carregar clientes');
    } finally {
      setLoading(false);
    }
  };

  const createClient = async (clientData: {
    cpf: string;
    full_name: string;
    email: string;
    phone?: string;
    birth_date?: string;
    address?: any;
    created_by_integration: boolean;
    integration_source?: string;
  }) => {
    try {
      // Gerar senha temporária
      const { data: tempPasswordData, error: tempPasswordError } = await supabase.rpc('generate_temp_password');
      if (tempPasswordError) throw tempPasswordError;

      const newClient = {
        ...clientData,
        company_id: user?.id,
        temporary_password: tempPasswordData,
        account_status: 'pending',
        total_spent: 0,
        total_cashback: 0
      };

      const { data, error } = await supabase
        .from('company_clients')
        .insert([newClient])
        .select()
        .single();

      if (error) throw error;

      // Criar convite
      const { data: invitationToken, error: tokenError } = await supabase.rpc('generate_invitation_token');
      if (tokenError) throw tokenError;

      const invitation = {
        company_id: user?.id,
        client_id: data.id,
        invitation_token: invitationToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 dias
      };

      await supabase.from('client_invitations').insert([invitation]);

      // Enviar email de convite
      await fetch('/functions/v1/send-client-invitation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        },
        body: JSON.stringify({
          clientId: data.id,
          clientName: data.full_name,
          clientEmail: data.email,
          tempPassword: tempPasswordData,
          companyName: 'Sua Empresa' // TODO: pegar nome real da empresa
        })
      });

      await fetchClients();
      toast.success('Cliente cadastrado com sucesso! Email de convite enviado.');
      return data;
    } catch (error: any) {
      console.error('Erro ao criar cliente:', error);
      toast.error('Erro ao cadastrar cliente: ' + error.message);
      throw error;
    }
  };

  const createClientFromIntegration = async (clientData: any) => {
    try {
      const processedData = {
        cpf: clientData.cpf,
        full_name: clientData.name || clientData.full_name,
        email: clientData.email,
        phone: clientData.phone,
        birth_date: clientData.birth_date,
        address: clientData.address,
        created_by_integration: true,
        integration_source: clientData.source || 'ERP'
      };

      return await createClient(processedData);
    } catch (error: any) {
      console.error('Erro ao criar cliente da integração:', error);
      toast.error('Erro ao criar cliente da integração');
      throw error;
    }
  };

  const addTransaction = async (clientId: string, transactionData: {
    amount: number;
    description?: string;
    cashback_percentage?: number;
  }) => {
    try {
      const cashbackPercentage = transactionData.cashback_percentage || 2; // 2% padrão
      const cashbackAmount = (transactionData.amount * cashbackPercentage) / 100;

      const transaction = {
        client_id: clientId,
        company_id: user?.id,
        amount: transactionData.amount,
        cashback_amount: cashbackAmount,
        cashback_percentage: cashbackPercentage,
        description: transactionData.description,
        transaction_type: 'purchase'
      };

      const { error } = await supabase
        .from('client_transactions')
        .insert([transaction]);

      if (error) throw error;

      // Atualizar totais do cliente manualmente
      const { data: currentClient } = await supabase
        .from('company_clients')
        .select('total_spent, total_cashback')
        .eq('id', clientId)
        .single();

      if (currentClient) {
        await supabase
          .from('company_clients')
          .update({
            total_spent: currentClient.total_spent + transactionData.amount,
            total_cashback: currentClient.total_cashback + cashbackAmount,
            last_purchase_at: new Date().toISOString()
          })
          .eq('id', clientId);
      }

      await fetchClients();
      toast.success('Transação registrada com sucesso!');
    } catch (error: any) {
      console.error('Erro ao adicionar transação:', error);
      toast.error('Erro ao registrar transação');
      throw error;
    }
  };

  return {
    clients,
    loading,
    createClient,
    createClientFromIntegration,
    addTransaction,
    refetch: fetchClients
  };
};
