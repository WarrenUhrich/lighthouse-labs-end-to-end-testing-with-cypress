describe('tests for the search input field', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.get('[name="search"]')
          .as('searchInput');
    });

    it('can type into the search input field', () => {
        cy.get('@searchInput')
          .type('Beach Boys', {delay: 150})
          .should('have.value', 'Beach Boys');
    });

    it('can backspace in the search input field', () => {
        cy.get('@searchInput')
          .type('Fleeeeeee{backspace}{backspace}{backspace}{backspace}{backspace}twood Mac', {delay: 200})
          .should('have.value', 'Fleetwood Mac');
    });

});