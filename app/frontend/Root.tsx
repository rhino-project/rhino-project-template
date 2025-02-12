import { useRhinoConfig } from '@rhino-project/core/config';
import {
  ErrorBoundary as RollbarErrorBounday,
  Provider as RollbarProvider
} from '@rollbar/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FavIcon from './assets/images/favicon.png';
import { Helmet } from 'react-helmet';
import { NotFoundPage } from '@rhino-project/ui-heroui';
import { RhinoProvider, useRhinoContext } from '@rhino-project/core';
import { RhinoDevTool } from '@rhino-project/ui-heroui';

import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  defaultPendingComponent: () => <div>Pending...</div>,
  defaultPreload: 'intent',
  scrollRestoration: true,

  // This will be set after we wrap the app in an RhinoProvider
  context: { rhino: undefined! }
});

// Render the app
const RootUI = () => {
  const rhino = useRhinoContext();

  return <RouterProvider router={router} context={{ rhino }} />;
};

const Root = () => {
  const {
    appName,
    env: { ROLLBAR_ACCESS_TOKEN, ROLLBAR_ENV, ROLLBAR_ENABLED }
  } = useRhinoConfig();
  const rollbarConfig = {
    accessToken: ROLLBAR_ACCESS_TOKEN,
    environment: ROLLBAR_ENV,
    enabled: ROLLBAR_ENABLED,
    captureUncaught: true,
    captureUnhandledRejections: true
  };

  return (
    <RhinoProvider>
      <RollbarProvider config={rollbarConfig}>
        <RollbarErrorBounday>
          <RhinoDevTool />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <Helmet>
            <title>{appName}</title>
            <link rel="icon" type="image/png" sizes="16x16" href={FavIcon} />
          </Helmet>

          <RootUI />
        </RollbarErrorBounday>
      </RollbarProvider>
    </RhinoProvider>
  );
};

export default Root;
