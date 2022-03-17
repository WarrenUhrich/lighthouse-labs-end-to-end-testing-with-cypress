describe('tests for the "search" input field', () => {
    // Runs before each test ("it".)
    // Use this to be DRY! Don't repeat yourself!
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can type into the "search" input field', () => {
        cy.get('[type="text"]')
            .type('Daft Punk')
            .should('have.value', 'Daft Punk');
    });
   
    it('can use backspaces in "search" input field', () => {
        cy.get('[type="text"]')
            .type('Daft Punk')
            .should('have.value', 'Daft Punk');
    });
});
