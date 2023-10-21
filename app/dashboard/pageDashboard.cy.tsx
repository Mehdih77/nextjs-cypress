import Dashboard from "./page";

describe("<Dashboard />", () => {
  it("renders", () => {
    cy.mount(<Dashboard />);
    // cy.pause()
    cy.get("select#cars").as("selector");
    cy.get("@selector").select("benz");
    cy.get("@selector").should("have.value", "benz");
  });
});
