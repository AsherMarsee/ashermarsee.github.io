import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'

export default defineConfig({
  plugins: [react()],
  base: '/personal-site/', // Must match your GitHub repository name exactly
})
