describe('tests for checkboxes', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can uncheck the \'Explicit\' checkbox', () => {
        // Target element in-page...
        cy.get('#Explicit')
            // Try to uncheck the element...
            .uncheck()
            // See if the element is checked or not.
            .should('not.be.checked');
    });

    it('can check the \'Single\' checkbox', () => {
        // Target element in-page...
        cy.get('#Single')
            // Try to check the element...
            .check()
            // See if the element is checked or not.
            .should('be.checked');
    });

});
