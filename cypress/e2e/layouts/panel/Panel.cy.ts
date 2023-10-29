describe("Panel", () => {
  it("redirect", () => {
    cy.visit("/panel");
    cy.visit("/");
    cy.get("div").contains("Panel").should("not.exist");
    cy.log(Cypress.env("email")); // cypress.env.json
  });
});
