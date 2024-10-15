import {
  ModelNavSection,
  NavItem,
  NavSection
} from '@rhino-project/core/components/nav';

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
