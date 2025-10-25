export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: 'INCOME' | 'EXPENSE';
  note?: string;
  isLarge: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Summary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  balanceStatus: 'Positive' | 'Negative';
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: IGenericErrorResponse;
}

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface ExpenseFilters {
  type?: 'INCOME' | 'EXPENSE' | '';
  category?: string;
}

export interface CreateExpenseInput {
  title: string;
  amount: number;
  category: string;
  type: 'INCOME' | 'EXPENSE';
  note?: string;
}

export interface UpdateExpenseInput {
  amount?: number;
  type?: 'INCOME' | 'EXPENSE';
  note?: string;
}
