import { ModelEdit } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blogs/$id/edit')({
  component: RouteComponent
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <ModelEdit model="blog" modelId={id} />;
}
