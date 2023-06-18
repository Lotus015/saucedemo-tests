class checkoutStepOnePage {
    visit() {
      cy.visit("/checkout-step-one.html", {failOnStatusCode: false}); 
    }
   
    firstNameInput(firstName) {
      return cy.get('[data-test="firstName"]').clear().type(firstName); 
    }

    lastNameInput(lastName) {
        return cy.get('[data-test="lastName"]').clear().type(lastName); 
    }
      
    zipCodeInput(zipCode) {
        return cy.get('[data-test="postalCode"]').clear().type(zipCode); 
    }

    cancelButton() {
        return cy.get('[data-test="cancel"]'); 
    }

    continueButton() {
        return cy.get('[data-test="continue"]'); 
    }

    errorMessageContainer() {
        return cy.get('.error-message-container'); 
    }
  }
  module.exports = new checkoutStepOnePage