export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
      {children}
    </div>
  );
}
