# Lighthouse Labs | End-to-End Testing with Cypress

* [ ] What is Cypress?
* [ ] Getting Started with Cypress

## Unit and Integration Testing

* Unit Test: Testing a particular chunk code (often a function!)
* Integration Test: How units work together, or how a piece of the app works with multiple parts.

## What was Jest Good At?

* Unit Testing
* Integration Testing
* Tooled specifically with React in-mind
* Jest is a testing framework
* Pros of using Jest
    * Debugging feature!
    * Instant, very fast to refresh and see the new result!
    * Step-by-step, can easily work incrementally
    * Mature CLI tooling
    * Integrates well with Git/GitHub

## End-to-End Testing?

Testing the application more as a whole, "big picture!" Often this means testing major user stories or features in the app. Often ends up being a test from the user's perspective.

## Cypress! A general end-to-end testing software.

Cypress is a robust, premium (yet free-to-use) software capable of running browser-based end-to-end tests.

Pros:
* More all-encompassed testing!
* How much major functionality is tested? We can hit a lot of coverage with Cypress!
* We understand what the user ends up seeing or ends up being able to do.
* It can click through, type, navigate, etc. faster than a person in a browser
* Is able to take screenshots of pages/steps during tests
* Is able to take videos of pages/steps during tests
* Cypress is language / stack agnostic (you don't need to know the source code! Just need to be able to see the project in the browser)
* Documentation is very premium

Cons:
* Cypress is more intensive (both in time and resources) than most CLI unit/integration testing options
* Slower than most unit/integration test options
* Intended for web (HTML/JSON) output, not really great for units like helper functions on their own

## Getting Started with Cypress

### Set-Up

* `npm install cypress@9.7.0`
* `./node_modules/.bin/cypress open`
* Recommended: Add a script to `package.json` that runs Cypress
