describe('tests for cypress', () => {

    it('runs', () => {
        assert.strictEqual(true, true);
    });

    it('can visit a web page', () => {
        cy.visit('https://duckduckgo.com/');
    });

    it('can visit our local React application', () => {
        cy.visit('http://localhost:3000/');
    });

});
