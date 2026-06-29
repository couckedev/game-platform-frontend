/// <reference types="vitest" />

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig(({ mode }) => {
  const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
  const env = loadEnv(mode, projectRoot, '');
  const required = [
    'VITE_BASE_URL',
    'VITE_BASE_PORT',
    'VITE_KEYCLOAK_URL',
    'VITE_KEYCLOAK_REALM',
    'VITE_KEYCLOAK_CLIENT_ID',
    'VITE_PLAYER_API_BASE_URL',
  ];

  for (const key of required) {
    if (!env[key]) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }

  return {
    root: import.meta.dirname,

    cacheDir: '../node_modules/.vite/frontend',

    server: {
      host: env.VITE_BASE_URL,
      port: parseInt(env.VITE_BASE_PORT, 10),
    },

    proxy: {
      '/player-api': {
        target: env.VITE_PLAYER_API_BASE_URL,
        changeOrigin: true,
      },
    },

    plugins: [vue(), tailwindcss(), svgLoader()],
    resolve: {
      conditions: ['style', 'import', 'module', 'default'],
    },

    build: {
      outDir: '../../dist/apps/frontend',
      emptyOutDir: true,
      reportCompressedSize: true,

      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
