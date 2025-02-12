import { AuthenticatedRoute } from '@rhino-project/ui-heroui';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context: { rhino }, location }) => {
    console.log('beforeLoad', rhino.user, rhino.baseOwner);
    if (!rhino.user) {
      throw redirect({
        to: '/auth/signin',
        search: {
          redirect: location.href
        }
      });
    }
  },
  component: AuthenticatedRoute
});
