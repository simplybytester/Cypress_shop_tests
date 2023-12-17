/// <reference types="Cypress"/>

describe("Login test", () => {
  beforeEach(() => {
    cy.openLoginPage();
  });
  it("should login with empty form", () => {
    cy.contains("Login").click({ force: true });
    cy.get('[name="login"]').click({ force: true });
    cy.get(".woocommerce-error > li").contains("Error: Username is required");
  });
  it("should login only with email", () => {
    cy.get("#username").click();
    cy.get("#username").type("test@test.pl");
    cy.get('[name="login"]').click({ force: true });
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Error: The password field is empty."
    );
  });

  it.skip("should login with properly data", () => {
    cy.get("#username").click();
    cy.get("#username").type("test@test.pl");
    cy.get("#password").type("Testpage1234@@");
    cy.get('[name="login"]').click({ force: true });
  });
});
