
import { BaseRepository, RepositoryResult } from './base.repository';

export interface ClientData {
  id: string;
  company_id: string;
  full_name: string;
  email: string;
  cpf: string;
  phone?: string;
  birth_date?: string;
  address?: any;
  total_spent?: number;
  total_cashback?: number;
  account_status?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateClientData {
  company_id: string;
  full_name: string;
  email: string;
  cpf: string;
  phone?: string;
  birth_date?: string;
  address?: any;
}

export class ClientRepository extends BaseRepository {
  async findByCompanyId(companyId: string): Promise<RepositoryResult<ClientData[]>> {
    const queryBuilder = this.supabase
      .from('company_clients')
      .select('*')
      .eq('company_id', companyId)
      .order('created_at', { ascending: false });

    return this.executeQuery<ClientData[]>(queryBuilder);
  }

  async findById(id: string): Promise<RepositoryResult<ClientData>> {
    const queryBuilder = this.supabase
      .from('company_clients')
      .select('*')
      .eq('id', id)
      .single();

    return this.executeQuery<ClientData>(queryBuilder);
  }

  async create(data: CreateClientData): Promise<RepositoryResult<ClientData>> {
    const queryBuilder = this.supabase
      .from('company_clients')
      .insert(data)
      .select()
      .single();

    return this.executeQuery<ClientData>(queryBuilder);
  }

  async update(id: string, data: Partial<ClientData>): Promise<RepositoryResult<ClientData>> {
    const queryBuilder = this.supabase
      .from('company_clients')
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    return this.executeQuery<ClientData>(queryBuilder);
  }

  async delete(id: string): Promise<RepositoryResult<boolean>> {
    const queryBuilder = this.supabase
      .from('company_clients')
      .delete()
      .eq('id', id);

    const result = await this.executeQuery<any>(queryBuilder);
    return {
      success: result.success,
      data: result.success,
      error: result.error
    };
  }
}

export const clientRepository = new ClientRepository();
