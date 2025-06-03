
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface SupabaseOperationResult<T = any> {
  data: T | null;
  error: any;
  loading: boolean;
}

export const useSupabaseOperations = () => {
  const [loading, setLoading] = useState(false);

  const executeOperation = async <T>(
    operation: () => Promise<any>,
    successMessage?: string,
    errorMessage?: string
  ): Promise<SupabaseOperationResult<T>> => {
    setLoading(true);
    try {
      const result = await operation();
      
      if (result.error) {
        console.error('Supabase operation error:', result.error);
        toast.error(errorMessage || 'Erro na operação');
        return { data: null, error: result.error, loading: false };
      }

      if (successMessage) {
        toast.success(successMessage);
      }

      return { data: result.data, error: null, loading: false };
    } catch (error) {
      console.error('Operation error:', error);
      toast.error(errorMessage || 'Erro inesperado');
      return { data: null, error, loading: false };
    } finally {
      setLoading(false);
    }
  };

  // Generic CRUD operations
  const create = async (table: string, data: any, successMessage?: string) => {
    return executeOperation(
      () => supabase.from(table).insert(data).select(),
      successMessage || 'Registro criado com sucesso',
      'Erro ao criar registro'
    );
  };

  const read = async (table: string, filters?: any) => {
    let query = supabase.from(table).select('*');
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
    }

    return executeOperation(
      () => query,
      undefined,
      'Erro ao buscar dados'
    );
  };

  const update = async (table: string, id: string, data: any, successMessage?: string) => {
    return executeOperation(
      () => supabase.from(table).update(data).eq('id', id).select(),
      successMessage || 'Registro atualizado com sucesso',
      'Erro ao atualizar registro'
    );
  };

  const remove = async (table: string, id: string, successMessage?: string) => {
    return executeOperation(
      () => supabase.from(table).delete().eq('id', id),
      successMessage || 'Registro removido com sucesso',
      'Erro ao remover registro'
    );
  };

  // Authentication operations
  const signIn = async (email: string, password: string) => {
    return executeOperation(
      () => supabase.auth.signInWithPassword({ email, password }),
      'Login realizado com sucesso',
      'Erro ao fazer login'
    );
  };

  const signUp = async (email: string, password: string, metadata?: any) => {
    return executeOperation(
      () => supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: metadata
        }
      }),
      'Conta criada com sucesso',
      'Erro ao criar conta'
    );
  };

  const signOut = async () => {
    return executeOperation(
      () => supabase.auth.signOut(),
      'Logout realizado com sucesso',
      'Erro ao fazer logout'
    );
  };

  const resetPassword = async (email: string) => {
    return executeOperation(
      () => supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      }),
      'Email de recuperação enviado',
      'Erro ao enviar email'
    );
  };

  const updatePassword = async (password: string) => {
    return executeOperation(
      () => supabase.auth.updateUser({ password }),
      'Senha atualizada com sucesso',
      'Erro ao atualizar senha'
    );
  };

  // File operations
  const uploadFile = async (bucket: string, path: string, file: File) => {
    return executeOperation(
      () => supabase.storage.from(bucket).upload(path, file),
      'Arquivo enviado com sucesso',
      'Erro ao enviar arquivo'
    );
  };

  const downloadFile = async (bucket: string, path: string) => {
    return executeOperation(
      () => supabase.storage.from(bucket).download(path),
      undefined,
      'Erro ao baixar arquivo'
    );
  };

  const deleteFile = async (bucket: string, path: string) => {
    return executeOperation(
      () => supabase.storage.from(bucket).remove([path]),
      'Arquivo removido com sucesso',
      'Erro ao remover arquivo'
    );
  };

  return {
    loading,
    create,
    read,
    update,
    remove,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    uploadFile,
    downloadFile,
    deleteFile,
    executeOperation
  };
};
