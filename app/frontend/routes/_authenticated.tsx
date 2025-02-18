import { ApplicationShell } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { PrimaryNavigation } from '../components/app/PrimaryNavigation';
import { SecondaryNavigation } from '../components/app/SecondaryNavigation';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context: { rhino }, location }) => {
    console.log('beforeLoad _authenticated', rhino);
    // if (!rhino.user) {
    //   redirect({
    //     to: '/auth/signin',
    //     search: { redirect: location.href },
    //     throw: true
    //   });
    // }
  },
  component: () => (
    <ApplicationShell
      primaryNavigationElement={<PrimaryNavigation />}
      secondaryNavigationElement={<SecondaryNavigation />}
    >
      <Outlet />
    </ApplicationShell>
  )
});
