import React, { useCallback } from 'react';

import { BaseAuthedPage } from '@rhino-project/ui';
import { Empty } from '@rhino-project/ui';
import { LinkButton } from '@rhino-project/ui';
import {
  useBaseOwnedModels,
  useBaseOwnerPath,
  useModelShow,
  useResource
} from '@rhino-project/core/hooks';
import { useUser } from '@rhino-project/core/hooks';
import { useBaseOwner } from '@rhino-project/core/hooks';
import { getModel, getModelIndexPath } from '@rhino-project/core/utils';
import { components } from '../models/models.d';
import { RhinoResource } from '@rhino-project/core/rhino-resource';
import { Resources } from '@rhino-project/core';

declare module '@rhino-project/core' {
  type SchemaToResource = {
    [K in keyof components['schemas']]: components['schemas'][K];
  };

  interface Resources extends SchemaToResource {}
}

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
  const blog = useResource('active_storage_attachment');
  // const { resource: user } = useModelShowTyped('user', 1);

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
