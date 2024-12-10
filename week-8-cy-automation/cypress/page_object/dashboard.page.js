class DashboardPage {
    get fullNameInput() {return cy.get("a h6")};
    get roleType() {return cy.get("a p")};
    get personIcon() {return cy.get('[class="MuiBox-root css-vxcmzt"]').eq(1)};
};
  
  export default new DashboardPage();