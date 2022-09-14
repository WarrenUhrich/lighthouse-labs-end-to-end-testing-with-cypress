describe('tests for the search input field', () => {

    beforeEach(() => {

        cy.visit('/');

        cy.get('[name="search"]')
          .as('searchField');

    });

    it('can type into the search field', () => {

        cy.get('@searchField')
          .type('They Might be Giants', {delay: 200})
          .should('have.value', 'They Might be Giants');

    });

    it('can backspace in the search field', () => {

        cy.get('@searchField')
          .type(
            'Humjklsd{backspace}{backspace}{backspace}{backspace}{backspace}an League',
            {delay: 150}
          )
          .should('have.value', 'Human League');

    });

});
