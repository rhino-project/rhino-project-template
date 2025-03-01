import { ModelNavSection, NavItem, NavSection } from '@rhino-project/ui-heroui';
import { useRhinoConfig } from '@rhino-project/core/config';
import { useBaseOwnerId } from '@rhino-project/core/hooks';

export const PrimaryNavigation = () => {
  const {
    env: { DESIGN_SYSTEM_ENABLED }
  } = useRhinoConfig();
  const owner = String(useBaseOwnerId());

  return (
    <>
      <NavSection>
        <NavItem
          title="Dashboard"
          icon="bi:house"
          to="/$owner"
          params={{ owner }}
          activeOptions={{ exact: true }}
        />
      </NavSection>
      <ModelNavSection />

      {DESIGN_SYSTEM_ENABLED && (
        <NavSection title="Development">
          <NavItem
            key="design-system"
            title="Design System"
            to="/$owner/design"
            params={{ owner }}
            icon="bi:easel"
          />
        </NavSection>
      )}
    </>
  );
};
