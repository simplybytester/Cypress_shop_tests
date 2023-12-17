// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//
//
Cypress.Commands.add("openLoginPage", (username, password) => {
  cy.visit("/");
  cy.get(".top-account").click();
});

Cypress.Commands.add("registered", () => {
  cy.location("pathname").should("eq", "/my-account/");
  cy.get("#reg_email").click();
  cy.get("#reg_email").type("test@test.pl");
  cy.get("#reg_password").type("Testpage1234@@");
  cy.get('[name="register"]').click({ force: true });
  
  
});
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
