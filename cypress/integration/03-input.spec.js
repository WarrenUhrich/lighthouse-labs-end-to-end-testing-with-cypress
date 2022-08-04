

describe('tests for the search input field', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('can type into the search field', () => {
        cy.get('[name="search"]')
          .type('They Might be Giants', {delay: 150})
          .should('have.value', 'They Might be Giants');
    });

    it('can backspace in the search field', () => {
        cy.get('[name="search"]')
          .type('Human Leagjksfdf{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}ue', {delay: 150})
          .should('have.value', 'Human League');
    });

});