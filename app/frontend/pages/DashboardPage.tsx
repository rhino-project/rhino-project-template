import { BaseAuthedPage, Link } from '@rhino-project/ui-heroui';
import { useUser } from '@rhino-project/core/hooks';

const DashboardPage = () => {
  const user = useUser();

  return (
    <BaseAuthedPage>
      <h4>Welcome {user?.name || user?.email}</h4>
      <Link href="/logout">Logout</Link>
    </BaseAuthedPage>
  );
};

export default DashboardPage;
