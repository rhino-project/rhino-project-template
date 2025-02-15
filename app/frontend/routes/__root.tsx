import {
  createRootRoute,
  Link,
  Outlet,
  NavigateOptions,
  ToOptions,
  useRouter,
  createRootRouteWithContext
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { HeroUIProvider, ToastProvider } from '@rhino-project/ui-heroui';
import { PageAnalytics } from '@rhino-project/core/components/analytics';
import { RhinoContextType } from '@rhino-project/core';

declare module '@react-types/shared' {
  interface RouterConfig {
    href: ToOptions['to'];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

export const Base = () => {
  const router = useRouter();

  return (
    <HeroUIProvider
      navigate={(to, options) => router.navigate({ to, ...options })}
      useHref={(to) => router.buildLocation({ to }).href}
      labelPlacement="inside"
    >
      <ToastProvider />
      {/* <PageAnalytics> */}
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* </PageAnalytics> */}
      <TanStackRouterDevtools />
    </HeroUIProvider>
  );
};

interface AppRouterContext {
  rhino: RhinoContextType;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: Base
});
