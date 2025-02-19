import { ApplicationShell, AuthenticatedRoute } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { PrimaryNavigation } from '../components/app/PrimaryNavigation';
import { SecondaryNavigation } from '../components/app/SecondaryNavigation';
import {
  AUTH_VALIDATE_TOKEN_END_POINT,
  AUTH_SESSION_KEY
} from '@rhino-project/core/lib';
import { ValidateTokenResponse } from '@rhino-project/core';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context: { rhino }, location }) => {
    console.log('beforeLoad _authenticated', rhino);

    return rhino.queryClient.ensureQueryData({
      queryKey: AUTH_SESSION_KEY,
      queryFn: ({ signal }): Promise<ValidateTokenResponse> =>
        networkApiCall(AUTH_VALIDATE_TOKEN_END_POINT, { signal })
    });

    // if (!rhino.user) {
    //   redirect({
    //     to: '/auth/signin',
    //     search: { redirect: location.href },
    //     throw: true
    //   });
    // }
  },
  component: () => (
    <AuthenticatedRoute>
      <ApplicationShell
        primaryNavigationElement={<PrimaryNavigation />}
        secondaryNavigationElement={<SecondaryNavigation />}
      >
        <Outlet />
      </ApplicationShell>
    </AuthenticatedRoute>
  )
});
