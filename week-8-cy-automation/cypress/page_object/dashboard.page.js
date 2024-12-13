class DashboardPage {

  get fullNameInput() { return cy.get("a h6"); }
  get roleType() { return cy.get("a p"); }
  get personIcon() { return cy.get('button [data-testid="PersonIcon"]'); }
  get roleLabel() { return cy.get('a p') };
  get fullNameLabel() { return cy.get('h6') };
  get userIconBtn() { return cy.get('[type="button"]').eq(0); }
  get logoutBtn() { return cy.contains("Logout") }

}
export default new DashboardPage();