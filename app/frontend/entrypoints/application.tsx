import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/global.css';
import { components } from '../models/models';
import Root from '../Root';

declare module '@rhino-project/core' {
  type SchemaToResource = {
    [K in keyof components['schemas']]: components['schemas'][K];
  };

  interface Resources extends SchemaToResource {}
}

const container = document.getElementById('root');
// @ts-expect-error createRoot is not yet in the types
const root = createRoot(container);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
