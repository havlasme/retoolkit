import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
// https://rollupjs.org/configuration-options/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: [resolve('lib/main.js')],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
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
