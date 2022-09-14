describe('tests for Cypress', () => {
    
    it('runs', () => {
        assert.strictEqual(true, true);
    });

    it('can visit a web page', () => {
        cy.visit('https://duckduckgo.com/');
    });

    it('can visit our local application', () => {
        cy.visit('http://localhost:3000');
    });

});
