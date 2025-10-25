import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { User, AuthResponse } from '@/types';
import { useFetch } from './useFetch';

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
  const [error, setError] = useState<string | null>();
  const loginFetch = useFetch<AuthResponse>();
  const registerFetch = useFetch<AuthResponse>();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     // eslint-disable-next-line react-hooks/set-state-in-effect
  //     setUser([{"id":"sdfs","nam"}]);
  //   }
  //   setLoading(false);
  // }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setError(null);
      const response = await loginFetch.execute('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (response.success && response.data) {
        localStorage.setItem('token', response.data.accessToken);
        // localStorage.setItem('user', JSON.stringify(response.data.user));
        // setUser(response.data.user);
        return true;
      } else {
        setError(response.message);
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
        localStorage.setItem('token', response.data.accessToken);
        // localStorage.setItem('user', JSON.stringify(response.data.user));
        // setUser(response.data.user);
        return true;
      } else {
        setError(response.message);
        return false;
      }
    },
    [registerFetch]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
