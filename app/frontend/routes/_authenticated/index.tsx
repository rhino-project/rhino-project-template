import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/')({
  beforeLoad: ({ context: { rhino } }) => {
    // FIXME: Support remember most recent with local storage
    throw redirect({
      to: `/$owner`,
      params: { owner: String(rhino.baseOwner?.id) }
    });
  }
});
