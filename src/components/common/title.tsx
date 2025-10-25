import { Icons } from '@/lib/icons';

const Title = () => {
  return (
    <div className='flex items-center justify-center space-x-3'>
      <div className='w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg'>
        <Icons.Dollar className='w-6 h-6 text-white' />
      </div>
      <div className='hidden md:block'>
        <h1 className=' text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
          Personal Expense Tracker
        </h1>
        <p className='text-xs text-gray-500 mb-0'>Manage your finances</p>
      </div>
    </div>
  );
};

export default Title;
