import { ModelCreatePage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model/new')({
  validateSearch: (search: Record<string, unknown>): { parentId: number } => {
    // validate and parse the search params into a typed state
    return {
      parentId: Number(search?.parentId)
    };
  },
  component: RouteComponent
});

function RouteComponent() {
  const { model } = Route.useParams();
  const { parentId } = Route.useSearch();

  return <ModelCreatePage model={model} parentId={parentId} />;
}
