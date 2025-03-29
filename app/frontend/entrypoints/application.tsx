import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/global.css';

import Root from '../Root';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
