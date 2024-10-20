import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import ViteEslint from '@nabla/vite-plugin-eslint';
import { RhinoProjectVite } from '@rhino-project/vite-plugin-rhino';
import ViteRails from 'vite-plugin-rails';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // https://main.vitejs.dev/config/#using-environment-variables-in-config
  const env = loadEnv(mode, process.cwd(), '');

  const hmr = env.VITE_RUBY_HMR_CLIENT_PORT
    ? { clientPort: Number(env.VITE_RUBY_HMR_CLIENT_PORT) }
    : {};

  return {
    server: {
      hmr
    },

    plugins: [
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
