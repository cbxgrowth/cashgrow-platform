
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

interface ErrorState {
  error: string | null;
  isLoading: boolean;
}

export const useErrorHandling = () => {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isLoading: false
  });

  const handleAsync = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    options?: {
      onSuccess?: (result: T) => void;
      onError?: (error: string) => void;
      successMessage?: string;
      showErrorToast?: boolean;
    }
  ): Promise<T | null> => {
    const {
      onSuccess,
      onError,
      successMessage,
      showErrorToast = true
    } = options || {};

    setErrorState({ error: null, isLoading: true });

    try {
      const result = await asyncFn();
      
      if (successMessage) {
        toast.success(successMessage);
      }
      
      onSuccess?.(result);
      setErrorState({ error: null, isLoading: false });
      
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      
      setErrorState({ error: errorMessage, isLoading: false });
      
      if (showErrorToast) {
        toast.error(errorMessage);
      }
      
      onError?.(errorMessage);
      return null;
    }
  }, []);

  const clearError = useCallback(() => {
    setErrorState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...errorState,
    handleAsync,
    clearError
  };
};
