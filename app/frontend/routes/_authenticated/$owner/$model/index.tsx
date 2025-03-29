import { ModelIndexPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/')({
  component: RouteComponent
});

function RouteComponent() {
  const { model } = Route.useParams();

  return <ModelIndexPage model={model} syncUrl />;
}
