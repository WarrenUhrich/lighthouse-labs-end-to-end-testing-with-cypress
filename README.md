# Lighthouse Labs | End-to-End Testing with Cypress

* [ ] What is Cypress?
* [ ] Getting Started with Cypress

## Unit Testing

Unit Testing: testing a single section/piece of code (often: function, class, component, etc.)

## Integration Testing

Integration Testing: testing how our units work *together*.

## Jest

React testing framework for unit and integration testing.

* Testing framework
* CLI tool
* Originally intended for React
* Automated testing

### Pros

* Automated - easier to repeat and confirm than manual testing
* Easy to check coverage - how much of the app have we confirmed to be working?
* Easy to run from the terminal!
* Comes with and works well with `create-react-app`
* Built-in libraries to extend its functionality (esp. for React)
* Very fast!

### Cons

* Doesn't have a GUI
* Doesn't take screenshots/videos out of the box
* Difficult to test "big picture," tests are moreso unit-by-unit or per-integration
* 

## End-to-End Testing

End-to-End Testing: simulate the user experience; test the app in a way that matches how a user would experience core/major features.

## Cypress

* JavaScript-based web application end-to-end testing framework
* GUI-based tool
* Opens a browser window for us to configure and run tests
* Opens a browser window to display our tests as they run

### Pros

* GUI interface is often preferred to CLI (just click!)
* We can see the app how it behaves in the browser (as a user)
    * Record screenshots/video
    * Can see how the user would see the app
* Can be detailed like manual testing, but by a robot! More accurate/consistent!
* Can cover (big-picture) the entire project - major features
* Catches UI errors or bugs
    * Includes checking responsive
    * Check for CSS styles and classes
* Checking for more than just code
* Documentation and presentation of Cypress are very mature and premium
* Cypress is not React-specific... it is language/framework/library agnostic!
    * You can write tests for any app your browser can reach!

### Cons

* Operations are more expensive in terms of computer resources
* Testing end-to-end with a browser is a LOT slower than unit or integration testing

## Setting up Cypress in an Application
