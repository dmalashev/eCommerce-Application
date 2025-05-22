import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,js}"',
        useFlatConfig: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests.ts',
    exclude: [...configDefaults.exclude],
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
  },
});
