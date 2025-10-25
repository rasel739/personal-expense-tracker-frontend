'use client';

import { useState } from 'react';
import { CreateExpenseInput } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { Input, Select, Textarea } from '../form';
import Button from '../button';
import { categories } from '@/constants';
import { Icons } from '@/lib/icons';

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
          <Icons.Plus className='w-7 h-7 text-purple-600' />
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
              icon={<Icons.Tag className='w-5 h-5' />}
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
              icon={<Icons.Dollar className='w-5 h-5' />}
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
                <Icons.Spinner className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' />
                Adding Transaction...
              </>
            ) : (
              <>
                <Icons.Plus className='w-5 h-5 mr-2' />
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
