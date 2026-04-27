/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fg: '#111111',
        bg: '#FFFFFF',
        primary: '#5857FF',
        secondary: '#6B6A6A',
        tertiary: '#E2E2E2',
        quaternary: '#F3F2F2',
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'ui-sans-serif', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Menlo', 'Consolas', 'Monaco', 'monospace'],
      },
      letterSpacing: {
        body: '-0.01em',
        heading: '-0.02em',
        gigantic: '-0.03em',
      },
    },
  },
  plugins: [],
};
