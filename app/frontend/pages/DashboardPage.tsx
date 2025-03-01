import { BaseAuthedPage } from '@rhino-project/ui-heroui';
import { useUser } from '@rhino-project/core/hooks';

const DashboardPage = () => {
  const user = useUser();

  return (
    <BaseAuthedPage>
      <h4>Welcome {user?.name || user?.email}</h4>
    </BaseAuthedPage>
  );
};

export default DashboardPage;
