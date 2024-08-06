import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages//*.{js,ts,jsx,tsx,mdx}',
    './components//*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'], 
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'base': '16px', 
      },
      colors: {
        'custom-blue': '#25324B', 
        'custom-gray': '#7C8493',
        'custom-border': '#D6DDEB',
        'custom-teal': 'rgba(86, 205, 173, 0.1)',
        'Slate-Blue' : 'rgba(70, 64, 222, 1)',
        'neutral-100': '#25324B',
      },
    },
    width: {
      '10p': '10%',   // 10% width
      '20p': '15%',   // 25% width
      '50p': '50%',   // 50% width
      '75p': '75%',   // 75% width
      '60p' : '60%', // 60% width
      '80p' : '80%', // 80% width
      '90p': '90%',   // 90% width
      '100p': '100%', // 100% width
    },
  },
  plugins: [],
}
export default config