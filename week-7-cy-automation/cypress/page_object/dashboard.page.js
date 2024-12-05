class DashboardPage {
    get fullNameInput() {
      return cy.get("a h6");
    }
    
    get roleType() {
      return cy.get("a p");
    }
    
    get personIcon() {
      return cy.get('button[data-testid="PersonIcon"]', { timeout: 10000 }).should('be.visible');
    }
  }
  
  export default new DashboardPage();