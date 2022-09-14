it('can display API results on-search', () => {

    // Visit our application
    cy.visit('/');

    // Spoof data from the API (fixtures)
    cy.intercept('GET', '**/search*', {fixture: "itunes"})
    .as('itunesResponse');

    // Get our search field
    cy.get('[name="search"]')
    .type('Rammstein', {delay: 100});

    // Check for spinner
    cy.get('.spinner')
    .should('be.visible');

    // Wait until API results are loaded...
    cy.wait('@itunesResponse');

    // Assert that a specific album is present
    cy.get('.album__info')
    .contains('Paris (Live)')
    .should('be.visible');

});
