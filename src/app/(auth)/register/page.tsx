'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/form';
import Button from '@/components/ui/button';

const Register = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await register(formData.name, formData.email, formData.password);

    if (success) {
      router.push('/dashboard');
    } else {
      setError('Registration failed. Email may already be in use.');
    }

    setLoading(false);
  };

  return (
    <Card className='w-full max-w-md relative z-10 shadow-2xl'>
      <CardHeader className='bg-linear-to-r from-purple-50 to-pink-50 text-center'>
        <div className='w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
          <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
            />
          </svg>
        </div>
        <CardTitle>Create Your Account</CardTitle>
        <p className='text-sm text-gray-600 mt-2'>Start your journey to financial freedom today</p>
      </CardHeader>

      <CardContent>
        {error && (
          <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg'>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 text-red-500 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p className='text-sm text-red-700 font-medium'>{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-5'>
          <Input
            label='Full Name'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='John Doe'
            required
            minLength={2}
            icon={
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            }
          />

          <Input
            label='Email Address'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='your@email.com'
            required
            icon={
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                />
              </svg>
            }
          />

          <Input
            label='Password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='••••••••'
            required
            minLength={6}
            icon={
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                />
              </svg>
            }
          />

          <p className='text-xs text-gray-500'>Password must be at least 6 characters long</p>

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
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-600 text-sm'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='text-purple-600 hover:text-purple-700 font-semibold hover:underline'
            >
              Sign in instead
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register;
