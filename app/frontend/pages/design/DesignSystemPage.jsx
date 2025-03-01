import { Tab, Tabs } from '@rhino-project/ui-heroui';

import {
  Outlet,
  useChildMatches,
  useLocation,
  useMatch,
  useMatchRoute,
  useRouter
} from '@tanstack/react-router';

const DesignSystemPage = () => {
  const { pathname } = useLocation();
  // const { build } = useBaseOwnerPath();
  const build = (path) => path;
  const child = useChildMatches();
  // https://github.com/TanStack/router/discussions/998#discussioncomment-8621712
  const { routesByPath, flatRoutes } = useRouter();
  const match = useMatch({ strict: false });

  console.log(
    'DesignSystemPage',
    match,
    routesByPath,
    flatRoutes,
    child,
    pathname
  );
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary my-2">
        <div className="container-fluid">
          <Tabs selectedKey={pathname} aria-label="Tabs">
            <Tab key={'/1/design'} href={'/1/design'} title="Buttons" />
            <Tab
              key={'/1/design/forms'}
              href={'/1/design/forms'}
              title="Forms"
            />
            <Tab
              key={'/1/design/tables'}
              href={'/1/design/tables'}
              title="Tables"
            />
            <Tab
              key={'/1/design/typography'}
              href={'/1/design/typography'}
              title="Typography"
            />
          </Tabs>
        </div>
      </nav>
      <div className="py-3">
        <Outlet />
      </div>
    </>
  );
};

export default DesignSystemPage;
