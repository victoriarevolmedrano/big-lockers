import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La página se publica en GitHub Pages bajo /big-lockers/
// https://vitejs.dev/config/
export default defineConfig({
  base: '/big-lockers/',
  plugins: [react()],
})
