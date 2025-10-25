# 💰 Personal Expense Tracker

A **modern, full-stack expense tracking application** built with **Next.js 16** and **React 19**.
Track your income and expenses effortlessly with a **beautiful**, **responsive**, and **intuitive** interface.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure login and registration system
- 💸 **Expense Management** – Add, view, and delete income/expense transactions
- 📊 **Real-time Summary** – Instantly track total income, expenses, and balance
- 🏷️ **Category System** – Organize transactions by category (Food, Transport, Shopping, etc.)
- ⚠️ **Balance Warnings** – Alerts when spending exceeds income
- 💥 **Large Transaction Alerts** – Visual highlights for significant expenses
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop
- 🧩 **Modern Stack** – Built using the latest **Next.js 16** and **React 19**

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 20.x
- **Package Manager**: npm, yarn, pnpm, or bun
- **Backend API** (see [Backend Setup](#-backend-api-setup))

---

## 🛠️ Installation

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd personal-expense-tracker-frontend
```

### 2️⃣ Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

> ⚙️ Adjust the `NEXT_PUBLIC_API_URL` to match your backend server address.

---

## 🚀 Running the Application

### Development Mode

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open your browser at 👉 [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build the app
npm run build

# Start the production server
npm run start
```

---

## 📁 Project Structure

```
personal-expense-tracker-frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── (dashboard)/
│   │   │   │   └── dashboard/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   └── app-header.tsx
│   │   └── ui/
│   │       ├── expense/
│   │       │   ├── expense-form.tsx
│   │       │   ├── expense-list.tsx
│   │       │   └── summary.tsx
│   │       ├── form/
│   │       │   ├── input.tsx
│   │       │   ├── select.tsx
│   │       │   └── textarea.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useExpense.ts
│   │   └── useFetch.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── index.ts
├── public/
├── .eslintrc.config.mjs
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Key Technologies

| Category           | Technology                            |
| ------------------ | ------------------------------------- |
| Frontend Framework | **Next.js 16**                        |
| UI Library         | **React 19**                          |
| Language           | **TypeScript**                        |
| Styling            | **Tailwind CSS v4**                   |
| Hooks              | Custom hooks for auth & data fetching |
| Rendering          | Client-Side Rendering (CSR)           |

---

## 🧩 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

---

## 🔌 Backend API Setup

This frontend connects to a REST API backend.

### Authentication Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register new user |
| POST   | `/auth/login`    | User login        |

### Expense Endpoints

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/expenses`         | Fetch all expenses         |
| POST   | `/expenses`         | Create new expense         |
| DELETE | `/expenses/:id`     | Delete expense             |
| GET    | `/expenses/summary` | Get income/expense summary |

### Response Format Example

```typescript
{
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}
```

---

## 🎯 Usage Guide

### 🧍‍♂️ 1. Registration

- Go to the **Register** page
- Fill in **Name, Email, Password**
- Click **Create Account**

### 🔑 2. Login

- Enter your credentials
- Click **Sign In**

### ➕ 3. Adding Transactions

- Select **Income** or **Expense**
- Enter **Title**, **Amount**, **Category**
- Optionally add **Notes**
- Click **Add Transaction**

### 📋 4. Managing Transactions

- View transactions in a list
- Filter by **Type** or **Category**
- Delete transactions
- Track summary in **real time**

---

## 🎨 Customization

### Tailwind Theme Example

Edit `tailwind.config.ts` to adjust theme:

```typescript
colors: {
  primary: {
    deep: '#1E3A8A',
  },
  action: {
    income: '#10B981',
    expense: '#EF4444',
  },
  // Add more custom colors...
}
```

### Update API URL

Change `.env.local` or modify `src/hooks/useFetch.ts` with the new backend endpoint.

---

## 🐛 Common Issues & Fixes

### ❌ API Connection Error

✅ Check the following:

- Backend server is **running**
- `.env.local` contains the correct `NEXT_PUBLIC_API_URL`
- CORS is **enabled** on your backend

### ⚙️ Build Errors

Try:

```bash
rm -rf .next
rm -rf node_modules
npm install
```

And verify your **Node.js version** (≥ 20.x)

---

## 📄 License

This project is **private** and not licensed for public use.

---

## 🤝 Contributing

This is a **personal project**. Contributions are **not currently accepted**.

---

## 📧 Support

For issues or questions, please contact the **repository owner**.

---

**Built with ❤️ using Next.js & React**
