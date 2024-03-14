it('can display API results after a search is typed', () => {

    // Visit the web page.
    cy.visit('/');

    // Set-up our fixture (we to use OUR test data, not the live API.)
    // Set up an interception (if the app calls to the search API, incercept and replace with our data.)
    cy.intercept(
        'GET',        // METHOD
        '**/search*', // URL/PATH PATTERN // HTTP/HTTPS DOMAIN.COM /search ?anything=after
        { fixture: 'itunes', delay: 8000 }
    ).as('itunesResponse');

    // Get the search input.
    cy.get('.search__form [name="search"]')
        // Type into the search input.
        .type('Kendrick Lamar', { delay: 285 });

    // Get the "loading spinner", make sure it displays while we are loading the results.
    cy.get('.spinner')
        // Assert that the loading spinner is visible.
        .should('be.visible');

    // Wait until the results are received.
    cy.wait('@itunesResponse');

    // Assert that a particular album does exist in our page (we're able to display results.)
    cy.get(':nth-child(28) > .album__info > .album__name')
        .contains('Overly Dedicated')
        .should('be.visible');
});