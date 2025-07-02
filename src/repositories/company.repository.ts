
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
  subscription_status?: 'active' | 'inactive' | 'suspended' | 'cancelled';
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
    const queryBuilder = this.supabase
      .from('companies')
      .select('*')
      .eq('owner_id', ownerId)
      .order('created_at', { ascending: false });

    return this.executeQuery<CompanyData[]>(queryBuilder);
  }

  async findById(id: string): Promise<RepositoryResult<CompanyData>> {
    const queryBuilder = this.supabase
      .from('companies')
      .select('*')
      .eq('id', id)
      .single();

    return this.executeQuery<CompanyData>(queryBuilder);
  }

  async create(data: CreateCompanyData): Promise<RepositoryResult<CompanyData>> {
    const queryBuilder = this.supabase
      .from('companies')
      .insert(data)
      .select()
      .single();

    return this.executeQuery<CompanyData>(queryBuilder);
  }

  async update(id: string, data: Partial<CompanyData>): Promise<RepositoryResult<CompanyData>> {
    const updateData = { 
      ...data, 
      updated_at: new Date().toISOString() 
    };
    
    // Remove subscription_status if it's a string to avoid type conflicts
    if (updateData.subscription_status && typeof updateData.subscription_status === 'string') {
      const validStatuses: ('active' | 'inactive' | 'suspended' | 'cancelled')[] = ['active', 'inactive', 'suspended', 'cancelled'];
      if (!validStatuses.includes(updateData.subscription_status as any)) {
        delete updateData.subscription_status;
      }
    }

    const queryBuilder = this.supabase
      .from('companies')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    return this.executeQuery<CompanyData>(queryBuilder);
  }
}

export const companyRepository = new CompanyRepository();
