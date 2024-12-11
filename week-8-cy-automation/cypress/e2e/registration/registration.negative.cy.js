import homePage from "../../../../page_objects/home.page"
import registrationPage from "../../../../page_objects/registration.page"


describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Should not register without email and password', () => {
            // Click login button on homepage
            homePage.registrBtn.click();
            //Leave email and password blank
            // Click on First name
            registrationPage.firstNameInput.type('Ivan');
            // Click on Last name
            registrationPage.lastNameInput.type('Grytsiuk');
            // Leave email and password fields blank
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            //Click register button
            registrationPage.submitBtn.click();

            // Verify user cannot be logged in
            registrationPage.errorEmailReguired.should("be.visible");
            registrationPage.errorPasswordRequired.should("be.visible");

        })

        it('Should not register with an already existing email account', () => {
            // Click register button on homepage
            homePage.registrBtn.click();

            // Click on First name
            registrationPage.firstNameInput.type('Ivan');
            // Click on Last name
            registrationPage.lastNameInput.type('Grytsiuk');
            //Tape name which already exists 
            registrationPage.emailInput.type('johnybreathe@gmail.com');
            registrationPage.passwordInput.type('Q1324@werty')
            //Click register button
            registrationPage.submitBtn.click();

            // Verify user cannot be logged in
            registrationPage.errorInputDataValidationFailed.should("be.visible");

        })

    })