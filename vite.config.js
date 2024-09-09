import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'router': resolve(__dirname, 'src/router'),
      'components': resolve(__dirname, 'src/_components'),
      'stores': resolve(__dirname, 'src/stores'),
      'store': resolve(__dirname, 'src/store.js'),
      'utils': resolve(__dirname, 'src/utils')
    }
  },
  build: {
    outDir: 'dist'
  },
  base: '/'
})
