import { ModelNavSection, NavItem, NavSection } from '@rhino-project/ui-heroui';
import { useRhinoConfig } from '@rhino-project/core/config';

export const PrimaryNavigation = () => {
  const {
    env: { DESIGN_SYSTEM_ENABLED }
  } = useRhinoConfig();

  return (
    <>
      <NavSection>
        <NavItem
          title="Dashboard"
          icon="bi:house"
          to="/1"
          activeOptions={{ exact: true }}
        />
      </NavSection>
      <ModelNavSection />

      <NavSection title="Development">
        {DESIGN_SYSTEM_ENABLED && (
          <NavItem
            key="design-system"
            title="Design System"
            to="/1/design"
            icon="bi:easel"
          />
        )}
      </NavSection>
    </>
  );
};
