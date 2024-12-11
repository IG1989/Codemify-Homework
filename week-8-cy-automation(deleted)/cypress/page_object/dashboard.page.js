class DashboardPage {
    get fullNameInput() {return cy.get("a h6")};
    get roleType() {return cy.get("a p")};
    get personIcon() {return cy.get('.css-1x4nai .MuiButtonBase-root MuiIconButton-root.MuiIconButton-sizeMedium css-10v8o86"]')};
  }
  
  export default new DashboardPage();