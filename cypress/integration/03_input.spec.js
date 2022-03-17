describe('tests for the "search" input field', () => {
    // Runs before each test ("it".)
    // Use this to be DRY! Don't repeat yourself!
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('[type="text"]')
            .as('searchInput'); // Alias! Do this to reference this element later.
            // https://docs.cypress.io/guides/core-concepts/variables-and-aliases
    });

    it('can type into the "search" input field', () => {
        cy.get('@searchInput') // Retrieving from ALIAS @searchInput
            .type('Daft Punk')
            .should('have.value', 'Daft Punk');
    });
   
    it('can use backspaces in "search" input field', () => {
        cy.get('@searchInput') // Keypresses are in curly braces.
            .type('Dart{backspace}{backspace}ft Punk', {delay: 200})
            .should('have.value', 'Daft Punk'); // The backspaces worked!
    });
});
