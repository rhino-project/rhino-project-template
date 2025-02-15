import { ApplicationShell } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context: { rhino }, location }) => {
    console.log('beforeLoad', rhino);
    if (!rhino.user) {
      throw redirect({ to: '/about', search: { redirect: location.href } });
    }
  },
  component: () => (
    <ApplicationShell>
      <Outlet />
    </ApplicationShell>
  )
});
