it('can display API results after a search', () => {
    // Visit the app
    cy.visit('/');

    // Set up our fixture
    cy.intercept(
        'GET', // METHOD
        '**/search*', // URL / PATH PATTERN // https://itunes.apple.com/search?term=Ella%20Fitzgerald&country=CA&media=music&entity=album&attribute=artistTerm
        {fixture: 'itunes', delay: 750} // CONFIG OBJ.
    ).as('itunesResponse');

    // Get the search input
    cy.get('[name="search"]')
      // Type into the search input
      .type('Ella Fitzgerald', {delay: 175});

    // Check for spinner
    cy.get('.spinner')
      .should('be.visible');

    // Wait until API results are loaded / output
    cy.wait('@itunesResponse');

    // Assert that a particular album is present
    cy.get('.album__name')
      .contains('Ella & Louis Christmas')
      .should('be.visible');
});
