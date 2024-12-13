import loginPage from "../../page_object/login.page"
import homePage from "../../page_object/home.page"
import dashboardPage from "../../page_object/dashboard.page"

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Should log with existing account as user, T85', () => {
        homePage.loginBtn.click();

        loginPage.emailInput.type('johnybreathe@gmail.com');
        loginPage.passwordInput.type('Q1324@werty');
        loginPage.loginBtn.click();

        dashboardPage.roleLabel.should('have.text', 'role: realtor')
        dashboardPage.fullNameLabel.should('have.text', 'Ivan  Grytsiuk')

        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
    });
});