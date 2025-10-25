'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/form';
import Button from '@/components/ui/button';
import { Icons } from '@/lib/icons';

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

  return (
    <Card className='w-full max-w-md relative z-10 shadow-2xl'>
      <CardHeader className='bg-linear-to-r from-blue-50 to-indigo-50 text-center'>
        <div className='w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
          <Icons.Lock className='w-8 h-8 text-white' />
        </div>
        <CardTitle>Welcome Back!</CardTitle>
        <p className='text-sm text-gray-600 mt-2'>Sign in to continue managing your finances</p>
      </CardHeader>

      <CardContent>
        {error && (
          <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg'>
            <div className='flex items-center'>
              <Icons.Exclamation className='w-5 h-5 text-red-500 mr-2' />
              <p className='text-sm text-red-700 font-medium mb-0'>{error}</p>
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
            icon={<Icons.Mail className='w-5 h-5' />}
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
            icon={<Icons.Key className='w-5 h-5' />}
          />

          <Button type='submit' disabled={loading} className='w-full' size='lg'>
            {loading ? (
              <>
                <Icons.Spinner className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-600 text-sm'>
            {"Don't have an account?"}{' '}
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
