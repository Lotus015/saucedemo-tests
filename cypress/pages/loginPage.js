class loginPage {
    visit() {
      cy.visit("/");
    }
   
    typeUsername(text) {
      return cy.get('[data-test="username"]').type(text);
    }
   
    typePassword(text) {
      return cy.get('[data-test="password"]').type(text);
    }
   
    clickLoginButton() {
      return cy.get('[data-test="login-button"]').click();
    }

  }
  module.exports = new loginPage