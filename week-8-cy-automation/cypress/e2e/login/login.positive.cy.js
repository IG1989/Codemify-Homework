import homePage from "../../page_object/home.page";
import loginPage from "../../page_object/login.page";
import dashboardPage from "../../page_object/dashboard.page";

describe("Login", () => {
  it("Should login", () => {
    cy.visit("/");

    homePage.loginBtn.click();
    loginPage.login("johnybreathe@gmail.com", "Q1324@werty");

    dashboardPage.fullNameInput.should("have.text", "Ivan  Grytsiuk");
    dashboardPage.roleType.should("have.text", "role: realtor");

  });
});