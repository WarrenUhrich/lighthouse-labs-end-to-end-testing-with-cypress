describe('tests for search input form field', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.get('[name="search"]')
          .as('searchInput');
    });

    it('can type into the search input field', () => {
        const textValue = 'The Ink Spots';

        cy.get('@searchInput')
          .type(textValue, {delay: 250})
          .should('have.value', textValue);
    });

    it('can type and backspace in the search input field', () => {
        const textValue = 'BTTT{backspace}{backspace}S';
        const expectedValue = 'BTS';

        cy.get('@searchInput')
          .type(textValue, {delay: 200})
          .should('have.value', expectedValue);
    });

});
