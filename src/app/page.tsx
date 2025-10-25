'use client';

import AppHeader from '@/components/common/app-header';
import { useAuth } from '@/hooks/useAuth';
import { Icons } from '@/lib/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      <AppHeader />

      <main className='relative z-10 max-w-7xl mx-auto px-6 py-20'>
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className='text-4xl md:text-7xl font-bold mb-6'>
            <span className='bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Take Control
            </span>
            <br />
            <span className='text-gray-800'>of Your Finances</span>
          </h1>

          <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto'>
            Track expenses, manage income, and achieve your financial goals with our beautiful and
            intuitive expense tracker.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-20'>
            <Link
              href={user ? '/dashboard' : '/register'}
              className='group px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center'
            >
              Start Tracking Free
              <Icons.ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
              <Icons.ChartBar className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Smart Analytics</h3>
            <p className='text-gray-600'>
              Get real-time insights into your spending patterns and financial health with beautiful
              visualizations.
            </p>
          </div>

          <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
              <Icons.Lock className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Secure & Private</h3>
            <p className='text-gray-600'>
              Your financial data is encrypted and secure. Only you have access to your information.
            </p>
          </div>

          <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
              <Icons.Lightning className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Lightning Fast</h3>
            <p className='text-gray-600'>
              Add transactions in seconds with our streamlined interface. No complicated forms or
              processes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
