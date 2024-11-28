describe('Login', () => {
    it("Should login", () => {
        cy.visit("/");

cy.get('[href="/auth/login"]').click();
cy.get('[name="email"]').type("johnybreathe@gmail.com");
cy.get('[name="password"]').type("Q1324@werty");
cy.get('button[type="submit"]').click();  

cy.title().should('eq', 'User: Profile | Delek Homes');
cy.get("a h6").should("have.text", "Ivan  Grytsiuk");
})
})