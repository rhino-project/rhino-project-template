import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import eslint from 'vite-plugin-eslint';
import { RhinoProjectVite } from '@rhino-project/vite-plugin-rhino';
import ViteRails from 'vite-plugin-rails';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      ViteRails(),
      RhinoProjectVite({ enableJsxInJs: false }),
      react(),
      {
        // default settings on build (i.e. fail on error)
        ...eslint(),
        apply: 'build'
      },
      // https://github.com/vitest-dev/vitest/issues/4055#issuecomment-1732994672
      mode !== 'test' && {
        // do not fail on serve (i.e. local development)
        ...eslint({
          failOnWarning: false,
          failOnError: false
        }),
        apply: 'serve',
        enforce: 'post'
      },
      ViteEjsPlugin()
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
