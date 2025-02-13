import { ApplicationShell } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    console.log('beforeLoad', context);
    // if (!context.auth.user) {
    //   throw redirect({
    //     to: '/auth/signin',
    //     search: {
    //       redirect: location.href
    //     }
    //   });
    // }
  },
  component: () => (
    <ApplicationShell>
      <Outlet />
    </ApplicationShell>
  )
});
