import { faker } from "@faker-js/faker";

import dashboardPage from "../../page_object/dashboard.page";
import homePage from "../../page_object/home.page";
import loginPage from "../../page_object/login.page";
import RegistrationPage from './path/to/RegistrationPage';


const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registrationPage.click();
    registrationPage.setFullName("Ivan" , "Grytsiuk")
    registrationPage.setCredentials(email, password)
    registrationPage.registerBtn.click();
    
    dashboardPage.fullNameInput.should("have.text", "Ivan  Grytsiuk");
    dashboardPage.roleType.should("have.text", "role: user");

    dashboardPage.personIcon.click();
    cy.contains("Logout").click();
    
    loginPage.login(email,password);
    
    dashboardPage.fullNameInput.should("have.text", "Ivan Grytsiuk");
    dashboardPage.roleType.should("have.text", "role: user");
  });
});