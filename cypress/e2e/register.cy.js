/// <reference types="Cypress"/>

describe("Registration test", () => {
  it("should create an client account with fullfilled data", () => {
    cy.openLoginPage();
    cy.location("pathname").should("eq", "/my-account/");
    cy.registered();
    cy.get(".page-title").should("be.visible");
    cy.getCookie("wordpress_logged_in_06896c8a65c587873ddf8db437ffa769")
      .its("value")
      .should("not.be.empty");
  });
});
