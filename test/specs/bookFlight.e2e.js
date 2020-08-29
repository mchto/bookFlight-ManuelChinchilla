const SearchPage = require('../pageobjects/search.page');
const FlightsResultPage = require('../pageobjects/flightsResult.page');
const params = require('../data/bookingParams');

describe('My booking application', () => {
    
    before(()=> {
        browser.url('https://www.kiwi.com/');
        browser.fullscreenWindow();
    })

    it('should explore flights', () => {
        browser.setTimeout({'pageLoad': 10000});
        SearchPage.clearDeparture();
        SearchPage.selectCities(params.origen, params.destino);
        SearchPage.selectPassengers();
        SearchPage.selectDates();
        SearchPage.getExploreBtn();
        browser.setTimeout({'implicit': 5000});
        expect(browser).toHaveUrlContaining('berlin-tegel-berlin-germany/london');
        browser.setTimeout({'implicit': 5000});
        expect(FlightsResultPage.getResultList().isDisplayed());
    });

    it('should choose train trips', () => {
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');

    });
});


