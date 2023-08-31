describe('tests for checkboxes', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can uncheck the "Explicit" checkbox', () => {
        // cy.visit('http://localhost:3000');

        cy.get('#Explicit')
            .uncheck()
            .should('not.be.checked');
    });

    it('can check the "Single" checkbox', () => {
        // cy.visit('http://localhost:3000');

        cy.get('#Single')
            .check()
            .should('be.checked');
    });

});