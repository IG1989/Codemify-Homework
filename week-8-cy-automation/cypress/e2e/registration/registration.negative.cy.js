import { faker } from "@faker-js/faker";

import dashboardPage from "../../page_object/dashboard.page";
import homePage from "../../page_object/home.page";
import RegistrationPage from './path/to/RegistrationPage';

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.registrationBtn.click(); 
  });

  it("Should not register with empty field", () => {
    registrationPage.registerBtn.click();

    registrationPage.firstNameInputError.should("be.visible");
    registrationPage.lastNameInputError.should("be.visible");
    registrationPage.emailInputError.should("be.visible");
    registrationPage.passwordInputError.should("be.visible");
  });

  it("Should not register with an already registered email account", () => {
    registrationPage.setFullName("Ivan", "Grytsiuk")
    registrationPage.setCredentials(email,password);
    registrationPage.registerBtn.click();

    dashboardPage.fullNameInput.should("have.text", "Ivan  Grytsiuk");
    dashboardPage.roleType.should("have.text", "role: user");

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();

    cy.visit("/");
    homePage.registrationBtn.click();

    registrationPage.setFullName('Ivan','Grytsiuk')
    registrationPage.setCredentials(email,password);
    registrationPage.registerBtn.click();
   
    registrationPage.errorMessage.should("have.text", "Input data validation failed");
  });
});