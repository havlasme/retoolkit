import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: [resolve('lib/main.js')],
      formats: ['es'],
    },
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      external: ['react', 'react/jsx-runtime'],
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
      },
    },
  },
  test: {
    // https://vitest.dev/config/
    globals: true,
    environment: 'jsdom',
    include: ['lib/**/*.spec.js'],
    coverage: {
      include: ['lib/**/*.{js,jsx}'],
      reporter: ['text', 'html', 'cobertura'],
    },
  },
})
