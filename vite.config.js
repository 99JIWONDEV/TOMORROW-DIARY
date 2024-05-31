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
      '/diarys': {
        target: 'http://54.180.211.41',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diarys/, '/diarys')
      }
    }
  }
});