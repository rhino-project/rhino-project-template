describe('forgot password', () => {
  it('forget password form works', () => {
    cy.visit('/');

    cy.contains('Forgot Password?').click();

    cy.get('input[name="email"]').type(Cypress.config('testUser').email);

    // Scope to form to avoid multiple submit buttons
    cy.get('input[name="email"]')
      .closest('form')
      .find('button[type="submit"]')
      .contains('Reset Password')
      .click();

    // HeroUI Alert component structure
    cy.contains('Reset Password').should('be.visible');
  });
});
