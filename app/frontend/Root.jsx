import { useRhinoConfig } from '@rhino-project/core/config';
import {
  ErrorBoundary as RollbarErrorBounday,
  Provider as RollbarProvider
} from '@rollbar/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FavIcon from './assets/images/favicon.png';
import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useHref,
  useNavigate
} from 'react-router-dom';
import { IdentityAnalytics } from '@rhino-project/core/components/analytics';
import { PageAnalytics } from '@rhino-project/core/components/analytics';
import { NextUIProvider, Toaster } from '@rhino-project/ui-nextui';
import { NotFoundPage } from '@rhino-project/core/components/shared';
import { ApplicationShell } from '@rhino-project/ui-nextui';
import { RhinoProvider } from '@rhino-project/core';
import { BaseOwnerProvider } from '@rhino-project/core/contexts';
import {
  AcceptInvitationPage,
  ForgotPasswordPage,
  ResetPasswordExpiredPage,
  ResetPasswordPage,
  SignInPage,
  SignUpPage
} from '@rhino-project/ui-nextui';
import {
  routePaths,
  accountSettingsRoute,
  settingsRoute
} from '@rhino-project/ui-nextui';
import { AuthenticatedRoute } from '@rhino-project/ui-nextui';
import { NonAuthenticatedRoute } from '@rhino-project/ui-nextui';
import { modelRoutes } from '@rhino-project/ui-nextui';
import {
  getAuthenticatedAppPath,
  getNonAuthenticatedAppPath,
  getSessionCreatePath
} from '@rhino-project/core/utils';
import { customRoutes } from 'routes/custom';
import { RhinoDevTool } from '@rhino-project/ui-nextui';
import { PrimaryNavigation } from './components/app/PrimaryNavigation';
import { SecondaryNavigation } from './components/app/SecondaryNavigation';

const LazyDesignSystemRoute = lazy(
  () => import('./pages/design/DesignSystemPage')
);

const AuthenticatedApp = () => {
  const {
    enableModelRoutes,
    env: { DESIGN_SYSTEM_ENABLED }
  } = useRhinoConfig();

  return (
    <AuthenticatedRoute>
      <BaseOwnerProvider>
        <IdentityAnalytics>
          <ApplicationShell
            primaryNavigationElement={<PrimaryNavigation />}
            secondaryNavigationElement={<SecondaryNavigation />}
          >
            <Routes>
              {accountSettingsRoute()}
              {settingsRoute()}
              {customRoutes()}
              {enableModelRoutes ? modelRoutes() : []}
              <Route path="*" element={<NotFoundPage />} />
              {DESIGN_SYSTEM_ENABLED && (
                <Route
                  path="__design/*"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyDesignSystemRoute />
                    </Suspense>
                  }
                ></Route>
              )}
            </Routes>
          </ApplicationShell>
        </IdentityAnalytics>
      </BaseOwnerProvider>
    </AuthenticatedRoute>
  );
};

const NonAuthenticatedApp = () => {
  return (
    <NonAuthenticatedRoute>
      <Routes>
        <Route
          key={`${routePaths.sessionCreate()}-redirect`}
          path={''}
          element={<Navigate to={getSessionCreatePath()} replace />}
          index
        />
        <Route
          key={routePaths.sessionCreate()}
          path={'/signin'}
          element={<SignInPage />}
        />
        <Route
          key={routePaths.userCreate()}
          path={routePaths.userCreate()}
          element={<SignUpPage />}
        />
        <Route
          key={routePaths.userAccept()}
          path={routePaths.userAccept()}
          element={<AcceptInvitationPage />}
        />
        <Route
          key={routePaths.forgotPassword()}
          path={routePaths.forgotPassword()}
          element={<ForgotPasswordPage />}
        />
        <Route
          key={routePaths.resetPassword()}
          path={routePaths.resetPassword()}
          element={<ResetPasswordPage />}
        />
        <Route
          key={routePaths.tokenExpired()}
          path={routePaths.tokenExpired()}
          element={<ResetPasswordExpiredPage />}
        />
      </Routes>
    </NonAuthenticatedRoute>
  );
};

const RootUI = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <div className="dark text-foreground bg-background h-dvhq">
        <PageAnalytics>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={getNonAuthenticatedAppPath()} replace />}
            />
            <Route
              path={`${getNonAuthenticatedAppPath()}/*`}
              element={<NonAuthenticatedApp />}
            />
            <Route path={`/:baseOwnerId/*`} element={<AuthenticatedApp />} />
            <Route
              path={getAuthenticatedAppPath()}
              element={<AuthenticatedApp />}
            />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageAnalytics>
      </div>
    </NextUIProvider>
  );
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
          <Router>
            <RootUI />
          </Router>
          <Toaster />
        </RollbarErrorBounday>
      </RollbarProvider>
    </RhinoProvider>
  );
};

export default Root;
