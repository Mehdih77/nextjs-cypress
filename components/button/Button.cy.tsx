import Button from "./Button";

describe("<Button />", () => {
  it("renders button", () => {
    cy.mount(<Button handleClick={cy.stub()} />);
    cy.get("button").should("have.class", "bg-green-600").as("button");
    cy.get("@button")
      .invoke("hover")
      .should("have.class", "hover:bg-green-700");
  });
  it("disabled button", () => {
    cy.mount(<Button disabled handleClick={cy.spy()} />);
    cy.get("button").should("have.class", "bg-gray-500");
    // cy.get('button').should('have.css', 'pointer-events', "none") // not clickable
    cy.get("button").click({ force: true });
  });
});
// cy.get('#Button')
//   .invoke('attr', 'aria-disabled')
//   .then((ariaDisabled) => {
//     // Probably helpful to also cy.log() the value
//     cy.log(`ariaDisabled is ${ariaDisabled}`);
//     if (ariaDisabled !== "true") {
//       cy.log('Button exists and is disabled!')
//       return
//     }
//     cy.log('Button exists and is enabled!')
//     cy.get('#Button').click();
//   });
