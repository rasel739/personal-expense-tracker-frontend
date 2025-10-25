'use client';

import { Summary as SummaryType } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import Badge from '../badge';
import { formatCurrency } from '@/utils';
import { Icons } from '@/lib/icons';

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
            <Icons.ChartBar className='w-7 h-7 text-blue-600' />
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
              <Icons.Alert className='w-6 h-6 text-red-500 mr-3 shrink-0' />
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
                <Icons.ArrowUp className='w-5 h-5 text-green-600' />
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
                <Icons.ArrowDown className='w-5 h-5 text-red-600' />
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
                <Icons.Scale
                  className={`w-5 h-5 ${
                    summary.balanceStatus === 'Positive' ? 'text-blue-600' : 'text-orange-600'
                  }`}
                />
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
