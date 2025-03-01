import { ModelIndexPage } from '@rhino-project/ui-heroui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/blog/')({
  component: () => {
    console.log('beforeLoad $owner/blogs component');
    return <RouteComponent />;
  }
});

function RouteComponent() {
  return (
    <>
      Explicit
      <ModelIndexPage model="blog" />
    </>
  );
}
