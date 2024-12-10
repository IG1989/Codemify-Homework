class Homepage {
    
    get loginBtn() { return cy.get('[href="/auth/login"]') }
    get registrationBtn() { return cy.get('[href="/auth/register"]') }
    get nightModeOn() { return cy.get('[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]')}
    get searchInput() { return cy.get('[type="text"]')}
    get startSearch() { return cy.get('[type="button"]')}
    get bedroomsDropdown() { return cy.get('[role="button"]')}
    get bedroomsInput() { return cy.get('[data-value="2"]')}
    get cityInput() { return cy.get('[type="text"]')}
    get featureListingBtn() { return cy.get('.MuiBox-root.css-12z0wuy').eq(1)}
    
}
    export default new Homepage();