describe('tests for checkboxes', () => {

    // Runs before each "it" / test:
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can uncheck the "Explicit" checkbox', () => {
        // Select the checkbox element!
        cy.get('#Explicit') // Get the checkbox.
          .uncheck()        // Uncheck the checkbox.
          .should('not.be.checked'); // See if it actually did uncheck!
    });

    it('can check the "Single" checkbox', () => {
        cy.get('#Single')        // Get the checkbox.
          .check()               // Check the checkbox.
          .should('be.checked'); // See if it is actually checked.
    });

});