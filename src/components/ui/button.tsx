import { cn } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary-deepBlue hover:bg-accent-indigo text-text-white shadow-lg hover:shadow-xl focus:ring-accent-indigo',
    secondary:
      'bg-background-light text-text-dark border-2 border-background-light hover:bg-background-subtle hover:border-text-light focus:ring-text-medium',
    danger:
      'bg-action-expense hover:bg-accent-redGradient text-text-white shadow-lg hover:shadow-xl focus:ring-action-expense',
    success:
      'bg-action-income hover:bg-green-600 text-text-white shadow-lg hover:shadow-xl focus:ring-action-income',
    ghost: 'bg-transparent hover:bg-background-subtle text-text-dark focus:ring-text-medium',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
