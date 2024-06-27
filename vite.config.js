import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:3001',
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
