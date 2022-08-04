describe('tests for API results display', () => {

    it('can display API results on search', () => {
        cy.visit('/'); // Visit the application home page.

        // Spoof our data (show only test data on AJAX request.)
        cy.intercept('GET', '**/search*', {fixture: 'itunes'})
          .as('itunesResponseData');

        // Get our search input field.
        cy.get('[name="search"]')
          // Type a search into that field.
          .type('B-52s', {delay: 200});

        // Check if the spinner (loading animation) is visible.
        cy.get('.spinner')
          .should('be.visible');

        // Wait until the API results are loaded.
        cy.wait('@itunesResponseData');

        // Pick out a specific album from our mock data.
        cy.get('.album__info')
          .contains('Funplex')
          // Confirm that the album is present.
          .should('be.visible');
    });
    
});
