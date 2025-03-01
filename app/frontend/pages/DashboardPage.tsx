import { BaseAuthedPage } from '@rhino-project/ui-heroui';
import { useUser } from '@rhino-project/core/hooks';

const DashboardPage = () => {
  const user = useUser();

  return <BaseAuthedPage>Welcome ${user?.name || user?.email}</BaseAuthedPage>;
};

export default DashboardPage;
