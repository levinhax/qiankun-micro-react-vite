import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10300,
    // open: true,
    proxy: {
			'/api': 'http://localhost:3001',
      '/api/test': {
        changeOrigin: true,
        target: 'http://10.11.32.173:8080/',
        rewrite: (path) => path.replace(/^\/api\/test/, '')
      }
		}
  },
})
