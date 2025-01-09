import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define a pasta de saída como 'dist'
    emptyOutDir: true, // Limpa a pasta 'dist' antes de gerar a nova build
  },
})
