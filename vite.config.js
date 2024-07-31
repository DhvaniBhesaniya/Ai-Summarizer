import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Ai-Summarizer/', // Ensure this matches your repository name exactly
  plugins: [react()],
})
