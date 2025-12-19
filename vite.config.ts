import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/calc-quickly/',
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, 'src'),
    },
  },
})
