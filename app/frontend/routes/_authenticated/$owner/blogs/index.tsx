import { ModelIndexPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blogs/')({
  component: RouteComponent
});

function RouteComponent() {
  return <ModelIndexPage model="blog" syncUrl={false} />;
}
