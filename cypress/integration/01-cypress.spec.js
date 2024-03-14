describe('tests for cypress', () => {

    it('runs', () => {
        assert.strictEqual(true, true);
    });

    it('can visit a web page', () => {
        cy.visit('https://wikipedia.org/');
    });

    it('can visit another web page', () => {
        cy.visit('https://duckduckgo.com/');
    });

    it('can visit our local host React application: localhost:3000', () => {
        cy.visit('http://localhost:3000/');
    });

});

