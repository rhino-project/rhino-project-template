import React from 'react';
import { createRoot } from 'react-dom/client';

import modelLoader from '@rhino-project/core/models';

import '@/styles/styles.scss';
import '@/styles/global.css';
import { components } from '../models/models';

declare module '@rhino-project/core' {
  type SchemaToResource = {
    [K in keyof components['schemas']]: components['schemas'][K];
  };

  interface Resources extends SchemaToResource {}
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
modelLoader.loadModels().then(async () => {
  // Import the Root dynamically so that other modelLoader uses are assured
  // to have access to the already loaded models
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { default: Root } = await import('@/Root');

  const container = document.getElementById('root');
  // @ts-expect-error createRoot is not yet in the types
  const root = createRoot(container);
  root.render(<Root />);
});
