import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  base: '/rock-paper-scissors-game/',
  plugins: [react(), tailwindcss(), checker({ typescript: true, eslint: { lintCommand: 'eslint .', useFlatConfig: true } })],
})
