describe("Signing up for a newsletter", () => {
  before(() => {
    cy.visit("/");
  });
  it("should sign up for a newsletter", () => {
    cy.get("#email-subscribers-2").scrollIntoView();
    cy.get("#es_txt_name").click();
    cy.get("#es_txt_name").type("Monika");
    cy.get("#es_txt_email").type("test@test.pl");
    cy.get("#es_txt_button").click();
    cy.get("#es_msg").should("contain", "Successfully Subscribed.");
  });
});
