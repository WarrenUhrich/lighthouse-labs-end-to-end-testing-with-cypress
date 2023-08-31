it('can display API results after a search', () => {

    // Visit the app
    cy.visit('/'); // Works because of cypress.json

    // URL:
    // GET
	// https://itunes.apple.com/search?term=The Pretty Reckless&country=CA&media=music&entity=album&attribute=artistTerm

    // Set up a fixture
    cy.intercept(
        'GET', // METHOD
        '**/search*', // URL/PATH PATTERN
        {fixture: 'itunes', delay: 800} // CONFIG OBJECT
    ).as('itunesResponse');

    // Get Search input
    cy.get('[name="search"]')
        // Type into search input
        .type('The Pretty Reckless', {delay: 180});

    // Confirm spinning wheel
    cy.get('.spinner')
        .should('be.visible'); // Make sure spinner shows up on the page!

    // Wait until we receive API results
    cy.wait('@itunesResponse');

    // Assert that a particular album is present ("Death By Rock And Roll (Commentary Version)")
    cy.get(':nth-child(5) > .album__info > .album__name')
        .contains('Death By Rock And Roll (Commentary Version)')
        .should('be.visible');
});