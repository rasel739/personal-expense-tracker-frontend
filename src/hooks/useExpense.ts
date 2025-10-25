import { useState, useEffect, useCallback } from 'react';
import { Expense, Summary, CreateExpenseInput, ExpenseFilters } from '@/types';
import { useFetch } from './useFetch';

interface UseExpensesReturn {
  expenses: Expense[];
  summary: Summary | null;
  loading: boolean;
  error: string | null;
  fetchExpenses: (filters?: ExpenseFilters) => Promise<void>;
  fetchSummary: () => Promise<void>;
  createExpense: (data: CreateExpenseInput) => Promise<boolean>;
  deleteExpense: (id: string) => Promise<boolean>;
  refreshAll: () => Promise<void>;
}

export function useExpenses(): UseExpensesReturn {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const expensesFetch = useFetch<Expense[]>();
  const summaryFetch = useFetch<Summary>();
  const createFetch = useFetch<Expense>();
  const deleteFetch = useFetch<{ message: string }>();

  const fetchExpenses = useCallback(
    async (filters?: ExpenseFilters) => {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (filters?.type) queryParams.append('type', filters.type);
      if (filters?.category) queryParams.append('category', filters.category);

      const queryString = queryParams.toString();
      const response = await expensesFetch.execute(
        `/expense${queryString ? `?${queryString}` : ''}`
      );

      if (response.success && response.data) {
        setExpenses(response.data);
      } else {
        setError((response.error as string) || 'Failed to fetch expenses');
      }

      setLoading(false);
    },
    [expensesFetch]
  );

  const fetchSummary = useCallback(async () => {
    const response = await summaryFetch.execute('/expense/summary');

    if (response.success && response.data) {
      setSummary(response.data);
    }
  }, [summaryFetch]);

  const createExpense = useCallback(
    async (data: CreateExpenseInput): Promise<boolean> => {
      const response = await createFetch.execute('/expense', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.success) {
        await refreshAll();
        return true;
      }

      setError((response.error as string) || 'Failed to create expense');
      return false;
    },
    [createFetch]
  );

  const deleteExpense = useCallback(
    async (id: string): Promise<boolean> => {
      const response = await deleteFetch.execute(`/expense/${id}`, {
        method: 'DELETE',
      });

      if (response.success) {
        await refreshAll();
        return true;
      }

      setError((response.error as string) || 'Failed to delete expense');
      return false;
    },
    [deleteFetch]
  );

  const refreshAll = useCallback(async () => {
    await Promise.all([fetchExpenses(), fetchSummary()]);
  }, [fetchExpenses, fetchSummary]);

  useEffect(() => {
    refreshAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    expenses,
    summary,
    loading,
    error:
      error || expensesFetch.error || summaryFetch.error || createFetch.error || deleteFetch.error,
    fetchExpenses,
    fetchSummary,
    createExpense,
    deleteExpense,
    refreshAll,
  };
}
