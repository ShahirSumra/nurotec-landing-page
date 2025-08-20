/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xl': '1800px',
      '2xl': '1536px',
      'xl': '1200px',
      'md': '768px',
    },
    extend: {
      fontFamily: {
        PowerGroteskTrial: ['Power Grotesk Trial', 'sans-serif'],
  		},
      colors: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-800': 'rgba(255, 255, 255, 0.8)',
        'white-070': 'rgba(255, 255, 255, 0.07)',
        'primary': '#65e18f'
      },
      backgroundColor: {
        'blue': '#10367E',
        'light-green': '#5EDD85',
        'white-070': 'rgba(255, 255, 255, 0.07)',
      },
      backgroundImage: {
        'content-gradient-top': 'linear-gradient(180deg, #00060C 17.53%, rgba(0, 6, 12, 0.09) 75.41%)',
        'content-gradient-bottom': 'linear-gradient(4deg, #00060C 21.32%, rgba(0, 6, 12, 0.09) 75.06%);'
      },
      borderRadius: {
      },
      borderColor: {
        'white-200': 'rgba(255, 255, 255, 0.2)',
      },
      spacing: {
        18: '72px',
        13: '52px',
        14: '56px',
        15: '60px',
        21: '84px',
      },
      fontSize: {
        'navlink-xl': ['16px', { lineHeight: '130%', fontWeight: 300 }],
        'description-xl': ['16px', { lineHeight: '140%', fontWeight: 300 }],
        'main-title-2xl': ['60px', { lineHeight: '110%', fontWeight: 500, letterSpacing: "-0.6px" }],
        'button-2xl': ['16px', { lineHeight: '130%', fontWeight: 500 }],
        'product-title-2xl': ['24px', { lineHeight: '110%', letterSpacing: '-0.24px' }],
        'product-description-2xl': ['14px', {lineHeight: '140%', fontWeight: 300, }],
        'features-title-2xl': ['24px', {lineHeight: '110%', letterSpacing: '-0.24px', fontWeight: 500 }],
        'cross-chain-title-2xl': ['50px', { lineHeight: '110%', letterSpacing: '-0.5px', fontWeight: 500 }],
        'big-title-2xl': ['100px', { lineHeight: '110%', letterSpacing: '-1px', fontWeight: 400 }]
      }
    },
  },
  plugins: [],
}

