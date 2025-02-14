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
import {
  HeroUIProvider,
  NotFoundPage,
  ToastProvider
} from '@rhino-project/ui-heroui';
import { ApplicationShell } from '@rhino-project/ui-heroui';
import { RhinoProvider } from '@rhino-project/core';
import { BaseOwnerProvider } from '@rhino-project/core/contexts';
import {
  AcceptInvitationPage,
  ForgotPasswordPage,
  ResetPasswordExpiredPage,
  ResetPasswordPage,
  SignInPage,
  SignUpPage
} from '@rhino-project/ui-heroui';
import {
  routePaths,
  accountSettingsRoute,
  settingsRoute
} from '@rhino-project/ui-heroui';
import { AuthenticatedRoute } from '@rhino-project/ui-heroui';
import { NonAuthenticatedRoute } from '@rhino-project/ui-heroui';
import { modelRoutes } from '@rhino-project/ui-heroui';
import {
  getAuthenticatedAppPath,
  getNonAuthenticatedAppPath,
  getSessionCreatePath
} from '@rhino-project/core/utils';
import { customRoutes } from 'routes/custom';
import { RhinoDevTool } from '@rhino-project/ui-heroui';
import { PrimaryNavigation } from './components/app/PrimaryNavigation';
import { SecondaryNavigation } from './components/app/SecondaryNavigation';
import DashboardPage from './pages/DashboardPage';

const LazyDesignSystemRoute = lazy(
  () => import('./pages/design/DesignSystemPage')
);

const AuthenticatedApp = () => {
  const {
    enableModelRoutes,
    env: { DESIGN_SYSTEM_ENABLED }
  } = useRhinoConfig();
  const navigate = useNavigate();

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
              <Route
                key="custome"
                index
                element={<DashboardPage navigate={navigate} />}
              />
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

// const useMyHref = (options) => {
//   const href = useHref(options);

//   console.log('useMyHref', options, href);

//   return href;
// };

const RootUI = () => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider
      navigate={navigate}
      useHref={useHref}
      labelPlacement="inside"
    >
      <ToastProvider />
      <div className="dark text-foreground bg-background h-dvh">
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
    </HeroUIProvider>
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
        </RollbarErrorBounday>
      </RollbarProvider>
    </RhinoProvider>
  );
};

export default Root;
