/// <reference types="Cypress"/>

describe("Making an order", () => {
  it("should add things to the cart", () => {
    cy.openLoginPage();
    cy.registered();
    cy.get(".site-title").click();
    cy.get('a[href*="/istwic-scarf/"]').scrollIntoView();
    cy.get(
      "#tyche_products-4 > .tyche-product-list-container > .tyche-product-list > :nth-child(1) > .row > :nth-child(2) > .tyche-product-body > .ajax_add_to_cart"
    ).click({ timeout: 2000 });
    cy.get(".top-cart > a").click();
    cy.get(
      'img[src="//skleptest.pl/wp-content/uploads/2017/06/a-neckerchief-1317830_1920-3-49x75.jpg"]'
    ).should("be.visible");
  });
});
