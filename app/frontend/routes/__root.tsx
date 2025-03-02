import {
  Outlet,
  useRouter,
  createRootRouteWithContext,
  HeadContent
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { HeroUIProvider, ToastProvider } from '@rhino-project/ui-heroui';
// import { PageAnalytics } from '@rhino-project/core/components/analytics';
import { RhinoContextType } from '@rhino-project/core';

interface AppRouterContext {
  rhino: RhinoContextType;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  beforeLoad: ({ context: { rhino }, location }) => {
    console.log('beforeLoad __root', location, rhino.user);
  },
  loader: async ({ context: { rhino }, location }) => {
    console.log('loader __root', location, rhino.user);
  },
  component: RouteComponent,
  onEnter: ({ context: { rhino }, fullPath: pathname, ...rest }) => {
    console.log('onEnter __root', pathname, rhino.user, rest);
    if (window.analytics) {
      window.analytics.page(pathname);
      window.analytics.identify(rhino.user.id, { email: rhino.user.email });
      // window.analytics.group(baseOwner.id, { name: baseOwner.name });
    }
  },
  onStay: ({ context: { rhino }, pathname, ...rest }) => {
    console.log('onStay __root', pathname, rhino.user, rest);
    if (window.analytics) window.analytics.page(pathname);
  }
});

function RouteComponent() {
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
}
