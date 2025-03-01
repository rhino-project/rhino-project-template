import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/')({
  beforeLoad: ({ context: { rhino } }) => {
    console.log('beforeLoad _authenticated', rhino.baseOwner);
    // FIXME: Support remember most recent with local storage
    throw redirect({
      to: `/$owner`,
      params: { owner: String(rhino.baseOwner?.id) }
    });
  }
});
