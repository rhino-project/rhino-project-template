import { useMemo } from 'react';

import { hasNotificationsModule } from '@rhino-project/core/utils';
import {
  AccountMenu,
  BaseOwnerSwitcher,
  NotificationMenu
} from '@rhino-project/ui-nextui';
import { useRhinoConfig } from '@rhino-project/core/config';
import { NavItem } from '@rhino-project/ui-nextui';

export const SecondaryNavigation = () => {
  const {
    env: { DESIGN_SYSTEM_ENABLED }
  } = useRhinoConfig();
  const showNotifications = useMemo(() => hasNotificationsModule(), []);

  return (
    <div>
      {DESIGN_SYSTEM_ENABLED && (
        <NavItem
          key="design-system"
          title="Design System"
          to="__design"
          icon="list"
          className="px-3"
        />
      )}
      {showNotifications && (
        <>
          <NotificationMenu />
          <hr className="border-top border-gray-700" />
        </>
      )}
      <BaseOwnerSwitcher />
      <AccountMenu />
    </div>
  );
};
