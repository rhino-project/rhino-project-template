import { ModelCreatePage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/new')({
  component: RouteComponent
});

function RouteComponent() {
  const { model } = Route.useParams();

  return <ModelCreatePage model={model} />;
}
