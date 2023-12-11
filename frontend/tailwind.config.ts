/* eslint-disable max-lines */

import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  darkMode: 'class',
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './skeletons/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: '0px 8px 45px 0px rgba(56, 31, 115, 0.05)'
      },
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
          main: '#232323'
        }
      },
      fontSize: {
        'ma-number-big-1': ['50px', {
          fontWeight: 700,
          lineHeight: '60px'
        }],
        'ma-number-big-1-text': ['20px', {
          fontWeight: 600,
          lineHeight: '28px'
        }],
        'ma-other-explanation': ['12px', {
          fontWeight: 400,
          lineHeight: '16px'
        }],
        'ma-text-paragraph-1': ['18px', {
          fontWeight: 400,
          lineHeight: '32px'
        }],
        'ma-text-paragraph-2': ['16px', {
          fontWeight: 400,
          lineHeight: '26px'
        }],
        'ma-text-paragraph-3': ['14px', {
          fontWeight: 400,
          lineHeight: '24px'
        }],
        'ma-title-h0': ['70px', {
          fontWeight: 700,
          lineHeight: '70px'
        }],
        'ma-title-h2': ['46px', {
          fontWeight: 700,
          lineHeight: '50px'
        }],
        'ma-title-h3': ['30px', {
          fontWeight: 700,
          lineHeight: '45px'
        }],
        'ma-title-h4': ['18px', {
          fontWeight: 400,
          lineHeight: '26px'
        }],
        'mobile-ma-number-big-1': ['40px', {
          fontWeight: 700,
          lineHeight: '48px'
        }],
        'mobile-ma-number-big-1-text': ['16px', {
          fontWeight: 600,
          lineHeight: '22.4px'
        }],
        'mobile-ma-other-explanation': ['8px', {
          fontWeight: 400,
          lineHeight: '10px'
        }],
        'mobile-ma-title-h0': ['42px', {
          fontWeight: 700,
          lineHeight: '42px'
        }],
        'mobile-ma-title-h2': ['30px', {
          fontWeight: 700,
          lineHeight: '32px'
        }],
        'mobile-ma-title-h4': ['14px', {
          fontWeight: 400,
          lineHeight: '22px'
        }],
        'mobile-ma-paragraph-1': ['14px', {
          fontWeight: 400,
          lineHeight: '22px'
        }],
        'mobile-ma-paragraph-2': ['12px', {
          fontWeight: 400,
          lineHeight: '20px'
        }],
        'mobile-ma-paragraph-3': ['11px', {
          fontWeight: 400,
          lineHeight: '19px'
        }]
      },
      maxWidth: {
        md: '1140px',
        lg: '1720px'
      },
      screens: {
        sm: { max: '576px' },
        md: { max: '768px' },
        lg: { max: '992px' },
        xl: { max: '1200px' },
        '2xl': { max: '1400px' },
        primary: { max: '1140px' },
        secondary: { max: '1720px' }
      }
    }
  },
  plugins: [
    nextui()
  ]
};

export default config;
