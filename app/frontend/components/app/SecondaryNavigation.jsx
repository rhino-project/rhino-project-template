import { useMemo } from 'react';

import { hasNotificationsModule } from '@rhino-project/core/utils';
import {
  AccountMenu,
  BaseOwnerSwitcher,
  NotificationMenu
} from '@rhino-project/core/components/app';

export const SecondaryNavigation = () => {
  const showNotifications = useMemo(() => hasNotificationsModule(), []);

  return (
    <div>
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
