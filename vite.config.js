import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['lib/**/*.spec.js'],
    coverage: {
      include: ['lib/**/*.{js,jsx}'],
    },
  },
})
