import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '700px',
          lg: '900px',
          xl: '1000px',
          '2xl': '1200px',
        },
      },
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    fontSize: {
      '2xl': '46px',
      xl: '44px',
      lg: '38px',
      md: '24px',
      sm: '22px',
      base: '20px',
      xs: '18px',
      '2xs': '16px',
      '3xs': '12px',
    },
    colors: {
      purple: {
        DEFAULT: '#165686',
        100: '#0D72B2',
      },
      black: {
        DEFAULT: '#000000',
        100: '#272727',
        200: '#303038',
        300: '#050505',
      },
      gray: {
        DEFAULT: '#303038',
        100: '#00000071',
        200: '#848484',
        300: '#D3D3D3',
        400: '#00000029',
        500: '#F4F4F4',
        light: '#EFEFEF',
      },
      red: {
        DEFAULT: '#CB1010',
        100: '#F00E0E',
        200: '#FF0000',
      },
      blue: '#20A2C9',
      white: '#fff',
      green: '#02C755',
    },
  },
  variants: {},
  plugins: [],
};
export default config;
