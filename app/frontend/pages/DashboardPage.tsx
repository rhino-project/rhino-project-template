import React from 'react';

import { BaseAuthedPage } from '@rhino-project/ui';
import { Empty } from '@rhino-project/ui';
import { LinkButton } from '@rhino-project/ui';
import {
  useBaseOwnedModels,
  useBaseOwnerPath,
  useModelShow
} from '@rhino-project/core/hooks';
import { useUser } from '@rhino-project/core/hooks';
import { useBaseOwner } from '@rhino-project/core/hooks';
import { getModel, getModelIndexPath } from '@rhino-project/core/utils';
import { components, ModelTypes } from '../models/models.d';

const APPROVAL = false;

// FIXME Add back session tracking for approval
const Approval = () => {
  return (
    <Empty
      title="Admin Approval Required"
      description="Please contact admin@example.com"
    >
      <LinkButton color="primary" href="mailto:admin@example.com">
        Request Approval
      </LinkButton>
    </Empty>
  );
};

function useModelShowTyped<T extends keyof components['schemas']>(
  model: T | { model: T },
  id: number
): { resource: components['schemas'][T] } {
  return useModelShow(typeof model === 'string' ? model : model.model, id) as {
    resource: components['schemas'][T];
  };
}
const GetStarted = () => {
  const baseOwnedModels = useBaseOwnedModels();
  const firstModel = baseOwnedModels?.[0];
  const baseOwnerPath = useBaseOwnerPath();
  const firstPath = firstModel
    ? baseOwnerPath.build(getModelIndexPath(firstModel))
    : null;

  // const user = useUser();
  const baseOwner = useBaseOwner();
  const { resource } = useModelShowTyped('blog', 1);
  const model = getModel('user') as
    | keyof ModelTypes
    | { model: keyof ModelTypes };
  const { resource: user } = useModelShowTyped('user', 1);

  console.log(resource);

  return (
    <Empty
      title={`Welcome to ${baseOwner?.name}, ${user?.name || user?.email}`}
    >
      {firstPath && (
        <LinkButton color="primary" to={firstPath}>
          Get Started
        </LinkButton>
      )}
    </Empty>
  );
};

const DashboardPage = () => {
  return (
    <BaseAuthedPage>{APPROVAL ? <Approval /> : <GetStarted />}</BaseAuthedPage>
  );
};

export default DashboardPage;
