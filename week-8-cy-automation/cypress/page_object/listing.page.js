class ListingPage{

    get listingTitle() { return cy.get('.MuiGrid-root h5')}
    get moreInfoButton() { return cy.get('[class="MuiBox-root css-xi606m"]')}
    get bedroomIcon() { return cy.contains(' Bedrooms: ')}
    get propertyName() { return  cy.get('.MuiGrid-root.MuiGrid-item h3')}
    get priceRange() { return cy.visit('https://dev.delekhomes.com/featured-listings?price=500000-10000000&keyword=pasadena');}
    get priceCheck() { return cy.should('have.text', '1200000')}
    get firstInfoButton() { return cy.get('[class="MuiBox-root css-xi606m"]').eq(0)}
    get searchInput() { return cy.get('[type="text"]').eq(0)}
    get startSearch() { return cy.get('.MuiBox-root.css-1t9pz9x.iconify.iconify--eva')}
    get bedroonButton() { return cy.get('[role="button"]').eq(0)}
    get twoBedrooms() { return cy.get('[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-vyg8zi"]').eq(1)}
    get cityInput() { return cy.get('[type="text"]').eq(1)}
   

}
export default new ListingPage();