describe('tests for checkboxes', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('can uncheck the "Explicit" checkbox', () => {
        // beforeEach runs here
        cy.get('#Explicit') // Selected the target element.
          .uncheck()        // Attempted to uncheck this checkbox.
          .should('not.be.checked'); // Checked if it is actually unchecked...
    });

    it('can check the "Single" checkbox', () => {
        // beforeEach runs here
        cy.get('#Single') // Selected the target element.
          .check()        // Attempted to uncheck this checkbox.
          .should('be.checked'); // Checked if it is actually checked...
    });

});
