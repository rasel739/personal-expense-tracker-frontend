'use client';

import { useAuth } from '@/hooks/useAuth';
import Button from '../ui/button';
import { getInitials } from '@/utils';
import Link from 'next/link';
import Title from './title';
import { Icons } from '@/lib/icons';
import { usePathname } from 'next/navigation';

const AppHeader = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <>
      {user ? (
        <nav className=' border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/90'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <Link href={pathname === '/' ? '/dashboard' : '/'}>
                <Title />
              </Link>

              <div className='flex items-center space-x-4'>
                {user && (
                  <>
                    <div className='hidden md:flex items-center justify-center space-x-3 px-4 py-2 bg-gray-50 '>
                      <div className='w-9 h-9 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md'>
                        {getInitials(user.name)}
                      </div>
                      <div className='text-left'>
                        <p className='text-sm font-semibold text-gray-900 mb-0'>{user.name}</p>
                        <p className='text-xs text-gray-500 mb-0'>{user.email}</p>
                      </div>
                    </div>

                    <Button variant='danger' size='sm' onClick={logout} className='cursor-pointer'>
                      <Icons.Logout className='w-4 h-4 mr-2' />
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className='relative z-10 px-6 py-4'>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <Link href='/login'>
              <Title />
            </Link>
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
      )}
    </>
  );
};

export default AppHeader;
