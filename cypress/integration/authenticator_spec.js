describe('Authenticator:', function() {
  // setup the application state
  beforeEach(function() {
    cy.visit('/');
  });

  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Sign in
      cy.get(selectors.usernameInput).type("nikhil.86@gmail.com");
      cy.get(selectors.signInPasswordInput).type("Ch!ps789");
      cy.get(selectors.signInSignInButton).contains('Sign In').click();

      // Check for signed in page
        cy.get(selectors.signOutButton).contains('Sign Out');
    });
  });

});
export const selectors = {
  // Auth
  signInHeaderSection: '[data-test="sign-in-header-section"]',
  usernameInput: '[data-test="username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
}