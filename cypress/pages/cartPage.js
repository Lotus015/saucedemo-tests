class cartPage {
  visit() {
    cy.visit("/inventory.html", {failOnStatusCode: false});
  }

  removeItemBackpack() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }

  removeItemBoltTShirt() {
    return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  }

  removeItemFleeceJacket() {
    return cy.get('[data-test="remove-sauce-labs-fleece-jacket"]');
  }

  removeItemOnesie() {
    return cy.get('[data-test="remove-sauce-labs-onesie"]'); 
  }

  removeItemRedTShirt() {
    return cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]'); 
  }

  removeItemBikeLight() {
    return cy.get('[data-test="remove-sauce-labs-bike-light"]');
  }

  continueShoppingButton() {
    return cy.get('[data-test="continue-shopping"]')
  }

  checkoutButton() {
    return cy.get('[data-test="checkout"]')
  }
  
}
module.exports = new cartPage