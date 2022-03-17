describe('test result display for album searches', () => {
    it('can display results from an API request', () => {
        // Visit the search page.
        cy.visit('http://localhost:3000');

        // "Intercept" the Axios/AJAX request, and replace with test/fake data.

        // Find the input field, and type in a search.
        cy.get('[type="text"]')
            .type('Daft Punk');

        // Check if a particular album is present.        
    });
});