describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with existing account as a user', () => {

    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("johnybreathe@gmail.com");
    cy.get('[name="password"]').type("Q1324@werty");
    cy.get('button[type="submit"]').click();

    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Ivan  Grytsiuk");
  });
});

describe("Logout", () => {
  it("Should login and logout", () => {
    cy.visit("/");

    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("johnybreathe@gmail.com");
    cy.get('[name="password"]').type("Q1324@werty");
    cy.get('button[type="submit"]').click();

    cy.get("a h6").should("have.text", "Ivan  Grytsiuk");
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");

    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    cy.contains("Sign in to Delek Homes").should("be.visible");
  });
});
