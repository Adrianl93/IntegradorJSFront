/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        success: 'rgb(12, 124, 12)',
        info: '#3498db',
      },
      backgroundColor: {
        'F2EDDC': '#F2EDDC',
      },
      animation: {
        'fade-down': 'fade-down 0.8s ease-out',
        'menu-open': 'menu-open 0.3s ease-in-out',
      },
      keyframes: {
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-25px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'menu-open': {
          '0%': {
            height: '0',
            opacity: '0',
          },
          '100%': {
            height: 'auto',
            opacity: '1',
          },
        },
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
      // Aquí puedes agregar más clases de transición si es necesario
    },
  },
  plugins: [],
}

