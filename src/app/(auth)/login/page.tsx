'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/form';
import Button from '@/components/ui/button';

const Login = () => {
  const router = useRouter();
  const { login, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const success = await login(formData.email, formData.password);

    if (success) {
      router.push('/dashboard');
    }

    setLoading(false);
  };
  console.log('error:', error);

  return (
    <Card className='w-full max-w-md relative z-10 shadow-2xl'>
      <CardHeader className='bg-linear-to-r from-blue-50 to-indigo-50 text-center'>
        <div className='w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
          <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
            />
          </svg>
        </div>
        <CardTitle>Welcome Back!</CardTitle>
        <p className='text-sm text-gray-600 mt-2'>Sign in to continue managing your finances</p>
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
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-600 text-sm'>
            {"Don't have an account?"}
            <Link
              href='/register'
              className='text-blue-600 hover:text-blue-700 font-semibold hover:underline'
            >
              Create one now
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
