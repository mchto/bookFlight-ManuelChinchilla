const SearchPage = require('../pageobjects/search.page');
const FlightsResultPage = require('../pageobjects/flightsResult.page');
const params = require('../data/bookingParams');

describe('My booking application', () => {
    
    before(()=> {
        browser.url('https://www.kiwi.com/es/');
    })

    it('should explore flights', () => {
        browser.setTimeout({'pageLoad': 10000});
        SearchPage.explorar(params.origen, params.destino, params.salida, params.regreso);
        browser.setTimeout({'implicit': 10000});
        expect(browser).toHaveUrlContaining('berlin-tegel-berlin-alemania/londres');
       // expect(FlightsResultPage.getResultList().toBeDisplayed());
    });
});


