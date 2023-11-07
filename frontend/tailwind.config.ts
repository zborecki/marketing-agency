import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  darkMode: 'class',
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#FFFFFF',
          50: '#F6F8FB',
          100: '#E2E8EF',
          150: '#B6BDC5'
        },
        primary: {
          dark: '#292168',
          main: '#413596'
        },
        secondary: {
          dark: '#E1AA00',
          main: '#F5C637'
        },
        typography: {
          main: '#000000'
        }
      },
      fontSize: {
        'ma-other-explanation': ['12px', {
          fontWeight: 400,
          lineHeight: '16px'
        }],
        'ma-text-paragraph-3': ['14px', {
          fontWeight: 400,
          lineHeight: '24px'
        }]
      },
      maxWidth: {
        primary: '1140px',
        secondary: '1720px'
      }
    }
  },
  plugins: [
    nextui()
  ]
};
export default config;
