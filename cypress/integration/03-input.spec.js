

describe('tests for the search input field', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.get('[name="search"]')
          .as('searchInput'); // Set an alias to represent this selection.
    });

    it('can type into the search field', () => {
        cy.get('@searchInput') // Alias' are called with an @ symbol.
          .type('They Might be Giants', {delay: 150})
          .should('have.value', 'They Might be Giants');
    });

    it('can backspace in the search field', () => {
        cy.get('@searchInput')
          .type('Human Leagjksfdf{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}ue', {delay: 150})
          .should('have.value', 'Human League');
    });

});