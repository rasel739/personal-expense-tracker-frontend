import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

const DollarIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

const ArrowUpIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M7 11l5-5m0 0l5 5m-5-5v12'
    />
  </svg>
);

const ArrowDownIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M17 13l-5 5m0 0l-5-5m5 5V6'
    />
  </svg>
);

const PlusIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
    />
  </svg>
);

const TrashIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
    />
  </svg>
);

const SearchIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

const ClipboardIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    />
  </svg>
);

const TagIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
    />
  </svg>
);

const ClockIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const ChartBarIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

const ScaleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
    />
  </svg>
);

const AlertIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    />
  </svg>
);

const ExclamationIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

const UserIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    />
  </svg>
);

const UserAddIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
    />
  </svg>
);

const LockIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

const KeyIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
    />
  </svg>
);

const MailIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
    />
  </svg>
);

const LogoutIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

const SpinnerIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={`animate-spin ${className}`}
    width={size}
    height={size}
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
);

const InboxIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
    />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

const LightningIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

export const Icons = {
  Dollar: DollarIcon,
  ArrowUp: ArrowUpIcon,
  ArrowDown: ArrowDownIcon,
  Plus: PlusIcon,
  Trash: TrashIcon,
  Search: SearchIcon,
  Clipboard: ClipboardIcon,
  Tag: TagIcon,
  Clock: ClockIcon,
  ChartBar: ChartBarIcon,
  Scale: ScaleIcon,
  Alert: AlertIcon,
  Exclamation: ExclamationIcon,
  User: UserIcon,
  UserAdd: UserAddIcon,
  Lock: LockIcon,
  Key: KeyIcon,
  Mail: MailIcon,
  Logout: LogoutIcon,
  Spinner: SpinnerIcon,
  Inbox: InboxIcon,
  ArrowRight: ArrowRightIcon,
  Lightning: LightningIcon,
};
