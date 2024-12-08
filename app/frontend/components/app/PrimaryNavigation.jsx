import { ModelNavSection, NavItem, NavSection } from '@rhino-project/ui';

export const PrimaryNavigation = () => {
  return (
    <>
      <NavSection>
        <NavItem title="Dashboard" icon="house" to="." end />
      </NavSection>
      <ModelNavSection />
    </>
  );
};
