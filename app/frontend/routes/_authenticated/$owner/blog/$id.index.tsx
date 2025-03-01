import { ModelShowPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blog/$id/')({
  component: RouteComponent
});

function RouteComponent() {
  return <ModelShowPage model="blog" />;
}
