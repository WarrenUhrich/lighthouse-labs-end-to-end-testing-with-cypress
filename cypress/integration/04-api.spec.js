it('can display API results on-search', () => {
    // Visit our app
    cy.visit('/');

    // Set up spoof data for specific Ajax request (fixture)
    cy.intercept(
        'GET', // METHOD
        '**/search*', // URL
        {fixture: 'itunes', delay: 200} // CONFIG
    ).as('itunesResponse'); // Alias: @itunesResponse

    // Target the search input; type in the the search input
    cy.get('[name="search"]')
      .type('SAULT', {delay: 180});

    // Check for the spinner element (during Ajax load)
    cy.get('.spinner')
      .should('be.visible');

    // Wait until API results are loaded
    cy.wait('@itunesResponse'); // Wait until this is finished

    // Assert that a particular album info / art / etc. is present
    cy.get('.album__name')
      .contains('5')
      .should('be.visible');
});
