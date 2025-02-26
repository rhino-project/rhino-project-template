import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, Plugin } from 'vite';
import ViteEslint from '@nabla/vite-plugin-eslint';
import { RhinoProjectVite } from '@rhino-project/vite-plugin-rhino';
import ViteRails from 'vite-plugin-rails';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // https://main.vitejs.dev/config/#using-environment-variables-in-config
  const env = loadEnv(mode, process.cwd(), '');

  const hmr = env.VITE_RUBY_HMR_CLIENT_PORT
    ? { clientPort: Number(env.VITE_RUBY_HMR_CLIENT_PORT) }
    : {};

  return {
    resolve: {
      dedupe: ['@heroui/react', 'react-router-dom', '@react-aria/utils']
    },

    server: {
      hmr
    },

    plugins: [
      TanStackRouterVite(),
      ViteRails(),
      RhinoProjectVite({ enableJsxInJs: false }),
      react(),
      ViteEslint({ eslintOptions: { cache: false } })
    ],

    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['__tests__/shared/setupTests'],
      // For now until speed improves https://dev.to/thejaredwilcurt/improving-vitest-performance-42c6
      testTimeout: 10000
    }
  };
});
