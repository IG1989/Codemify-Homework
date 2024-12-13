import homePage from "../../page_object/home.page";
import featuredListingPage from "../../page_object/featured.listing.page";

describe('Search Home Page', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    
    cy.visit('/');
    homePage.nightModeOn.click();
  });

  it('Should search by keyword, T89', () => {
    homePage.searchInput.eq(0).type('Pasadena');
    homePage.startSearch.click();

    featuredListingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  });

  it('Should search by bedrooms, T90', () => {
    homePage.bedroomsDropdown.eq(0).click();
    homePage.bedroomsInput.click();
    homePage.startSearch.click();

    featuredListingPage.bedroomIcon.should('not.have.text', '0,1');
  });
  
  it('Should search by city, T91', () => {
    homePage.cityInput.eq(1).type('Pasadena');
    homePage.startSearch.click();

    featuredListingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  }); 

  it('Should search by price, T92', () => {
    featuredListingPage.priceRange;

  }); 
});
