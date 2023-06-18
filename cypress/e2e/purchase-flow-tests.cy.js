/// <reference types="cypress" />

import loginPage from "../pages/loginPage.js" 
import inventoryPage from "../pages/inventoryPage.js" 
import itemPage from "../pages/itemPage.js" 
import cartPage from "../pages/cartPage.js"
import { isSortedAscending, isSortedDescending, isSortedAlphabetically, isSortedReverseAlphabetically } from "../utils/utils.js"
import checkoutStepOnePage from "../pages/checkout-step-onePage.js"
import checkoutStepTwoPage from "../pages/checkout-step-twoPage.js"

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
      inventoryPage.visit(); 
      inventoryPage.openBurgerMenu(); 
      inventoryPage.resetAppState(); 
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

    it('Trying to checkout without providing the info', () => {
      checkoutStepOnePage.visit(); 
      checkoutStepOnePage.continueButton().click(); 
      checkoutStepOnePage.errorMessageContainer().should('be.visible'); 
    })

    it('Canceling during checkout leads to the inventory page', () => {
      checkoutStepOnePage.visit(); 
      checkoutStepOnePage.cancelButton().click();
      cy.url().should('eq', 'https://www.saucedemo.com/cart.html'); 
      cartPage.continueShoppingButton().click(); 
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html'); 
    })

    it('Its impossible to checkout with no items in the cart', () => { //DEFECT - EXPECTED TO FAIL
       checkoutStepOnePage.visit(); 
       checkoutStepOnePage.firstNameInput('Miodrag'); 
       checkoutStepOnePage.lastNameInput('Todorovic'); 
       checkoutStepOnePage.zipCodeInput('15000'); 
       checkoutStepOnePage.continueButton().click(); 
       checkoutStepTwoPage.finishButton().should('be.disabled'); 
    })

    it('Full purchase flow', () => {
      loginPage.visit(); 
      loginPage.typeUsername('standard_user'); 
      loginPage.typePassword('secret_sauce'); 
      loginPage.clickLoginButton(); 
      inventoryPage.addItemOnesie().click(); 
      inventoryPage.shoppingCartButton().click(); 
      cartPage.checkoutButton().click(); 
      checkoutStepOnePage.firstNameInput('Miodrag'); 
      checkoutStepOnePage.lastNameInput('Todorovic'); 
      checkoutStepOnePage.zipCodeInput('15000'); 
      checkoutStepOnePage.continueButton().click(); 
      checkoutStepTwoPage.finishButton().click(); 
      cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html'); 
      cy.get('#checkout_complete_container').should('be.visible'); 
    })

})