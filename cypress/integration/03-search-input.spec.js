describe('tests for the search input form field', () => {

    beforeEach(() => {
        cy.visit('/');

        // [class="radius"]
        cy.get('.search__form [name="search"]')
          .as('searchInput'); // Alias name we can use later.
    });

    it('can type into the search input field', () => {

        const textValue = 'Born Ruffians';

        cy.get('@searchInput')
            // Try to type text into the search input field.
            .type(textValue, { delay: 350 })
            // Confirm that the expected text is inside.
            .should('have.value', textValue);
    });

    it('can type and backspace in the search input field', () => {

        const keystrokes = 'Lester Old{backspace}{backspace}{backspace}Young';
        const textValue = 'Lester Young';

        cy.get('@searchInput')
            // Try to type text into the search input field.
            .type(keystrokes, { delay: 300 })
            // Confirm that the expected text is inside.
            .should('have.value', textValue);
    });

});