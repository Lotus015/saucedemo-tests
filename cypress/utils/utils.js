export function isSortedAscending(arr) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    
    cy.wrap(arr).each((num, index) => {
      cy.wrap(num).should('equal', sortedArray[index]);
    });
  }
  
export function isSortedDescending(arr) {
    const sortedArray = [...arr].sort((a, b) => b - a);
  
    cy.wrap(arr).each((num, index) => {
      cy.wrap(num).should('equal', sortedArray[index]);
    });
  }

export function isSortedAlphabetically(arr) {
    return cy.wrap(arr).then((arrElements) => {
      const sortedArray = [...arrElements].sort((a, b) => a.localeCompare(b));
      expect(arrElements).to.deep.equal(sortedArray);
    });
  }

  export function isSortedReverseAlphabetically(arr) {
    return cy.wrap(arr).then((arrElements) => {
      const sortedArray = [...arrElements].sort((a, b) => b.localeCompare(a));
      expect(arrElements).to.deep.equal(sortedArray);
    });
  }
  
  
  
  
  
  