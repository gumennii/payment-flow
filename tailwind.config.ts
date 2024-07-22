import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        button: {
          DEFAULT: 'var(--button)',
          foreground: 'var(--button-foreground)',
        },
        error: 'var(--error)',
        input: 'var(--input)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
      },
    },
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
      serif: ['var(--font-serif)', '"Times New Roman", serif'],
    },
    fontSize: {
      '3xl': '1.75rem',
    },
    maxWidth: {
      sm: '376px',
      xl: '576px',
    },
  },
  plugins: [],
};
export default config;
