describe('test result display for album searches', () => {
    it('can display results from an API request', () => {
        // Visit the search page.
        cy.visit('http://localhost:3000');

        // "Intercept" the Axios/AJAX request, and replace with test/fake data.
        cy.intercept(
            'GET', // METHOD
            '**/search*', // WEB ADDRESS MATCHING (* = wildcard)
            {fixture: 'itunes'} // Replace response with OUR itunes data.
        ).as('itunesAPIRequest'); // ALIAS, we can use this to check on this promise later!

        // Find the input field, and type in a search.
        cy.get('[type="text"]')
            .type('Daft Punk');

        cy.wait('@itunesAPIRequest'); // WAIT FOR INTERCEPT TO RESOLVE!

        // Check if a particular album is present.        
        cy.get('.album')
            .first()
            .contains('Random Access Memories');
            //.should('contain', 'TRON: Legacy Reconfigured');
    });
});
