# Lighthouse Labs | End-to-End Testing with Cypress

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-end-to-end-testing-with-cypress/tree/2023.02.16-web-flex-day-19sept2022) | [Vimeo Video Recording (Coming Soon!)](#)

* [X] What is Cypress?
* [X] Getting Started with Cypress

## Unit and Integration

* Unit: testing a single piece of code (function / component)
* Integration: testing how units work *together*

We used Jest last day to write some unit / integration tests.

* Jest is a testing framework
* CLI tool
* Originally intended for React
* Automated testing

Pros of Jest?
* Quick to write targetted / technical tests
* Excels at unit / integration tests
* Very easy to test at an atomic level (turn off, or don't call what isn't needed)
* Easy mocking of functions (also avail. in Cypress)
* Very fast, very efficient
* Integrates nicely with our Git / GitHub repos (also avail. in Cypress)

## End-to-End

* End-to-End: "simulate" user behaviour; test whole user stories

Cypress! What is it?

* JavaScript Web Testing and Component Testing Framework
* --> integration or end-to-end
* Opens a browser window and navigates a web site like a end-user would

Pros of Cypress?
* Easy mocking of functions (also avail. in Jest)
* Integrates nicely with our Git / GitHub repos (also avail. in Jest)
* Opens doors to testing responsive features
* High confidence the app behaves appropriately for users
* Able to watch the test process (help with debugging)
* Tests more than just "code", we can check content, CSS, etc. potentially
* Cypress is capable of taking screenshots and video recordings of its tests
* Completely language / stack agnostic, can write tests for any web app you can access in the browser, local or otherwise
* Documentation and UI are very mature and premium

```
{
    "viewportHeight": 768,
    "viewportWidth": 1024
}

```
