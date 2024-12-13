import homePage from "../../page_object/home.page";
import featuredListingPage from "../../page_object/featured.listing.page";

describe('Search Listing Page', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    
    cy.visit('/');
    homePage.nightModeOn.click();
    homePage.featureListingBtn.click();
    featuredListingPage.firstInfoBtn.should('have.text', 'More Info');
  });

  it('Should search by keyword, T93', () => {
    homePage.featureListingBtn.click();
    featuredListingPage.searchInput.eq(0).type('Pasadena');
    featuredListingPage.startSearch.click();

    featuredListingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  });

  it('Should search by bedroom, T94', () => {
    homePage.featureListingBtn.click();
    featuredListingPage.bedroomsDropdown.eq(0).click();
    featuredListingPage.bedroomsInput.click();
    featuredListingPage.startSearch.click();

    featuredListingPage.bedroomIcon.should('not.have.text', '0,1');
  });

  it('Should search by city, T95', () => {
    homePage.featureListingBtn.click();
    featuredListingPage.cityInput.eq(0).type('Pasadena');
    featuredListingPage.startSearch.click();

    featuredListingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  }); 

  it('Should search by price, T96', () => {
    homePage.featureListingBtn.click();
    featuredListingPage.priceRange;

  }); 
});
