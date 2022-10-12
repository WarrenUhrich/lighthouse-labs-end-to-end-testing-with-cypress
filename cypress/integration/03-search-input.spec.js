describe('tests for the search input field', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.get('[name="search"]')
          .as('searchInput'); // An alias name
    });

    it('can type into the search input field', () => {
        cy.get('@searchInput')
          .type('Franz Ferdinand', {delay: 200})
          .should('have.value', 'Franz Ferdinand');
    });

    it('can backspace in the search input field', () => {
        cy.get('@searchInput')
          .type('ABCD{backspace}{backspace}{backspace}CDC', {delay: 220})
          .should('have.value', 'ACDC');
    });

});