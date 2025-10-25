'use client';

import { useState } from 'react';
import { CreateExpenseInput } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { Input, Select, Textarea } from '../form';
import Button from '../button';

interface ExpenseFormProps {
  onSuccess: () => void;
  onSubmit: (data: CreateExpenseInput) => Promise<boolean>;
}

const ExpenseForm = ({ onSuccess, onSubmit }: ExpenseFormProps) => {
  const [formData, setFormData] = useState<CreateExpenseInput>({
    title: '',
    amount: 0,
    category: '',
    type: 'EXPENSE',
    note: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CreateExpenseInput, string>>>({});
  const [loading, setLoading] = useState(false);

  const categories = [
    'FOOD',
    'TRANSPORT',
    'SHOPPING',
    'ENTERTAINMENT',
    'BILLS',
    'SALARY',
    'INVESTMENT',
    'OTHER',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || 0 : value,
    }));
    if (errors[name as keyof CreateExpenseInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CreateExpenseInput, string>> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (formData.amount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    const success = await onSubmit(formData);

    if (success) {
      setFormData({
        title: '',
        amount: 0,
        category: '',
        type: 'EXPENSE',
        note: '',
      });
      onSuccess();
    }

    setLoading(false);
  };

  return (
    <Card>
      <CardHeader className='bg-linear-to-r from-purple-50 to-pink-50'>
        <CardTitle className='flex items-center space-x-2'>
          <svg
            className='w-7 h-7 text-purple-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
          <span>Add New Transaction</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <Input
              label='Title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='e.g., Grocery Shopping'
              error={errors.title}
              icon={
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
                  />
                </svg>
              }
            />

            <Input
              label='Amount'
              name='amount'
              type='number'
              step='0.01'
              value={formData.amount || ''}
              onChange={handleChange}
              placeholder='0.00'
              error={errors.amount}
              icon={
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              }
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <Select
              label='Category'
              name='category'
              value={formData.category}
              onChange={handleChange}
              error={errors.category}
              options={[
                { value: '', label: 'Select Category' },
                ...categories.map((cat) => ({ value: cat, label: cat })),
              ]}
            />

            <Select
              label='Type'
              name='type'
              value={formData.type}
              onChange={handleChange}
              options={[
                { value: 'EXPENSE', label: '📉 Expense' },
                { value: 'INCOME', label: '📈 Income' },
              ]}
            />
          </div>

          <Textarea
            label='Note (Optional)'
            name='note'
            value={formData.note}
            onChange={handleChange}
            placeholder='Add any additional details...'
            rows={3}
          />

          <Button type='submit' disabled={loading} className='w-full' size='lg'>
            {loading ? (
              <>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Adding Transaction...
              </>
            ) : (
              <>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
                Add Transaction
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
