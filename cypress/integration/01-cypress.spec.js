describe('tests for cypress', () => {

    it('runs', () => {
        assert.strictEqual(true, true);
    });

    it('can visit a web page', () => {
        // cy.visit('https://www.sephora.com/ca/en/');
        cy.visit('https://google.ca/');
    });

    it('can visit my local React application', () => {
        cy.visit('http://localhost:3000/');
    });

});