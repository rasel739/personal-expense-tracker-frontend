import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { User, AuthResponse, ApiResponse } from '@/types';
import { useFetch } from './useFetch';
import { setCookie, deleteCookie, getCookie } from '@/utils/cookies';
import normalizeUserData from '@/utils/normalizeUserData';

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loginFetch = useFetch<AuthResponse>();
  const registerFetch = useFetch<AuthResponse>();
  const profileFetch = useFetch<User>();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getCookie('token');

      if (token) {
        const response: ApiResponse<unknown> = await profileFetch.execute('/auth/user');

        if (response.success && response.data) {
          const normalizedUser = normalizeUserData(response.data);
          if (normalizedUser) {
            setUser(normalizedUser);
          } else {
            deleteCookie('token');
            setUser(null);
          }
        } else {
          deleteCookie('token');
          setUser(null);
        }
      }

      setLoading(false);
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setError(null);
      const response = await loginFetch.execute('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (response.success && response.data) {
        const token = response.data.accessToken;

        setCookie('token', token);

        return true;
      } else {
        setError(response.message || 'Login failed');
        return false;
      }
    },
    [loginFetch]
  );

  const register = useCallback(
    async (name: string, email: string, password: string): Promise<boolean> => {
      setError(null);
      const response = await registerFetch.execute('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      });

      if (response.success && response.data) {
        const token = response.data.accessToken;

        setCookie('token', token);

        return true;
      } else {
        setError(response.message || 'Registration failed. Email may already be in use.');
        return false;
      }
    },
    [registerFetch]
  );

  const logout = useCallback(() => {
    deleteCookie('token');

    setUser(null);
    router.push('/');
  }, [router]);

  return {
    user,
    loading,
    error: error || loginFetch.error || registerFetch.error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};
