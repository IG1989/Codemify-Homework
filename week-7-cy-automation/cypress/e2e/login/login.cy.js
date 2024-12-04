describe('Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should log in with existing account as a user', () => {
      cy.get('[href="/auth/login"]').click(); 
      cy.get('[name="email"]').type("johnybreathe@gmail.com");
      cy.get('[name="password"]').type("Q1324@werty");
      cy.get('button[type="submit"]').click();
  
      // verify by title, user role and name 
      cy.get("a p").should("have.text", "role: user");
      cy.title().should("eq", "User: Profile | Delek Homes");
      cy.get("a h6").should("have.text", "Ivan  Grytsiuk");
    });
  });
  
  