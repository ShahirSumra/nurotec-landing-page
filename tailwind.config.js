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
      '4xl': '2000px',
      '3xl': '1800px',
      '2xl': '1536px',
      'xl': '1200px',
      'lg': '992px',
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
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
      },
      spacing: {
        18: '72px',
        13: '52px',
        14: '56px',
        15: '60px',
        21: '84px',
      },
      fontSize: {
        'navlink': ['14px', { lineHeight: '130%', fontWeight: 300 }],
        'description': ['12px', { lineHeight: '140%', fontWeight: 300 }],
        'main-title': ['36px', { lineHeight: '110%', fontWeight: 500, letterSpacing: "-0.36px" }],
        'main-title-md': ['48px', { letterSpacing: "-0.48px" }],
        'main-title-xl': ['54px', { letterSpacing: "-0.54px" }],
        'main-title-2xl': ['60px', { letterSpacing: "-0.6px" }],
        'main-title-3xl': ['72px', { letterSpacing: "-0.72px" }],
        'button': ['14px', { lineHeight: '130%', fontWeight: 500 }],
        'product-title': ['20px', { letterSpacing: '-0.20px', fontWeight: 500, lineHeight: '110%' }],
        'product-title-xl': ['22px', { letterSpacing: '-0.28px' }],
        'product-title-2xl': ['24px', { letterSpacing: '-0.24px' }],
        'product-title-3xl': ['28px', { letterSpacing: '-0.28px' }],
        'product-description': ['12px', {lineHeight: '140%', fontWeight: 300 }],
        'features-title': ['20px', {lineHeight: '110%', letterSpacing: '-0.20px', fontWeight: 500 }],
        'features-title-2xl': ['22px', { letterSpacing: '-0.24px' }],
        'features-title-2xl': ['24px', { letterSpacing: '-0.24px' }],
        'features-title-3xl': ['26px', { letterSpacing: '-0.28px' }],
        'learn-more': ['10px', { lineHeight: '140%', fontWeight: 300 }],
        'cross-chain-title': ['32px', { lineHeight: '110%', letterSpacing: '-0.5px', fontWeight: 500 }],
        'cross-chain-title-md': ['40px', { letterSpacing: '-0.4px' }],
        'cross-chain-title-xl': ['44px', { letterSpacing: '-0.44px' }],
        'cross-chain-title-2xl': ['50px', { letterSpacing: '-0.5px' }],
        'cross-chain-title-3xl': ['56px', { letterSpacing: '-0.56px' }],
        'big-title': ['44px', { lineHeight: '110%', letterSpacing: '-0.4px', fontWeight: 400 }],
        'big-title-md': ['58px', { letterSpacing: '-0.58px', }],
        'big-title-xl': ['72px', { letterSpacing: '-0.72x', }],
        'big-title-2xl': ['100px', { letterSpacing: '-1px', }],
        'big-title-3xl': ['144px', { letterSpacing: '-1.44px', }],
        'payment-gateway-title': ['24px', { lineHeight: '', fontWeight: '', letterSpacing: '0.24px' }],
        'payment-gateway-title-xl': ['28px', { letterSpacing: '-0.28px' }],
        'payment-gateway-title-2xl': ['30px', { letterSpacing: '-0.3px' }],
        'payment-gateway-title-3xl': ['32px', { letterSpacing: '-0.32px' }],
        
      },
      keyframes: {
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradientFlow: "gradientFlow 3s ease infinite",
      },
    },
  },
  plugins: [],
}

