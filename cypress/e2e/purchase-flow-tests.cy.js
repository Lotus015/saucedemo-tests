/// <reference types="cypress" />

import loginPage from "../pages/loginPage.js" 
import inventoryPage from "../pages/inventoryPage.js" 
import itemPage from "../pages/itemPage.js" 
import cartPage from "../pages/cartPage.js"
import { isSortedAscending, isSortedDescending, isSortedAlphabetically, isSortedReverseAlphabetically } from "../utils/utils.js"

describe('Swag Labs purchase flow', () => {

    before(() => {
      loginPage.visit(); 
      loginPage.typeUsername('standard_user'); 
      loginPage.typePassword('secret_sauce'); 
      loginPage.clickLoginButton(); 
    })

    beforeEach(() => {
    cy.setCookie('session-username', 'standard_user'); 
    });
    afterEach(() => {
      // inventoryPage.openBurgerMenu(); 
      // inventoryPage.resetAppState(); 
    })

    it('Adding an item to the cart - Inventory Page', () => {
      inventoryPage.visit(); 
      inventoryPage.addItemOnesie().click(); 
      inventoryPage.removeItemOnesie().should('be.visible'); 
    })

    it('Removing an item from the cart - Inventory Page', () => {
      inventoryPage.visit(); 
      inventoryPage.addItemBackpack().click(); 
      inventoryPage.addItemBackpack().should('not.exist'); 
      inventoryPage.removeItemBackpack().click(); 
      inventoryPage.addItemBackpack().should('be.visible'); 
      inventoryPage.removeItemBackpack().should('not.exist'); 
    })

    it('Adding an item to the cart - Item Page', () => {
      inventoryPage.visit(); 
      inventoryPage.itemPage().click(); 
      itemPage.addItemButton().click(); 
      itemPage.addItemButton().should('not.exist'); 
    })

    it('Removing an item from the cart - Item Page', () => {
      inventoryPage.visit(); 
      inventoryPage.itemPage().click(); 
      itemPage.addItemButton().click(); 
      itemPage.removeItemButton().click(); 
      itemPage.removeItemButton().should('not.exist'); 
    })

    it('Removing an item from the cart - Cart Page', () => {
      inventoryPage.visit(); 
      inventoryPage.addItemBackpack().click(); 
      inventoryPage.shoppingCartButton().click(); 
      cartPage.removeItemBackpack().click(); 
      cartPage.removeItemBackpack().should('not.exist'); 
    })

    it('Sorting - Price(low to high)', () => {
      inventoryPage.visit(); 
      inventoryPage.selectSortingOption('lohi');
      var priceArray = inventoryPage.getInventoryList(); 
      cy.wrap(priceArray).then((arr) => isSortedAscending(arr));
    })

    it('Sorting - Price(high to low)', () => {
      inventoryPage.visit(); 
      inventoryPage.selectSortingOption('hilo');
      var priceArray = inventoryPage.getInventoryList(); 
      cy.wrap(priceArray).then((arr) => isSortedDescending(arr)); 
    })

    it('Sorting - Name(A to Z)', () => {
      inventoryPage.visit(); 
      inventoryPage.selectSortingOption('az');
      var nameArray = inventoryPage.getItemNames(); 
      cy.wrap(nameArray).then((arr) => isSortedAlphabetically(arr));
  })

    it('Sorting - Name(Z to A)', () => {
      inventoryPage.visit(); 
      inventoryPage.selectSortingOption('za');
      var nameArray = inventoryPage.getItemNames(); 
      cy.wrap(nameArray).then((arr) => isSortedReverseAlphabetically(arr));
    })

    // it('Trying to checkout without providing the info', () => {
      
    // })

    // it('Canceling during checkout leads to the inventory page', () => {
      
    // })

    // it('Full purchase flow', () => {
      
    // })

})