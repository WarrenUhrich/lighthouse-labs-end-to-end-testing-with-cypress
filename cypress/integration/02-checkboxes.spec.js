describe('tests for checkboxes', () => {

    it('can uncheck the "Explicit" checkbox', () => {

        cy.visit('http://localhost:3000');

        cy.get('#Explicit')
          .uncheck()
          .should('not.be.checked');

    });

});
