import { Expense, ExpenseFilters } from '@/types';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import Badge from '../badge';
import { Input, Select } from '../form';
import { formatCurrency, formatDate } from '@/utils';
import Button from '../button';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => Promise<boolean>;
  loading?: boolean;
}

const ExpenseList = ({ expenses, onDelete, loading }: ExpenseListProps) => {
  const [filters, setFilters] = useState<ExpenseFilters>({
    type: '',
    category: '',
  });

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    await onDelete(id);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filters.type && expense.type !== filters.type) return false;
    if (
      filters.category &&
      !expense.category.toLowerCase().includes(filters.category.toLowerCase())
    )
      return false;
    return true;
  });

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='animate-pulse'>
                <div className='h-24 bg-gray-200 rounded-lg'></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className='bg-linear-to-r from-indigo-50 to-purple-50'>
        <CardTitle className='flex items-center space-x-2'>
          <svg
            className='w-7 h-7 text-indigo-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
            />
          </svg>
          <span>Transaction History</span>
          <Badge variant='info' size='sm'>
            {filteredExpenses.length}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Select
            label='Filter by Type'
            value={filters.type || ''}
            onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
            options={[
              { value: '', label: 'All Types' },
              { value: 'INCOME', label: '📈 Income Only' },
              { value: 'EXPENSE', label: '📉 Expense Only' },
            ]}
          />

          <Input
            label='Filter by Category'
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            placeholder='Search category...'
            icon={
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            }
          />
        </div>

        <div className='space-y-3'>
          {filteredExpenses.length === 0 ? (
            <div className='text-center py-12'>
              <svg
                className='w-16 h-16 text-gray-300 mx-auto mb-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                />
              </svg>
              <p className='text-gray-500 text-lg font-medium'>No transactions found</p>
              <p className='text-gray-400 text-sm mt-1'>
                {filters.type || filters.category
                  ? 'Try adjusting your filters'
                  : 'Add your first transaction to get started'}
              </p>
            </div>
          ) : (
            filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className={`group relative border-2 rounded-xl p-5 transition-all duration-300 hover:shadow-lg ${
                  expense.type === 'INCOME'
                    ? 'border-green-200 bg-linear-to-br from-green-50 to-emerald-50 hover:border-green-300'
                    : 'border-red-200 bg-linear-to-br from-red-50 to-pink-50 hover:border-red-300'
                }`}
              >
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-3 mb-2'>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          expense.type === 'INCOME' ? 'bg-green-100' : 'bg-red-100'
                        }`}
                      >
                        <svg
                          className={`w-6 h-6 ${
                            expense.type === 'INCOME' ? 'text-green-600' : 'text-red-600'
                          }`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d={
                              expense.type === 'INCOME'
                                ? 'M7 11l5-5m0 0l5 5m-5-5v12'
                                : 'M17 13l-5 5m0 0l-5-5m5 5V6'
                            }
                          />
                        </svg>
                      </div>

                      <div className='flex-1'>
                        <h3 className='text-lg font-bold text-gray-900 mb-1'>{expense.title}</h3>
                        <div className='flex items-center space-x-2'>
                          <Badge
                            variant={expense.type === 'INCOME' ? 'success' : 'danger'}
                            size='sm'
                          >
                            {expense.type}
                          </Badge>
                          <Badge variant='default' size='sm'>
                            {expense.category}
                          </Badge>
                          {expense.isLarge && (
                            <Badge variant='warning' size='sm'>
                              🔥 Large Expense
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {expense.note && (
                      <p className='text-sm text-gray-600 mt-2 ml-15 pl-3 border-l-2 border-gray-300'>
                        {expense.note}
                      </p>
                    )}

                    <p className='text-xs text-gray-400 mt-3 flex items-center ml-15'>
                      <svg
                        className='w-4 h-4 mr-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      {formatDate(expense.createdAt)}
                    </p>
                  </div>

                  <div className='text-right flex flex-col items-end space-y-3'>
                    <div>
                      <p
                        className={`text-3xl font-bold ${
                          expense.type === 'INCOME' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {expense.type === 'INCOME' ? '+' : '-'}
                        {formatCurrency(expense.amount)}
                      </p>
                    </div>

                    <Button
                      variant='danger'
                      size='sm'
                      onClick={() => handleDelete(expense.id, expense.title)}
                      className='opacity-0 group-hover:opacity-100 transition-opacity'
                    >
                      <svg
                        className='w-4 h-4 mr-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseList;
