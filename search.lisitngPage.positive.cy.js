

describe('Search Listing Page', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit('/');
      cy.get('[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click();
    });
  
    it('Should search by keyword, T93', () => {
      cy.get('[href="/featured-listings"]').click();
      cy.get('[type="text"]').first().type('Pasadena');
      cy.get('[type="button"]').first().click();
  
      cy.contains('$ 1,200,000');
      cy.contains('251 S Orange Grove Blvd #2, Pasadena,');
    });

    it('Should search by bedroom, T94', () => {
      cy.get('[href="/featured-listings"]').click();
      cy.get('[role="button"]').eq(0).click();
      cy.get('[data-value="2"]').click();
      cy.contains('Start Search').click();

      cy.get('[viewBox="0 0 2048 1280"]').eq(0).should('not.have.text', '0,1');
    });

    it('Should search by city, T95', () => {
      cy.get('[href="/featured-listings"]').click();
      cy.get('input[type="text"]').eq(1).type('Pasadena');
      cy.get('[type="button"]').first().click();

      cy.contains('$ 1,200,000');
      cy.contains('251 S Orange Grove Blvd #2, Pasadena,');
    }); 

    it.only('Should search by price, T96', () => {
      cy.get('[href="/featured-listings"]').click();
      cy.visit('https://dev.delekhomes.com/featured-listings?price=1000000-2000000');
      cy.get('.MuiPaper-rounded div:contains($)').each((priceElement) => {
      const price = priceElement.text().replace(/\D/g,'');
      expect(parseInt(price)).to.be.above(999999);
      expect(parseInt(price)).to.be.below(2000000);

    }); 
  });
});
