import { ModelEditPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blog/$id/edit')({
  component: RouteComponent
});

function RouteComponent() {
  return <ModelEditPage model="blog" />;
}
