import homePage from "../../page_object/home.page"
import listingPage from "../../page_object/listing.page"

describe('Search Listing Page', () => {
  beforeEach(() => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    homePage.nightMode.click();
    homePage.featureListingButton.click();
    listingPage.firstInfoButton.should('have.text', 'More Info');
  })

  it('Should search by keyword', () => {
    listingPage.searchInput.type('Pasadena');
    listingPage.startSearch.click();
    listingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena')
  })

  it('Should search by bedrooms', () => {
    listingPage.bedroonButton.click();
    listingPage.twoBedrooms.click();
    listingPage.startSearch.click();

    const randomIndex = Math.floor(Math.random() * 6);
    listingPage.moreInfoButton.eq(randomIndex).click();
    listingPage.bedroomIcon.should('not.have.text', '0,1');
  })

  it('Should search by city ', () => {
    listingPage.cityInput.type('Pasadena');
    listingPage.startSearch.click();
    listingPage.moreInfoButton.should('have.text', 'More Info').click();
    listingPage.propertyName.should('have.text', 'Modern Family House in Pasadena')
  })

  it('Should search by price ', () => {
    listingPage.priceRange;
  })
})