import { ModelNavSection, NavItem, NavSection } from '@rhino-project/ui-heroui';
import { useRhinoConfig } from '@rhino-project/core/config';

export const PrimaryNavigation = () => {
  const {
    env: { DESIGN_SYSTEM_ENABLED }
  } = useRhinoConfig();

  return (
    <>
      <NavSection>
        <NavItem title="Dashboard" icon="bi:house" to="." end />
      </NavSection>
      <ModelNavSection />

      <NavSection title="Development">
        {DESIGN_SYSTEM_ENABLED && (
          <NavItem
            key="design-system"
            title="Design System"
            to="__design"
            icon="bi:easel"
          />
        )}
      </NavSection>
    </>
  );
};
