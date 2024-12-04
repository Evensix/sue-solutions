/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      'black-alpha': {
        'alpha8': '#14000000',
        'alpha16': '#28000000',
        'alpha25': '#40000000',
        'alpha40': '#66000000',
        'alpha50': '#80000000',
        'alpha60': '#99000000',
        'alpha70': '#B3000000',
        'alpha80': '#CC000000',
        'alpha90': '#E6000000',
      },
      'white-alpha': {
        'alpha8': '#14FFFFFF',
        'alpha16': '#29FFFFFF',
        'alpha25': '#40FFFFFF',
        'alpha40': '#66FFFFFF',
        'alpha50': '#80FFFFFF',
        'alpha60': '#99FFFFFF',
        'alpha70': '#B3FFFFFF',
        'alpha80': '#CCFFFFFF',
        'alpha90': '#E6FFFFFF',
      },
      transparent: '#00FFFFFF',
      'neutral-blue':{
        25: '#F9F9FA'
      },
      error: {
        25: '#FEF2F2',
      },
      sucess: {
        25: '#F0FDF4',
      },
      warning: {
        25: '#FFF9ED',
      },
      info: {
        25: '#F0F9FF',
      },
      purple: {
        25: '#F9F0FF'
      },
      

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

