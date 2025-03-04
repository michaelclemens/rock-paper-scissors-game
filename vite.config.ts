// vite.config.ts
/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  base: '/rock-paper-scissors-game/',
  plugins: [react(), tailwindcss(), checker({ typescript: true, eslint: { lintCommand: 'eslint .', useFlatConfig: true } })],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
