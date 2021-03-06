import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./",
  build:{
    outDir:"dist",
    assetsDir:"assets",
    sourcemap:false,
    chunkSizeWarningLimit: 2000,
  }
 
})
