/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: '#25D366',
        'whatsapp-dark': '#128C7E',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      width: {
        '88': '22rem',
        '112': '28rem',
      },
      keyframes: {
        'pulse-float-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(10px, -10px) scale(1.1)', opacity: '1' }
        },
        'pulse-float-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(-10px, 10px) scale(1.1)', opacity: '1' }
        },
        'pulse-float-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(10px, 10px) scale(1.1)', opacity: '1' }
        }
      },
      animation: {
        'pulse-float-1': 'pulse-float-1 3s ease-in-out infinite',
        'pulse-float-2': 'pulse-float-2 4s ease-in-out infinite',
        'pulse-float-3': 'pulse-float-3 5s ease-in-out infinite'
      },
      height: {
        '88': '22rem',
        '112': '28rem',
      },
      maxWidth: {
        'screen': '100vw',
        'full': '100%',
        'none': 'none',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable utilities that might cause overflow
    container: false,
  },
  safelist: [
    'overflow-x-hidden',
    'max-w-full',
    'max-w-screen',
  ],
}