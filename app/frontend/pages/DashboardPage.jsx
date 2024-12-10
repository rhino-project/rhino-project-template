import React from 'react';

import { BaseAuthedPage } from '@rhino-project/ui';
import { Empty } from '@rhino-project/ui';
import { LinkButton } from '@rhino-project/ui';
import {
  useBaseOwnedModels,
  useBaseOwnerPath,
  useModels
} from '@rhino-project/core/hooks';
import { useUser } from '@rhino-project/core/hooks';
import { useBaseOwner } from '@rhino-project/core/hooks';
import { getModelIndexPath } from '@rhino-project/core/utils';
import { useHref, useNavigate, useNavigation } from 'react-router-dom';

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

const GetStarted = () => {
  const baseOwnedModels = useBaseOwnedModels();
  const firstModel = baseOwnedModels?.[0];
  const baseOwnerPath = useBaseOwnerPath();
  const firstPath = firstModel
    ? baseOwnerPath.build(getModelIndexPath(firstModel))
    : null;
  const user = useUser();
  const baseOwner = useBaseOwner();

  return (
    <Empty title={`Welcome to ${baseOwner?.name}, ${user.name || user.uid}`}>
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
