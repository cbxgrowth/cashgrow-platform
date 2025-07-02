
import { supabase } from '@/integrations/supabase/client';
import { PostgrestError } from '@supabase/supabase-js';

export interface RepositoryResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export class BaseRepository {
  protected handleError(error: PostgrestError | Error | null): string {
    if (!error) return 'Erro desconhecido';
    
    if ('code' in error && error.code) {
      // PostgreSQL specific errors
      switch (error.code) {
        case '23505':
          return 'Este registro já existe';
        case '23503':
          return 'Não é possível excluir este registro pois ele está sendo usado';
        case '42501':
          return 'Você não tem permissão para realizar esta ação';
        default:
          return error.message || 'Erro na operação';
      }
    }
    
    return error.message || 'Erro desconhecido';
  }

  protected async executeQuery<T>(
    queryBuilder: any
  ): Promise<RepositoryResult<T>> {
    try {
      const { data, error } = await queryBuilder;
      
      if (error) {
        return {
          success: false,
          error: this.handleError(error)
        };
      }

      return {
        success: true,
        data: data || undefined
      };
    } catch (error) {
      return {
        success: false,
        error: this.handleError(error as Error)
      };
    }
  }

  protected get supabase() {
    return supabase;
  }
}
