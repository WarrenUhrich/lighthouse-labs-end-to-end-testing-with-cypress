describe('tests for search input form field', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.get('.search__form input[name="search"]') // Get the search input.
          .as('searchInput'); // Alias name for later reference.
    });

    it('can type into the search input field', () => {

        const textValue = 'Muse';

        cy.get('@searchInput')
          .type(textValue, {delay: 250}) // Type into the search input.
          .should('have.value', textValue); // Assert that the value in the input is equal to the desired textValue

    });

    it('can type and backspace in the search input field', () => {

        const textValue = 'Muse';
        const keyboardTypingInstructions = 'Muuuu{backspace}{backspace}{backspace}se';

        cy.get('@searchInput') // Get the search input.
          .type(keyboardTypingInstructions, {delay: 200}) // Type into the search input.
          .should('have.value', textValue); // Assert that the value in the input is equal to the desired textValue

    });

});