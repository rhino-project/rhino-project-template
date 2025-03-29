import { NonAuthenticatedRoute } from '@rhino-project/ui-heroui';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  beforeLoad: ({ context: { rhino }, search }) => {
    // Redirect to previous or '/' which will find a base owner
    if (rhino.user) throw redirect({ to: search.redirect || '/' });
  },
  component: NonAuthenticatedRoute
});
