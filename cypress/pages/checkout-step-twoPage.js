class checkoutStepTwoPage {
    visit() {
      cy.visit("/checkout-step-two.html", {failOnStatusCode: false}); 
    }

    cancelButton() {
        return cy.get('[data-test="cancel"]'); 
    }

    finishButton() {
        return cy.get('[data-test="finish"]'); 
    }

  }
  module.exports = new checkoutStepTwoPage