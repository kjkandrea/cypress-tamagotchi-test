// https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-test-id attribute.
     * @example cy.getByTestId('poop')
     */
    getByTestId(testId: string): Chainable<JQuery<HTMLHtmlElement>>
    tamagotchiStart(): Chainable<JQuery<HTMLHtmlElement>>
    getPoop(): Chainable<JQuery<HTMLHtmlElement>>
    getMeal(): Chainable<JQuery<HTMLHtmlElement>>
    cleanPoop(): Chainable<JQuery<HTMLHtmlElement>>
    giveMeal(): Chainable<JQuery<HTMLHtmlElement>>
    kareninCycle(i: number): Chainable<JQuery<HTMLHtmlElement>>
  }
}