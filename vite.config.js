import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'https://dlsqja3436.codns.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, '/users')
      },
      '/diarys': {
        target: 'https://dlsqja3436.codns.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diarys/, '/diarys')
      }
    }
  }
});