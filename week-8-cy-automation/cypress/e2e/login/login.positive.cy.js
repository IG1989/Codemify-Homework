import loginPage from "../../page_object/login.page"
import dashboardPage from "../../page_object/dashboard.page"
import homePage from "../../page_object/home.page"

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Should log with existing account as user, T84', () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type('johnybreathe@gmail.com');
    loginPage.passwordInput.type('Q1324@werty');
    loginPage.loginBtn.click();

    dashboardPage.roleLabel.should('have.text', 'role: realtor');
    dashboardPage.fullNameLabel.should('have.text', 'Ivan  Grytsiuk');
  });
});