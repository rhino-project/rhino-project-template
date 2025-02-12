import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import modelLoader from '@rhino-project/core/models';

import '@/styles/global.css';
import { components } from '../models/models';

declare module '@rhino-project/core' {
  type SchemaToResource = {
    [K in keyof components['schemas']]: components['schemas'][K];
  };

  interface Resources extends SchemaToResource {}
}

// declare module '@react-types/shared' {
//   interface RouterConfig {
//     routerOptions: NavigateOptions;
//   }
// }

modelLoader.loadModels().then(async () => {
  // Import the Root dynamically so that other modelLoader uses are assured
  // to have access to the already loaded models

  const { default: Root } = await import('@/Root');

  const container = document.getElementById('root');
  // @ts-expect-error createRoot is not yet in the types
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Root />
    </StrictMode>
  );
});
