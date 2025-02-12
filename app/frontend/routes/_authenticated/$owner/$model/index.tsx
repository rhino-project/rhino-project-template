import { RhinoResourceName } from '@rhino-project/core';
import { ModelIndexPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/')({
  params: {
    parse: (rawParams) => {
      const model = rawParams.model as RhinoResourceName;

      return { model };
    }
  },
  component: () => {
    return <RouteComponent />;
  }
});

function RouteComponent() {
  const { model } = Route.useParams();

  return <ModelIndexPage model={model} syncUrl={false} />;
}
