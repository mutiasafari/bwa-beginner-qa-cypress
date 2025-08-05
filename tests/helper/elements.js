export const get = (selector) => cy.get(selector);

export const fillField = (selector, value) =>
  cy.get(selector).clear().type(value).should("have.value", value);

export const click = (selector, ...args) => cy.get(selector).click(...args);

export const verifyAlertContains = (alertText) =>
  cy.on("window:alert", (text) => {
    expect(text).to.contains(alertText);
  });

export const verifyEndPointUrlContains = (endPoint) =>
  cy.url().should("contain", endPoint);
