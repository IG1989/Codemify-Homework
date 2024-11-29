import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/auth/register"]').click(); 
  });

  it("Should not register with empty field", () => {
    cy.get('[type="submit"]').click();

    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

  it("Should not register with an already registered email account", () => {
    cy.get('[name="firstName"]').type("Ivan");
    cy.get('[name="lastName"]').type("Grytsiuk");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Ivan  Grytsiuk");
    cy.title().should('eq', 'User: Profile | Delek Homes');

    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    cy.visit("/");
    cy.get('[href="/auth/register"]').click();

    cy.get('[name="firstName"]').type("Ivan");
    cy.get('[name="lastName"]').type("Grytsiuk");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get('[role="alert"]').should("have.text","Input data validation failed");
  });
});