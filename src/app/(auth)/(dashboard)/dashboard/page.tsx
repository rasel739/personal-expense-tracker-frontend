'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useExpenses } from '@/hooks/useExpense';
import { ExpenseForm, ExpenseList, Summary } from '@/components/ui/expense';

const Dashboard = () => {
  const router = useRouter();
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const {
    expenses,
    summary,
    loading: expensesLoading,
    createExpense,
    deleteExpense,
    refreshAll,
  } = useExpenses();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  if (authLoading || !isAuthenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100'>
        <div className='text-center'>
          <div className='w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse'>
            <svg
              className='w-8 h-8 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Loading...</h2>
          <p className='text-gray-600'>Preparing your dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-8 animate-fadeIn'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900'>Welcome back, {user?.name}! 👋</h1>
          <p className='text-gray-600 mt-2'>{" Here's an overview of your financial activity"}</p>
        </div>
      </div>

      <Summary summary={summary} loading={expensesLoading} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-1'>
          <ExpenseForm onSuccess={refreshAll} onSubmit={createExpense} />
        </div>

        <div className='lg:col-span-2'>
          <ExpenseList expenses={expenses} onDelete={deleteExpense} loading={expensesLoading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
