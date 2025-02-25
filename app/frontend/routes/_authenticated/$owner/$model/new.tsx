import { RhinoResourceName } from '@rhino-project/core';
import { ModelCreate } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/new')({
  params: {
    parse: (rawParams) => {
      const model = rawParams.model as RhinoResourceName;

      return { model };
    }
  },
  validateSearch: (search: Record<string, unknown>): { parentId: number } => {
    return {
      parentId: Number(search?.parentId)
    };
  },
  component: RouteComponent
});

function RouteComponent() {
  const { model } = Route.useParams();
  const { parentId } = Route.useSearch();

  return <ModelCreate model={model} parentId={parentId} />;
}
