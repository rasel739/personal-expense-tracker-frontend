import { useState, useCallback } from 'react';
import { ApiResponse } from '@/types';
import { getCookie } from '@/utils/cookies';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseFetchReturn<T> extends UseFetchState<T> {
  execute: (url: string, options?: RequestInit) => Promise<ApiResponse<T>>;
  reset: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export function useFetch<T = unknown>(): UseFetchReturn<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
      setState({ data: null, loading: true, error: null });

      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...{ Authorization: `${getCookie('token')}` },
        ...options.headers,
      };

      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          ...options,
          headers,
        });

        const result: ApiResponse<T> = await response.json();

        if (!response.ok) {
          const errorMessage = result.message || result.error || 'Something went wrong';
          throw new Error(typeof errorMessage === 'string' ? errorMessage : 'Request failed');
        }

        setState({ data: result.data || null, loading: false, error: null });
        return {
          success: true,
          data: result.data,
          message: result.message,
        };
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Network error';
        setState({ data: null, loading: false, error: errorMessage });
        return {
          success: false,
          error: errorMessage,
          message: errorMessage,
        };
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}
