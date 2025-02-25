import { RhinoResourceName } from '@rhino-project/core';
import { ModelEdit } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/$id/edit')({
  params: {
    parse: (rawParams) => {
      const model = rawParams.model as RhinoResourceName;
      const modelId = rawParams.id as string;

      return { ...rawParams, model, modelId };
    }
  },
  component: RouteComponent
});

function RouteComponent() {
  const { model, modelId } = Route.useParams();

  return <ModelEdit model={model} modelId={modelId} />;
}
