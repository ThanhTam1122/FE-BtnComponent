import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-pattern': "url('/images/header-bg.png')",
      },
      lineHeight: {
        '11': '48px',
        '12': '64px',
        '13': '72px',
        '14': '84px'
      },
      fontFamily: {
        'title': 'Poppins'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: '#2947A9',
        yellow: {
          primary: '#F9995D'
        },
        word: {
          primary: '#292E3D'
        },
        neutral: {
          '100': '#E0E3EB',
          '200': '#C2C7D6',
          '300': '#A3AAC2',
          '400': '#858EAD',
          '500': '#667299',
          '600': '#525B7A',
          '700': '#3D445C',
          '800': '#292E3D',
          '900': '#14171F'
        }
      },
      boxShadow: {
        xs: '0px 0px 6px rgba(0, 0, 0, 0.05)',
        sm: '0px 0px 25px rgba(0, 0, 0, 0.10)',
        md: '4px 4px 25px rgba(0, 0, 0, 0.10)',
        outline: '4px 4px 25px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [],
}
export default config
