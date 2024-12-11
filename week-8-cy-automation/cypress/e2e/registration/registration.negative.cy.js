import homePage from "../../../../page_objects/home.page"
import registrationPage from "../../../../page_objects/registration.page"


describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Should not register without email and password', () => {
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type('Ivan');
            registrationPage.lastNameInput.type('Grytsiuk');
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            registrationPage.submitBtn.click();
            registrationPage.errorEmailReguired.should("be.visible");
            registrationPage.errorPasswordRequired.should("be.visible");

        })

        it('Should not register with an already existing email account', () => {
            homePage.registrBtn.click();

            registrationPage.firstNameInput.type('Ivan');
            registrationPage.lastNameInput.type('Grytsiuk');
            registrationPage.emailInput.type('johnybreathe@gmail.com');
            registrationPage.passwordInput.type('Q1324@werty')

            registrationPage.submitBtn.click();

            registrationPage.errorInputDataValidationFailed.should("be.visible");

        })

    })