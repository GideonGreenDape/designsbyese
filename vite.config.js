import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with your API server's address
        changeOrigin: true,
        secure: false, // Set to false if the backend is using self-signed certificates
      },
    },
  },
})
