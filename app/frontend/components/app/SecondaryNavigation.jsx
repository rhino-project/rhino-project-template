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
    <div className="flex flex-col">
      {showNotifications && <NotificationMenu />}
      <BaseOwnerSwitcher />
      <AccountMenu />
    </div>
  );
};
