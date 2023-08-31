describe('tests for the search input form field', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.get('[name="search"]')
            .as('searchInput');
    });

    it('can type into the search input field', () => {
        const textValue = 'Weeknd';

        cy.get('@searchInput')
            .type(textValue, {delay: 250})
            .should('have.value', textValue);
    });

    it('can type into the search input field', () => {
        const textValue = 'Justinnnnnnn{backspace}{backspace}{backspace}{backspace}{backspace}{backspace} Bieber';
        const expectedText = 'Justin Bieber';

        cy.get('@searchInput')
            .type(textValue, {delay: 200})
            .should('have.value', expectedText);
    });
});
