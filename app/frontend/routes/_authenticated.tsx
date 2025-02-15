import { ApplicationShell } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context: { rhino }, location }) => {
    console.log('beforeLoad', rhino);
    if (!rhino.user) {
      redirect({
        to: '/auth/signin',
        search: { redirect: location.href },
        throw: true
      });
    }
  },
  component: () => (
    <ApplicationShell>
      <Outlet />
    </ApplicationShell>
  )
});
