import {
  Outlet,
  NavigateOptions,
  ToOptions,
  useRouter,
  createRootRouteWithContext,
  HeadContent
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
      <HeadContent />
      <ToastProvider />
      <div className="dark text-foreground bg-background h-dvh">
        {/* <PageAnalytics> */}
        <Outlet />
        {/* </PageAnalytics> */}
      </div>
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
