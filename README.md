# Lighthouse Labs | End-to-End Testing with Cypress

[Git Repository](https://github.com/WarrenUhrich/lighthouse-labs-end-to-end-testing-with-cypress/tree/2022.03.17-web-flex-oct-18-day-end-to-end-testing-with-cypress)

## Jest versus Cypress
- Jest is a CLI approach
- Jest is intended for unit-testing, integration testing
- Jest runs very, very fast and is very efficient!
- Jest is used to test functions, components, more specific focus

## What is Cypress?
- Wholistic approach to testing (end-to-end testing)
- Cypress might be used to test core app features (many components working together)
- Agnostic to the stack used in app development
- Free! Paid option for additional features

## Why Cypress?
- Flexibility - we can test apps without the source code!
- Screenshots, and video, of test success and failures!
    - This makes it easy to share with clients, fellow team-members, and stakeholders in a project!
- One of the best documentations available for free software!

## Setting up Cypress
Install the package and dependencies:
`npm i cypress --save-dev`

First time set-up:
`./node_modules/.bin/cypress install`

## Folders and their Purposes!
- Fixtures: Test data!
- Integration: Our test specifications.
- Plugins: Add-ons to expand on Cypress' functionality.
- Support: Scripts; an area where we can add on to Cypress if needed.

## Common Commands
- Describe to write a description for a block of tests.
- It is used for a specific test.
- [cy.visit() can visit web pages](https://docs.cypress.io/api/commands/visit#Syntax)

## Resources
- [Cypress (Official Website)](https://www.cypress.io/)
- [End-to-End Web Testing with Cypress (O'Reilly Book)](https://www.oreilly.com/library/view/end-to-end-web-testing/9781839213854/)
