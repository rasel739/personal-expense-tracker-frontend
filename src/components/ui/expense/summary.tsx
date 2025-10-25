'use client';

import { Summary as SummaryType } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import Badge from '../badge';
import { formatCurrency } from '@/utils';

interface SummaryProps {
  summary: SummaryType | null;
  loading?: boolean;
}

const Summary = ({ summary, loading }: SummaryProps) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='animate-pulse space-y-4'>
            <div className='h-24 bg-gray-200 rounded-lg'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='h-24 bg-gray-200 rounded-lg'></div>
              <div className='h-24 bg-gray-200 rounded-lg'></div>
              <div className='h-24 bg-gray-200 rounded-lg'></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!summary) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-600'>No data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='overflow-hidden'>
      <CardHeader className='bg-linear-to-r from-blue-50 to-indigo-50'>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center space-x-2'>
            <svg
              className='w-7 h-7 text-blue-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
            <span>Financial Summary</span>
          </CardTitle>
          <Badge variant={summary.balanceStatus === 'Positive' ? 'success' : 'danger'}>
            {summary.balanceStatus}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className='p-6'>
        {summary.balanceStatus === 'Negative' && (
          <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg'>
            <div className='flex items-start'>
              <svg
                className='w-6 h-6 text-red-500 mr-3 shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
              <div>
                <h4 className='text-sm font-semibold text-red-800 mb-1'>
                  Negative Balance Warning!
                </h4>
                <p className='text-sm text-red-700'>
                  You are spending more than you earn. Consider reducing expenses.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-linear-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between mb-3'>
              <p className='text-sm font-semibold text-green-700 uppercase tracking-wide'>
                Total Income
              </p>
              <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 11l5-5m0 0l5 5m-5-5v12'
                  />
                </svg>
              </div>
            </div>
            <p className='text-3xl font-bold text-green-700'>
              {formatCurrency(summary.totalIncome)}
            </p>
          </div>

          <div className='bg-linear-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between mb-3'>
              <p className='text-sm font-semibold text-red-700 uppercase tracking-wide'>
                Total Expense
              </p>
              <div className='w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-red-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 13l-5 5m0 0l-5-5m5 5V6'
                  />
                </svg>
              </div>
            </div>
            <p className='text-3xl font-bold text-red-700'>
              {formatCurrency(summary.totalExpense)}
            </p>
          </div>

          <div
            className={`bg-linear-to-br ${
              summary.balanceStatus === 'Positive'
                ? 'from-blue-50 to-indigo-50 border-blue-200'
                : 'from-orange-50 to-amber-50 border-orange-200'
            } p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300`}
          >
            <div className='flex items-center justify-between mb-3'>
              <p
                className={`text-sm font-semibold uppercase tracking-wide ${
                  summary.balanceStatus === 'Positive' ? 'text-blue-700' : 'text-orange-700'
                }`}
              >
                Net Balance
              </p>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  summary.balanceStatus === 'Positive' ? 'bg-blue-100' : 'bg-orange-100'
                }`}
              >
                <svg
                  className={`w-5 h-5 ${
                    summary.balanceStatus === 'Positive' ? 'text-blue-600' : 'text-orange-600'
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
            </div>
            <p
              className={`text-3xl font-bold ${
                summary.balanceStatus === 'Positive' ? 'text-blue-700' : 'text-orange-700'
              }`}
            >
              {formatCurrency(summary.balance)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Summary;
