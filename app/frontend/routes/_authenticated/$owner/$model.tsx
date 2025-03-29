import { RhinoResourceName } from '@rhino-project/core';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/$owner/$model')({
  params: {
    parse: (rawParams) => {
      const model = rawParams.model as RhinoResourceName;

      return { model };
    }
  },
  beforeLoad: ({ context: { rhino }, params: { model, owner } }) => {
    if (!rhino.resources[model]) {
      throw redirect({ to: '/$owner', params: { owner } });
    }
  }
});
