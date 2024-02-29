it('can display API results after a search is typed', () => {

    // Visit the web app...
    cy.visit('/');

    // Set-up a fixture (we want to use OUR test data, not the live API)
    // We will spoof any incoming data from the Apple API.
    cy.intercept(
        'GET',        // METHOD
        '**/search*', // URL/PATH PATTERN
        {fixture: 'itunes', delay: 1000}, // CONFIG OBJECT
    ).as('itunesResponse'); // Set up an alias/name we can reference easily later.

    // Get the search input
    cy.get('.search__form input[name="search"]')
      // Type into the search input  
      .type('Muse', {delay: 180});

    // Get the spinning wheel graphic (make sure there is a visual during loading)
    cy.get('.spinner')
      .should('be.visible'); // Assert that the LOADING spinner should be present/visible.

    // Wait until we receive the API results
    cy.wait('@itunesResponse'); // Wait until our fixture/intercept is done.

    // Assert that a particular album is in the result
    cy.get(':nth-child(12) > .album__info > .album__name')
      .contains('Hullabaloo Soundtrack')
      .should('be.visible');

});
