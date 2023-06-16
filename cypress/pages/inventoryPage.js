class inventoryPage {
    visit() {
      cy.visit("/inventory.html", {failOnStatusCode: false});
    }
   
    itemPage() {
      return cy.get('[id="item_4_img_link"]'); 
    }
    
    addItemBackpack() {
      return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    removeItemBackpack() {
      return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }
   
    addItemBoltTShirt() {
      return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    removeItemBoltTShirt() {
      return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]');
    }

    addItemFleeceJacket() {
      return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    removeItemFleeceJacket() {
      return cy.get('[data-test="remove-sauce-labs-fleece-jacket"]');
    }

    addItemOnesie() {
      return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    removeItemOnesie() {
      return cy.get('[data-test="remove-sauce-labs-onesie"]'); 
    }

    addItemRedTShirt() {
      return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

    removeItemRedTShirt() {
      return cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]'); 
    }

    addItemBikeLight() {
      return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    removeItemBikeLight() {
      return cy.get('[data-test="remove-sauce-labs-bike-light"]');
    }

    shoppingCartButton() {
      return cy.get('.shopping_cart_link'); 
    }

    selectSortingOption(option) {
      return cy.get('[data-test="product_sort_container"]').select(option); 
    }

    openBurgerMenu() {
      return cy.get('#react-burger-menu-btn').click(); 
    }

    resetAppState() {
      return cy.get('#reset_sidebar_link').click(); 
    }

  }
  module.exports = new inventoryPage