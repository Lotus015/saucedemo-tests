class itemPage {
    visit() {
      cy.visit("/inventory-item.html?id=4", {failOnStatusCode: false});
    }
   
    addItemButton() {
      return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); 
    }

    removeItemButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]'); 
      }

  }
  module.exports = new itemPage