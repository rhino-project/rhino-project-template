import { faker } from '@faker-js/faker';
import api from '../../app/frontend/models/static';

describe('signup', () => {
  it('signup screen works', function () {
    const allowSignup = api.info['x-rhino'].modules.rhino.allow_signup;

    cy.visit('/');

    if (!allowSignup) {
      cy.get('a[href="/auth/signup"]').should('not.exist');
      return;
    }

    cy.get('a[href="/auth/signup"]').click();

    cy.get('input[name="email"]').type(faker.internet.email());
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="password_confirmation"]').clear();
    cy.get('input[name="password_confirmation"]').type(
      faker.internet.password()
    );
    // Scope to form to avoid multiple submit buttons
    cy.get('input[name="email"]')
      .closest('form')
      .find('button[type="submit"]')
      .click();

    // After signup, should be redirected to dashboard or show success
    cy.url().should('not.include', '/auth/signup');
  });
});
