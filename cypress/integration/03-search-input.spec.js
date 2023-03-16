describe('tests for the search input field', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.get('[name="search"]')
          .as('searchInput');
    });

    it('can type into the search input field', () => {

        const textValue = 'Weird Al';

        cy.get('@searchInput') // @ symbol is used for aliases
          .type(textValue, {delay: 200})
          .should('have.value', textValue);

    });

    it('can backspace in the search input field', () => {

        const textValue = 'The Muppets';

        cy.get('@searchInput')
          .type(
            'The Muppppp{backspace}{backspace}{backspace}ets',
            {delay: 250}
          )
          .should('have.value', textValue);

    });

});