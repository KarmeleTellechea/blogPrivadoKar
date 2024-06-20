import { defineConfig } from 'vite'  
import { fileURLToPath } from 'node:url'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  resolve: {
    alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
     ]
  },
  publicDir: 'static',
  build: {
    outDir: 'public'
  }
  
})