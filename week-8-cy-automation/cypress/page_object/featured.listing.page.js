class FeaturedListingPage {

  get nightModeOn() { return cy.get('[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]')}
  get featureListingBtn() { return cy.get('.MuiBox-root.css-12z0wuy').eq(1)}
  get listingTitle() { return cy.get('.MuiGrid-root h5')}
  get moreInfoBtn() { return cy.get('[class="MuiBox-root css-xi606m"]')}
  get bedroomIcon() { return cy.contains(' Bedrooms: ')}
  get askingPriceIcon() { return cy.contains('Asking Price')}
  get sqFtIcon() { return cy.contains('Square Feet: ')}
  get lotSizeIcon() { return cy.contains('Lot Size: ')}
  get listingDateIcon() { return cy.contains('Listing Date:')}
  get startSearch() { return cy.get('.MuiBox-root.css-1t9pz9x.iconify.iconify--eva')}
  get garageIcon() { return cy.contains(' Garage: ')}
  get bathroomIcon() { return cy.contains('Bathrooms')}
  get propertyName() { return  cy.get('.MuiGrid-root.MuiGrid-item h3')}
  get priceRange() { return cy.visit('https://dev.delekhomes.com/featured-listings?price=1000000-2000000&city=Pasadena');}
  get firstInfoBtn() { return cy.get('[class="MuiBox-root css-xi606m"]').eq(0)}
  get searchInput() { return cy.get('[type="text"]').eq(0)}
  get startSearchField() { return cy.get('.MuiBox-root.css-1t9pz9x.iconify.iconify--eva')}
  get bedroomsDropdown() { return cy.get('[role="button"]').eq(0)}
  get bedroomsInput() { return cy.get('[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-vyg8zi"]').eq(1)}
  get cityInput() { return cy.get('[type="text"]').eq(1)}
}

export default new FeaturedListingPage();
