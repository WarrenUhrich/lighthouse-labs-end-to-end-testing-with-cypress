describe('test result display for album searches', () => {
    it('can display results from an API request', () => {
        // Visit the search page.
        cy.visit('http://localhost:3000');

        // "Intercept" the Axios/AJAX request, and replace with test/fake data.
        cy.intercept(
            'GET', // METHOD
            '**/search*', // WEB ADDRESS MATCHING (* = wildcard)
            {fixture: 'itunes'} // Replace response with OUR itunes data.
        );

        // Find the input field, and type in a search.
        cy.get('[type="text"]')
            .type('Daft Punk');

        // Check if a particular album is present.        
        cy.get('.album') // FAILED! This happens before the data is loaded...
            // .contains('TRON: Legacy Reconfigured')
            .should('contain', 'TRON: Legacy Reconfigured');
    });
});