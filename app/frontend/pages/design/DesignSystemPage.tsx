import { Tab, Tabs } from '@rhino-project/ui-heroui';

import { Outlet, useLocation } from '@tanstack/react-router';

const DesignSystemPage = () => {
  const { pathname } = useLocation();

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
