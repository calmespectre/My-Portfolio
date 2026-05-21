import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],   // ✅ OK – each plugin is a fresh function call
})