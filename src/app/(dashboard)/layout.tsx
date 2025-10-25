import AppHeader from '@/components/common/app-header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-gray-100'>
      <AppHeader />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>{children}</main>
    </div>
  );
}
