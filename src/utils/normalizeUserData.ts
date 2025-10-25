import { User } from '@/types';

const normalizeUserData = (data: unknown): User | null => {
  if (!data) return null;

  if (
    typeof data === 'object' &&
    data !== null &&
    'user' in data &&
    typeof (data as { user?: unknown }).user === 'object'
  ) {
    return (data as { user: User }).user;
  }

  return null;
};

export default normalizeUserData;
