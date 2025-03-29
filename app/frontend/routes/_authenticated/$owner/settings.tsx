import { OrganizationSettingsPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/settings')({
  component: OrganizationSettingsPage
});
