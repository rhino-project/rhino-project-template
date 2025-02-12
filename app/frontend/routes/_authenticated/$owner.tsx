import { ApplicationShell } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { PrimaryNavigation } from '../../components/app/PrimaryNavigation';
import { SecondaryNavigation } from '../../components/app/SecondaryNavigation';

export const Route = createFileRoute('/_authenticated/$owner')({
  head: () => ({
    meta: [
      {
        title: 'TanStack Router SSR Basic File Based'
      },
      {
        charSet: 'UTF-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      { name: 'jptest', content: 'jptest' }
    ]
  }),
  beforeLoad: ({ context: { rhino }, params: { owner } }) => {
    if (owner !== String(rhino.baseOwner?.id)) {
      const usersRoleFromUrl = rhino.usersRoles.find(
        (el) => String(el.organization.id) === owner
      );
      console.log(
        'beforeLoad $owner changing to ',
        usersRoleFromUrl?.organization
      );
      if (usersRoleFromUrl) {
        rhino.setBaseOwner(usersRoleFromUrl.organization);
      } else {
        // FIXME: What if there is no organization?
        rhino.setBaseOwner(rhino.usersRoles[0].organization);
        throw redirect({
          to: `/$owner`,
          params: { owner: String(rhino.usersRoles[0].organization.id) }
        });
      }
    }
  },
  onEnter: (props) => {
    console.log('beforeLoad onEnter $owner', props);
  },
  onStay: ({ context: { rhino }, params: { owner } }) => {
    console.log('beforeLoad onStay $owner', owner);
  },
  component: RouteComponent
});

function RouteComponent() {
  return (
    <ApplicationShell
      primaryNavigationElement={<PrimaryNavigation />}
      secondaryNavigationElement={<SecondaryNavigation />}
    >
      <Outlet />
    </ApplicationShell>
  );
}
