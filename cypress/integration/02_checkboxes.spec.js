describe('tests for filter checkboxes', () => {
    it('can uncheck the "explicit" checkbox', () => {
        cy.visit('http://localhost:3000');

        cy.get('.filters__form-group')
          .first()
          .find('[type="checkbox"]')
          .uncheck()
          .should('not.be.checked');
    });
});
