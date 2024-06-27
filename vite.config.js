import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: process.env.VITE_BACKEND_URL || 'https://backend-hotel-service.vercel.app',
=======
        target: process.env.VITE_BACKEND_URL || 'https://backend-hotel-service-19daphi3z-elijahs-projects-e6652eea.vercel.app',
>>>>>>> origin/main
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '/assets': '/public/assets'
    }
  },
  build: {
    outDir: 'dist',  // Default output directory for Vite build
  }
});
