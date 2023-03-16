it('can display API results after a search', () => {

    // Visit the app
    cy.visit('/');

    // Sample URL:
    // https://itunes.apple.com/search?term=Charles Mingus&country=CA&media=music&entity=album&attribute=artistTerm

    // Set up a fixture
    cy.intercept(
        'GET', // METHOD
        '**/search*', // URL / PATH PATTERN
        {fixture: 'itunes', delay: 800} // CONFIG OBJ
    ).as('itunesResponse');

    // Get the search input
    cy.get('[name="search"]')

    // Type into the search input
      .type('Charles Mingus', {delay: 150});

    // Check that the spinning wheel is present during loading
    cy.get('.spinner')
      .should('be.visible');

    // Wait until the API results are loaded and output
    cy.wait('@itunesResponse');

    // Assert that a particular / expected album is present
    cy.get('.album__name')
      .contains('Mingus At Carnegie Hall (Deluxe Edition) [2021 Remaster] [Live]')
      .should('be.visible');

});