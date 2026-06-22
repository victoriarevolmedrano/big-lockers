/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Breakpoints (mobile-first). Sin prefijo = mobile; lg: = web/desktop.
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        white: '#ffffff',

        /* ── FOUNDATIONS (paleta cruda) ──────────────────────────── */
        green: {
          100: '#dce4e0',
          200: '#acc0b6',
          300: '#7d9b8c',
          400: '#4e7762',
          500: '#134a2e',
          600: '#0e3823',
        },
        'light-green': {
          100: '#dceee0',
          200: '#b8ddc1',
          300: '#95cda3',
          400: '#72bc84',
          500: '#0a8f4d',
        },
        beige: {
          100: '#fdfaf6',
          200: '#fbf5ed',
          300: '#ede2d0',
          400: '#f7ecdc',
          500: '#c6bdb0',
          600: '#9c978d',
          700: '#635e58',
        },
        gray: {
          50: '#f4f4f4',
          100: '#e9e9e9',
          200: '#c8c8c8',
          300: '#909090',
          400: '#6f6f6f',
          500: '#595959',
          600: '#434343',
          700: '#222222',
        },
        red: {
          100: '#f90825',
          200: '#75001c',
          300: '#42030b',
        },
        blue: {
          100: '#b8c6e1',
          200: '#686da1',
          300: '#29166f',
        },

        /* ── SEMÁNTICOS (lo que usamos en los componentes) ───────── */
        // Primary BL  → verde de marca
        primary: {
          DEFAULT: '#134a2e', // Main  (Green.500)
          dark: '#0e3823', //    Dark  (Green.600)
          light: '#4e7762', //   Light (Green.400)
          lighter: '#7d9b8c', // Lighter (Green.300)
          lightest: '#acc0b6', //Lightest (Green.200)
        },
        // Secondary → light-green
        secondary: {
          DEFAULT: '#72bc84', // Main      (Light-green.400)
          dark: '#0a8f4d', //    Main dark (Light-green.500)
          light: '#95cda3', //   Light     (Light-green.300)
          lighter: '#b8ddc1', // Lighter   (Light-green.200)
          lightest: '#dceee0', //Lightest  (Light-green.100)
        },
        // Surface / Beige semántico (mismas tintas beige, nombres con intención)
        surface: {
          DEFAULT: '#f7ecdc', // main      (Beige.400)
          darkest: '#635e58', // (Beige.700)
          darker: '#9c978d', //  (Beige.600)
          dark: '#c6bdb0', //    (Beige.500)
          light: '#ede2d0', //   (Beige.300)
          lighter: '#fbf5ed', // (Beige.200)
          lightest: '#fdfaf6', //(Beige.100)
        },
        // Neutral → escala de grises
        neutral: {
          DEFAULT: '#6f6f6f', // Main     (Gray.400)
          darkest: '#222222', // (Gray.700)
          darker: '#434343', //  (Gray.600)
          dark: '#595959', //    (Gray.500)
          light: '#909090', //   (Gray.300)
          lighter: '#c8c8c8', // (Gray.200)
          lightest: '#e9e9e9', // (Gray.100)
          white: '#ffffff',
        },
        // Primary Francia Cont → rojo
        'francia-cont': {
          DEFAULT: '#75001c', // Main (Red.200)
          dark: '#42030b', //    Dark (Red.300)
          light: '#f90825', //   Light (Red.100)
        },
        // Primary Francia SA → azul
        'francia-sa': {
          DEFAULT: '#686da1', // Main (Blue.200)
          dark: '#29166f', //    Dark (Blue.300)
          light: '#b8c6e1', //   Light (Blue.100)
        },
      },

      // Spacing semántico (Padding-spacing de Figma).
      // Uso: p-md, gap-lg, mt-2xl, etc.
      spacing: {
        '2xs': '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '120px',
      },

      fontFamily: {
        // Poppins: Google Font (importada en index.css)
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        // Zuume: fuente comercial — requiere los archivos (ver index.css)
        zuume: ['Zuume', 'Poppins', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'], // default del proyecto
      },
    },
  },
  plugins: [],
}
