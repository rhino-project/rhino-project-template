import { ApplicationShell } from '@rhino-project/ui-heroui';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { PrimaryNavigation } from '../../components/app/PrimaryNavigation';
import { SecondaryNavigation } from '../../components/app/SecondaryNavigation';

export const Route = createFileRoute('/_authenticated/$owner')({
  beforeLoad: ({ context: { rhino }, params: { owner } }) => {
    // This is a hack to make sure that the base owner is set correctly if deep linking into the app
    if (owner !== String(rhino.baseOwner?.id)) {
      const usersRoleFromUrl = rhino.usersRoles.find(
        (el) => String(el.organization.id) === owner
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
