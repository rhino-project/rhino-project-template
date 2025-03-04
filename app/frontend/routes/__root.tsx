import {
  Outlet,
  useRouter,
  createRootRouteWithContext,
  HeadContent
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import {
  HeroUIProvider,
  ToastProvider,
  useGroupAnalytics,
  useIdentifyAnalytics,
  usePageAnalytics
} from '@rhino-project/ui-heroui';
import { RhinoContextType } from '@rhino-project/core';

interface AppRouterContext {
  rhino: RhinoContextType;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: RouteComponent
});

function RouteComponent() {
  const router = useRouter();

  useIdentifyAnalytics();
  useGroupAnalytics();
  usePageAnalytics();

  return (
    <HeroUIProvider
      navigate={(to, options) => router.navigate({ to, ...options })}
      useHref={(to) => router.buildLocation({ to }).href}
      labelPlacement="inside"
    >
      <HeadContent />
      <ToastProvider />
      <div className="h-dvh">
        {/* <PageAnalytics> */}
        <Outlet />
        {/* </PageAnalytics> */}
      </div>
      <TanStackRouterDevtools />
    </HeroUIProvider>
  );
}
