/// <reference types="cypress" />

import loginPage from "../pages/loginPage.js" 
import inventoryPage from "../pages/inventoryPage.js" 

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

    // it('Adding an item to the cart - Item Page', () => {
      
    // })

    // it('Removing an item from the cart - Item Page', () => {
      
    // })

    // it('Removing an item from the cart - Cart Page', () => {
      
    // })

    // it('Sorting - Price(low to high)', () => {
      
    // })

    // it('Sorting - Price(high to low)', () => {
      
    // })

    // it('Sorting - Name(A to Z)', () => {
      
    // })

    // it('Sorting - Name(Z to A)', () => {
      
    // })

    // it('Trying to checkout without providing the info', () => {
      
    // })

    // it('Canceling during checkout leads to the inventory page', () => {
      
    // })

    // it('Full purchase flow', () => {
      
    // })

})