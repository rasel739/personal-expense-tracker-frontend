import { Expense, ExpenseFilters } from '@/types';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import Badge from '../badge';
import { Input, Select } from '../form';
import { formatCurrency, formatDate } from '@/utils';
import Button from '../button';
import { Icons } from '@/lib/icons';

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
          <CardTitle className='text-lg sm:text-xl md:text-2xl'>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='animate-pulse'>
                <div className='h-24 sm:h-28 md:h-32 bg-gray-200 rounded-lg'></div>
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
        <CardTitle className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
          <div className='flex items-center space-x-2'>
            <Icons.Clipboard className='w-6 h-6 sm:w-7 sm:h-7 text-indigo-600' />
            <span className='text-lg sm:text-xl md:text-2xl'>Transaction History</span>
          </div>
          <Badge variant='info' size='sm' className='ml-0 sm:ml-auto'>
            {filteredExpenses.length}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Filters Section */}
        <div className='mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
          <Select
            label='Filter by Type'
            value={filters.type || ''}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value as '' | 'INCOME' | 'EXPENSE' })
            }
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
            icon={<Icons.Search className='w-5 h-5' />}
          />
        </div>

        {/* Transactions List */}
        <div className='space-y-3 sm:space-y-4'>
          {filteredExpenses.length === 0 ? (
            <div className='text-center py-8 sm:py-12'>
              <Icons.Inbox className='w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4' />
              <p className='text-gray-500 text-base sm:text-lg font-medium'>
                No transactions found
              </p>
              <p className='text-gray-400 text-xs sm:text-sm mt-1 px-4'>
                {filters.type || filters.category
                  ? 'Try adjusting your filters'
                  : 'Add your first transaction to get started'}
              </p>
            </div>
          ) : (
            filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className={`group relative border-2 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:shadow-lg ${
                  expense.type === 'INCOME'
                    ? 'border-green-200 bg-linear-to-br from-green-50 to-emerald-50 hover:border-green-300'
                    : 'border-red-200 bg-linear-to-br from-red-50 to-pink-50 hover:border-red-300'
                }`}
              >
                <div className='md:hidden space-y-3'>
                  <div className='flex items-start justify-between gap-3'>
                    <div className='flex items-start gap-3 flex-1 min-w-0'>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          expense.type === 'INCOME' ? 'bg-green-100' : 'bg-red-100'
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${
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

                      <div className='flex-1 min-w-0'>
                        <h3 className='text-base sm:text-lg font-bold text-gray-900 mb-1 truncate'>
                          {expense.title}
                        </h3>
                        <p
                          className={`text-xl sm:text-2xl font-bold ${
                            expense.type === 'INCOME' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {expense.type === 'INCOME' ? '+' : '-'}
                          {formatCurrency(expense.amount)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badges Row */}
                  <div className='flex flex-wrap items-center gap-2'>
                    <Badge variant={expense.type === 'INCOME' ? 'success' : 'danger'} size='sm'>
                      {expense.type}
                    </Badge>
                    <Badge variant='default' size='sm'>
                      {expense.category}
                    </Badge>
                    {expense.isLarge && (
                      <Badge variant='warning' size='sm'>
                        🔥 Large
                      </Badge>
                    )}
                  </div>

                  {expense.note && (
                    <p className='text-sm text-gray-600 pl-3 border-l-2 border-gray-300'>
                      {expense.note}
                    </p>
                  )}

                  <div className='flex items-center justify-between gap-2 pt-2 border-t border-gray-200'>
                    <p className='text-xs text-gray-400 flex items-center'>
                      <Icons.Clock className='w-3 h-3 mr-1' />
                      {formatDate(expense.createdAt)}
                    </p>

                    <Button
                      variant='danger'
                      size='sm'
                      onClick={() => handleDelete(expense.id, expense.title)}
                      className='shrink-0'
                    >
                      <Icons.Trash className='w-4 h-4 mr-1' />
                      <span className='hidden xs:inline'>Delete</span>
                    </Button>
                  </div>
                </div>

                <div className='hidden md:flex items-start justify-between gap-4'>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
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

                      <div className='flex-1 min-w-0'>
                        <h3 className='text-lg font-bold text-gray-900 mb-1 truncate'>
                          {expense.title}
                        </h3>
                        <div className='flex flex-wrap items-center gap-2'>
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
                      <Icons.Clock className='w-4 h-4 mr-1' />
                      {formatDate(expense.createdAt)}
                    </p>
                  </div>

                  <div className='text-right flex flex-col items-end space-y-3 shrink-0'>
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
                      <Icons.Trash className='w-4 h-4 mr-1' />
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
