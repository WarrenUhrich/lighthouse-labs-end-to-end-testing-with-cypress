# Lighthouse Labs | End-to-End Testing with Cypress

Cypress is a very robust program, capable of automated testing. The documentation is top-tier, a true treat and pleasure to work with. Tests, similar to Jest/Mocha/Chai, are written in near-plain English, allowing for a wide array of team members to contribute to a project's quality assurance. Tests like these are expected to be run before (and during process of) launch of a project or version thereof☺think of it as a safeguard step to prevent launching a project with missing or broken core features. As for quality assurance, Cypress is an amazing tool, ensuring the app is navigable and functional from the browser☺the same way a user would! It is capable of exporting screenshots and even video of tests and their results, making it great for easy sharing with a team or client. It is a very, very mature library and features an exceptional graphical user interface (GUI) toolset. It's specialties include wholistic integration and full-on end-to-end testing of applications. Because it can load both local files or external web pages/documents via a browser, you can even write tests involving (or exclusively encompassing) external projects of which you have no source-code access.

- [Git Repository & Branch](https://github.com/WarrenUhrich/lighthouse-labs-end-to-end-testing-with-cypress/tree/2022.03.17-web-flex-oct-18-day-end-to-end-testing-with-cypress)
- [Vimeo Video](https://vimeo.com/689430503/9e5cd602f6)

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

Run cypress in-project via:
`./node_modules/.bin/cypress open`

## Folders/Files and their Purposes!
- `/cypress.json`: Used to override default configuration values.
- `/cypress/fixtures`: Test data; often in JSON.
- `/cypress/integration`: Our test specifications.
- `/cypress/plugins`: Add-ons to expand on Cypress' functionality.
- `/cypress/support`: Scripts; an area where we can add on to Cypress if needed.

## Common Commands
- [describe(), it(), and beforeEach()](https://docs.cypress.io/guides/references/bundled-tools#Mocha) are afforded to us by Mocha.
    - Describe is used to, well, describe a block of tests!
    - It is used to label a specific test block / unit.
    - BeforeEach allows us an opportunity to add code/setup that will run before each text in the block.
- [cy.visit()](https://docs.cypress.io/api/commands/visit#Syntax) visits a web page.
- [cy.get()](https://docs.cypress.io/api/commands/get) Retrieves an HTML element based on jQuery/CSS-like selectors.
    - [<entity>.as()](https://docs.cypress.io/api/commands/as) Assign an alias for later use in cy.get() or cy.wait(), use an `@` in a selector to call upon an alias.
- [<element>.find()](https://docs.cypress.io/api/commands/find) Retrieves a child element from inside of a selected element.
- [cy.intercept()](https://docs.cypress.io/api/commands/intercept) Used for "spying" (checking for use of a particular request) or "stubbing" (replacing the response for a particular request.)
- [cy.wait()](https://docs.cypress.io/api/commands/wait) Waits before proceding with test instructions.
- [<element>.click()](https://docs.cypress.io/api/commands/click), [<element>.type()](https://docs.cypress.io/api/commands/type), [<element>.check()](https://docs.cypress.io/api/commands/check) are used to interact with elements and forms in a web page.

## Resources
- [Cypress (Official Website)](https://www.cypress.io/)
- Trouble in WSL2? [Follow the documentation carefully!](https://docs.cypress.io/guides/getting-started/installing-cypress#Windows-Subsystem-for-Linux)
    - WSL2 requires X-Server, which usually requires Firewall tweaks to get through! It allows your Linux to reach Windows and render the program's GUI (Electron app: Cypress GUI.)
- [End-to-End Web Testing with Cypress (O'Reilly Book)](https://www.oreilly.com/library/view/end-to-end-web-testing/9781839213854/)
