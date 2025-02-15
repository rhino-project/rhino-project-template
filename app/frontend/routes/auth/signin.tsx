import { SignInPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signin')({
  beforeLoad: ({ context, search }) => {
    console.log('beforeLoad signin', context.rhino);
    // if (context.rhino.user) {
    //   throw redirect({ to: search.redirect || '/' });
    // }
  },
  component: SignInPage
});
