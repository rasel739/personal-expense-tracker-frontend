import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          soft: '#F9FAFB',
          light: '#E5E7EB',
          subtle: '#F3F4F6',
        },

        primary: {
          deepBlue: '#1E3A8A',
          textDark: '#111827',
        },

        action: {
          income: '#10B981',
          expense: '#EF4444',
          warning: '#F59E0B',
        },

        accent: {
          indigo: '#3B82F6',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          redGradient: '#F87171',
          orangeGradient: '#F97316',
        },

        text: {
          dark: '#374151',
          medium: '#6B7280',
          light: '#9CA3AF',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;
