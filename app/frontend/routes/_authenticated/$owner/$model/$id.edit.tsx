import { ModelEditPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/$id/edit')({
  component: RouteComponent
});

function RouteComponent() {
  const { model, id: modelId } = Route.useParams();

  return <ModelEditPage model={model} modelId={modelId} />;
}
