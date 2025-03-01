import { ModelCreatePage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blog/new')({
  component: RouteComponent
});

function RouteComponent() {
  return <ModelCreatePage model="blog" />;
}
