import { RhinoResourceName } from '@rhino-project/core';
import { ModelShow } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/$id/')({
  params: {
    parse: (rawParams) => {
      const model = rawParams.model as RhinoResourceName;
      const id = rawParams.id as string;

      return { model, id };
    }
  },
  component: RouteComponent
});

function RouteComponent() {
  const { model, id } = Route.useParams();

  return <ModelShow model={model} modelId={id} />;
}
