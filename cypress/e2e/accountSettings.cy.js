import { faker } from '@faker-js/faker';

describe('account settings', () => {
  beforeEach(() => {
    cy.login();
  });

  it('change name', () => {
    cy.visit('/');

    cy.get('#sidebarMenu #account-menu .nav-icon:first').click();
    cy.get('#sidebarMenu').contains('Account Settings').click();
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').type(faker.person.fullName());
    // Scope to form to avoid multiple submit buttons
    cy.get('input[name="name"]')
      .closest('form')
      .find('button[type="submit"]')
      .click();

    // HeroUI Alert component
    cy.contains('Your profile has been updated successfully').should(
      'be.visible'
    );
  });

  it('change nickname', function () {
    cy.visit('/');

    cy.get('#sidebarMenu #account-menu .nav-icon:first').click();
    cy.get('#sidebarMenu').contains('Account Settings').click();
    cy.get('input[name="nickname"]').clear();
    cy.get('input[name="nickname"]').type(faker.person.fullName());
    // Scope to form to avoid multiple submit buttons
    cy.get('input[name="nickname"]')
      .closest('form')
      .find('button[type="submit"]')
      .click();

    // HeroUI Alert component
    cy.contains('Your profile has been updated successfully').should(
      'be.visible'
    );
  });
});
