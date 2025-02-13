import { ModelShowPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blogs/$id/')({
  component: RouteComponent
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <ModelShowPage model="blog" modelId={id} />;
}
