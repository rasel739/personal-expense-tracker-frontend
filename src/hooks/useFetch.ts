import { useState, useCallback } from 'react';
import { ApiResponse } from '@/types';

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

  const getToken = useCallback(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }, []);

  const execute = useCallback(
    async (endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
      setState({ data: null, loading: true, error: null });

      const token = getToken();
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      };

      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          ...options,
          headers,
        });

        const result: ApiResponse<T> = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        setState({ data: result.data || null, loading: false, error: null });
        return result;
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Network error';
        setState({ data: null, loading: false, error: errorMessage });
        return {
          success: false,
          error: errorMessage,
        };
      }
    },
    [getToken]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}
