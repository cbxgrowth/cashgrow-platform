
import { BaseRepository, RepositoryResult } from './base.repository';

export interface CompanyData {
  id: string;
  owner_id?: string;
  name: string;
  description?: string;
  logo_url?: string;
  website?: string;
  industry?: string;
  size?: string;
  is_active?: boolean;
  monthly_revenue?: number;
  total_users?: number;
  subscription_status?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCompanyData {
  name: string;
  description?: string;
  logo_url?: string;
  website?: string;
  industry?: string;
  size?: string;
}

export class CompanyRepository extends BaseRepository {
  async findByOwnerId(ownerId: string): Promise<RepositoryResult<CompanyData[]>> {
    const query = this.supabase
      .from('companies')
      .select('*')
      .eq('owner_id', ownerId)
      .order('created_at', { ascending: false });

    return this.executeQuery(query);
  }

  async findById(id: string): Promise<RepositoryResult<CompanyData>> {
    const query = this.supabase
      .from('companies')
      .select('*')
      .eq('id', id)
      .single();

    return this.executeQuery(query);
  }

  async create(data: CreateCompanyData): Promise<RepositoryResult<CompanyData>> {
    const query = this.supabase
      .from('companies')
      .insert(data)
      .select()
      .single();

    return this.executeQuery(query);
  }

  async update(id: string, data: Partial<CompanyData>): Promise<RepositoryResult<CompanyData>> {
    const query = this.supabase
      .from('companies')
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    return this.executeQuery(query);
  }
}

export const companyRepository = new CompanyRepository();
