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