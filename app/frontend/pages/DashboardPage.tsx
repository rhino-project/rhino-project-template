import {
  Accordion,
  BaseAuthedPage,
  Button,
  CircularProgress,
  Icon,
  Kbd
} from '@rhino-project/ui-nextui';
import { Empty } from '@rhino-project/ui-nextui';
import { LinkButton } from '@rhino-project/ui-nextui';
import { useBaseOwnedResources } from '@rhino-project/core';
import { useBaseOwnerPath, useModelShow } from '@rhino-project/core/hooks';
import { useUser } from '@rhino-project/core/hooks';
import { useBaseOwner } from '@rhino-project/core/hooks';
import { getModelIndexPath } from '@rhino-project/core/utils';
import { components } from '../models/models.d';
import { useRhinoContext, Resources } from '@rhino-project/core';

const APPROVAL = false;

// FIXME Add back session tracking for approval
const Approval = () => {
  return (
    <Empty title="Admin Approval Required">
      {/* <LinkButton color="primary" href="mailto:admin@example.com">
        Request Approval
      </LinkButton> */}
    </Empty>
  );
};

function useModelShowTyped<T extends keyof Resources>(
  model: T | { model: T },
  id: number
): { resource: components['schemas'][T] } {
  return useModelShow(typeof model === 'string' ? model : model.model, id) as {
    resource: components['schemas'][T];
  };
}

const GetStarted = () => {
  const baseOwnedResources = useBaseOwnedResources();
  // const baseOwnedModels = useBaseOwnedModels();
  const firstModel = baseOwnedResources?.[0];

  const baseOwnerPath = useBaseOwnerPath();
  const user = useUser() as Resources['user'];
  const firstPath = firstModel
    ? baseOwnerPath.build(getModelIndexPath(firstModel))
    : null;
  const { resources } = useRhinoContext();

  // const user = useUser();
  const baseOwner = useBaseOwner();
  const { resource } = useModelShowTyped('blog', 1);
  // const blog = useResource('blog');
  // const { resource: user } = useModelShowTyped('user', 1);
  // const { resource } = useResourceShow('blog', 1);
  // const {} = useResourceIndexController({ model: 'blog' });

  console.log('resources', resources.blog.required);

  return (
    <Empty
      title={`Welcome to ${baseOwner?.name}, ${user?.name || user?.email}`}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        color="success"
        variant="ghost"
        startContent={<Icon icon="house" />}
      >
        Learn NextUI
      </Button>
      <br />
      <Kbd keys={['command']}>K</Kbd>
      <CircularProgress aria-label="Test" />
      <br />
      {firstPath && (
        <LinkButton
          color="primary"
          href={firstPath}
          startContent={<Icon icon="house" />}
        >
          Get Started
        </LinkButton>
      )}
      <LinkButton color="primary" href={firstPath} isIconOnly>
        <Icon icon="house" />
      </LinkButton>
    </Empty>
  );
};

const DashboardPage = () => {
  return (
    <BaseAuthedPage>{APPROVAL ? <Approval /> : <GetStarted />}</BaseAuthedPage>
  );
};

export default DashboardPage;
