

describe('tests for checkboxes', () => {

    it('can uncheck the Explicit checkbox', () => {
        cy.visit('/'); // Visit our app home page.

        cy.get('.filters__checkbox') // Grab all checkboxes.
          .first() // Grab only the first match.
          .uncheck() // Uncheck this box.
          .should('not.be.checked'); // Check if it is unchecked.
    });

    it('can check the Single checkbox', () => {
        cy.visit('/'); // Visit our app home page.

        cy.get('#Single')
          .click()
          .should('be.checked');
    });

});