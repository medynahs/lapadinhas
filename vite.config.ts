import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';
import checker from 'vite-plugin-checker';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  build: {
    outDir: './build',
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
});
