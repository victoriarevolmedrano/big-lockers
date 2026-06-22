/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Breakpoints. Tailwind es mobile-first: las clases sin prefijo
    // aplican a mobile, y `md:`/`lg:` aplican de ese ancho hacia arriba.
    screens: {
      sm: '640px',
      md: '768px', // tablet
      lg: '1024px', // web / desktop
      xl: '1280px',
    },
    extend: {
      // 👇 Aquí mapearemos los design tokens de tu Figma (Dev Mode):
      colors: {
        // ejemplo: brand: '#1A1A1A',
      },
      fontFamily: {
        // ejemplo: sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        // ejemplo: card: '16px',
      },
      spacing: {
        // ejemplo: '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
