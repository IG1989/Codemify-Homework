import { faker } from "@faker-js/faker";

import dashboardPage from "../../page_object/dashboard.page";
import homePage from "../../page_object/home.page";
import registrationPage from "../../page_object/registration.page";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.registerBtn.click(); 
  });

  it("Should not register with empty field, T86", () => {
    registrationPage.registerBtn.click();

    registrationPage.firstNameInput.should("be.visible");
    registrationPage.lastNameInput.should("be.visible");
    registrationPage.emailInput.should("be.visible");
    registrationPage.passwordInput.should("be.visible");
  });

  it("Should not register with an already registered email account, T87", () => {
    registrationPage.setFullName("Ivan", "Grytsiuk")
    registrationPage.setCredentials(email,password);
    registrationPage.registerBtn.click();

    dashboardPage.fullNameInput.should("have.text", "Ivan  Grytsiuk");
    dashboardPage.roleType.should("have.text", "role: user");

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();

    cy.visit("/");
    homePage.registerBtn.click();

    registrationPage.setFullName('Ivan', 'Grytsiuk')
    registrationPage.setCredentials(email, password);
    registrationPage.registerBtn.click();
   
    registrationPage.errorMessage.should("have.text", "Input data validation failed");
  });
});