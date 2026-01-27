import { EditProfile } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/$owner/account/settings/'
)({
  component: EditProfile
});
