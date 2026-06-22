/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  root: import.meta.dirname,

  cacheDir: '../node_modules/.vite/frontend',

  server: {
    host: 'localhost',
    port: 4200,
  },

  preview: {
    host: 'localhost',
    port: 4300,
  },

  plugins: [vue()],

  build: {
    outDir: '../../dist/apps/frontend',
    emptyOutDir: true,
    reportCompressedSize: true,

    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
