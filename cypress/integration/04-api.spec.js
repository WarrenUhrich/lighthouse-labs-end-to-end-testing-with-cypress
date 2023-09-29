it('can display API results after a search', () => {

    // Visit the web app...
    cy.visit('/');

    // Set up a fixture (we want to use OUR test data, not the live API data)
    cy.intercept(
        'GET', // METHOD
        '**/search*', // URL/PATH PATTERN
        {fixture: 'itunes', delay: 800} // CONFIG OBJECT
    ).as('itunesResponse');

    // Get the search input
    cy.get('[name="search"]')
       // Type into the search: "The Cure"
      .type('The Cure', {delay: 180});

    // Get spinning wheel (make sure loading state is working...)
    cy.get('.spinner')
      .should('be.visible');

    // Wait until we receive the API results
    cy.wait('@itunesResponse');

    // Assert that a particular album is in our results... "Bestival Live 2011"
    cy.get(':nth-child(6) > .album__info > .album__name')
      .contains('Bestival Live 2011')
      .should('be.visible');
});