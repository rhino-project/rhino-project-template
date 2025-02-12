import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { HeroUIProvider, ToastProvider } from '@rhino-project/ui-heroui';
import { PageAnalytics } from '@rhino-project/core/components/analytics';

export const Route = createRootRoute({
  component: () => {
    return (
      <HeroUIProvider
        // navigate={navigate}
        // useHref={useHref}
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
  }
});
