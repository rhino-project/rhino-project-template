import { ModelShowPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/$id/')({
  component: RouteComponent
});

function RouteComponent() {
  const { model } = Route.useParams();

  return <ModelShowPage model={model} />;
}
