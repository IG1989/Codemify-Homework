import homePage from "../../page_object/home.page"
import listingPage from "../../page_object/listing.page"

describe('Search Home Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    homePage.nightMode.click();
  })

  it('Should search by keyword ', () => {

    homePage.searchInput.first().type('Modern Family House in Pasadena');
    homePage.startSearch.click();
    listingPage.listingTitle.should('have.text', 'Modern Family House in Pasadena');
  })
  it('Should search by bedrooms ', () => {

    homePage.bedroomButton.first().click();
    homePage.twoBedrooms.click();
    homePage.startSearch.click();

    const randomIndex = Math.floor(Math.random() * 6);
    listingPage.moreInfoButton.eq(randomIndex).click();
    listingPage.bedroomIcon.should('not.have.text', '0,1');

  })
  it('Should search by city ', () => {

    homePage.cityInput.eq(1).type('Pasadena');
    homePage.startSearch.click();
    listingPage.moreInfoButton.click();

    listingPage.propertyName.should('have.text', 'Modern Family House in Pasadena')
  })

  it('Should search by price ', () => {
    listingPage.priceRange;
  })
})