'use client';

import { useAuth } from '@/hooks/useAuth';
import Button from '../ui/button';
import { getInitials } from '@/utils';

const AppHeader = () => {
  const { user, logout } = useAuth();

  return (
    <nav className=' border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/90'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-3'>
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
            <div>
              <h1 className='text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                Expense Tracker
              </h1>
              <p className='text-xs text-gray-500'>Manage your finances</p>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            {user && (
              <>
                <div className='hidden md:flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg'>
                  <div className='w-9 h-9 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md'>
                    {getInitials(user.name)}
                  </div>
                  <div className='text-left'>
                    <p className='text-sm font-semibold text-gray-900'>{user.name}</p>
                    <p className='text-xs text-gray-500'>{user.email}</p>
                  </div>
                </div>

                <Button variant='danger' size='sm' onClick={logout}>
                  <svg
                    className='w-4 h-4 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                    />
                  </svg>
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
