import { useMemo } from 'react';

import { hasNotificationsModule } from '@rhino-project/core/utils';
import {
  AccountMenu,
  BaseOwnerSwitcher,
  NotificationMenu
} from '@rhino-project/ui-heroui';

export const SecondaryNavigation = () => {
  const showNotifications = useMemo(() => hasNotificationsModule(), []);

  return (
    <div className="flex flex-col gap-2">
      {showNotifications && <NotificationMenu />}
      <BaseOwnerSwitcher />
      <AccountMenu />
    </div>
  );
};
