
import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { RepositoryResult } from '@/repositories/base.repository';

interface UseRepositoryOptions {
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
  successMessage?: string;
}

export const useRepository = <T>(options: UseRepositoryOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const {
    showSuccessToast = true,
    showErrorToast = true,
    successMessage = 'Operação realizada com sucesso'
  } = options;

  const execute = useCallback(async <R>(
    repositoryCall: () => Promise<RepositoryResult<R>>,
    customOptions?: {
      onSuccess?: (data: R) => void;
      onError?: (error: string) => void;
      successMessage?: string;
    }
  ): Promise<R | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await repositoryCall();

      if (result.success && result.data) {
        setData(result.data as T);
        
        if (showSuccessToast) {
          toast.success(customOptions?.successMessage || successMessage);
        }
        
        customOptions?.onSuccess?.(result.data);
        return result.data;
      } else {
        const errorMessage = result.error || 'Erro desconhecido';
        setError(errorMessage);
        
        if (showErrorToast) {
          toast.error(errorMessage);
        }
        
        customOptions?.onError?.(errorMessage);
        return null;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro inesperado';
      setError(errorMessage);
      
      if (showErrorToast) {
        toast.error(errorMessage);
      }
      
      customOptions?.onError?.(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [showSuccessToast, showErrorToast, successMessage]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    data,
    execute,
    clearError
  };
};
