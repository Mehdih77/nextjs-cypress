describe("LoginForm", () => {
  let formDetail: { email: string; password: string };
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("form").then((user) => {
      formDetail = user;
    });
  });
  it("init page", () => {
    cy.get("input[placeholder='email']");
    cy.get("input[placeholder='password']");
    cy.get("button");
    cy.get("span").should("not.exist");
  });
  it("error state", () => {
    cy.get("input[placeholder='email']").type("error");
    cy.get("input[placeholder='password']").type("123");
    cy.get("button").click();
    cy.get("span").contains("Email Or Password Is Incorrect!");
  });
  it("correct info from and change page", () => {
    cy.get("input[placeholder='email']").type("test");
    cy.get("input[placeholder='password']").type("1234");
    cy.get("button").click();
    cy.get("span").should("not.exist");
    cy.visit("/dashboard");
    cy.get("a").contains("Dashboard").should("have.class", "text-indigo-600");
  });
  it("correct info from and change page to dashboard and change page to home again", () => {
    cy.get("input[placeholder='email']").type(formDetail.email);
    cy.get("input[placeholder='password']").type(formDetail.password);
    cy.get("button").click();
    cy.get("span").should("not.exist");
    cy.visit("/dashboard");
    cy.get("a")
      .contains(/Dashboard/i)
      .should("have.class", "text-indigo-600")
      .as("link");
    cy.get("@link").click();
    cy.visit("/");
  });
});
