import homePage from "../../page_object/home.page";
import listingPage from "../../page_object/listing.page";

describe('Search Listing Page', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/');
    homePage.nightModeOn.click();
    homePage.featureListingBtn.click();
    listingPage.firstInfoBtn.should('have.text', 'More Info');
  });

  it('Should search by keyword, T93', () => {
    homePage.featureListingBtn.click();
    listingPage.searchInput.eq(0).type('Pasadena');
    listingPage.startSearch.click();

    listingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  });

  it('Should search by bedroom, T94', () => {
    homePage.featureListingBtn.click();
    listingPage.bedroomsDropdown.eq(0).click();
    listingPage.bedroomsInput.click();
    listingPage.startSearch.click();

    listingPage.bedroomIcon.should('not.have.text', '0,1');
  });

  it('Should search by city, T95', () => {
    homePage.featureListingBtn.click();
    listingPage.cityInput.eq(0).type('Pasadena');
    listingPage.startSearch.click();

    listingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  }); 

  it('Should search by price, T96', () => {
    homePage.featureListingBtn.click();
    listingPage.priceRange;

  }); 
});
