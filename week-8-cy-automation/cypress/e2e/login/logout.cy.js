import dashboardPage from "../../../../page_objects/dashboard.page"
import homePage from "../../../../page_objects/home.page"
import loginPage from "../../../../page_objects/login.page"

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should log with existing account as user', () => {

        homePage.loginBtn.click();

        loginPage.emailInput.type('johnybreathe@gmail.com');
        loginPage.passwordInput.type('Q1324@werty');

        loginPage.loginBtn.click();

        dashboardPage.roleLabel.should('have.text', 'role: user')
        dashboardPage.fullNameLabel.should('have.text', 'Ivan Grytsiuk')

        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
    })
})