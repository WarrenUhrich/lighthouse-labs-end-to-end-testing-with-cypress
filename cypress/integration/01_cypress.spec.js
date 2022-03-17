describe('tests for Cypress; ensure it is working', () => {
    it('is running', () => {
        expect(true).to.equal(true);
    });

    it('can visit a web page', () => {
        cy.visit({
            url: 'http://duckduckgo.com',
            method: 'GET'
        });
    });
});
