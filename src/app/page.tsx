'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      <nav className='relative z-10 px-6 py-4'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <span className='text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
              ExpenseTracker
            </span>
          </div>
          <div className='flex gap-3'>
            <Link
              href='/login'
              className='px-4 py-2 text-gray-700 hover:text-gray-900 transition font-medium'
            >
              Login
            </Link>
            <Link
              href='/register'
              className='px-6 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium'
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className='relative z-10 max-w-7xl mx-auto px-6 py-20'>
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className='text-6xl md:text-7xl font-bold mb-6'>
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
              href='/register'
              className='group px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center'
            >
              Start Tracking Free
              <svg
                className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Link>
            <Link
              href='/login'
              className='px-8 py-4 bg-white text-gray-700 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg border-2 border-gray-200'
            >
              Sign In
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
              <svg
                className='w-8 h-8 text-white'
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
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Smart Analytics</h3>
            <p className='text-gray-600'>
              Get real-time insights into your spending patterns and financial health with beautiful
              visualizations.
            </p>
          </div>

          <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Secure & Private</h3>
            <p className='text-gray-600'>
              Your financial data is encrypted and secure. Only you have access to your information.
            </p>
          </div>

          <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
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
