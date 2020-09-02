const SearchPage = require('../pageobjects/search.page');
const FlightsResultPage = require('../pageobjects/flightsResult.page');
const BookFlightPage = require('../pageobjects/bookFlight.page');
const {params, passengerInfo} = require('../data/bookingParams');

describe('My booking application', () => {
    
    before(()=> {
        browser.deleteCookies();
        browser.url('https://www.kiwi.com/');
    })

    beforeEach(()=> {
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

    it('should navigate through filters', () => {
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        browser.fullscreenWindow();
        browser.setTimeout({'pageLoad': 10000});
        browser.pause(10000);
        expect(FlightsResultPage.getResultList()).toBeDisplayed();
        FlightsResultPage.uncheckFilters();
        browser.pause(5000);
        expect(FlightsResultPage.getNoResultContainer()).toBeDisplayed();
        browser.setTimeout({'implicit': 5000});
        FlightsResultPage.selectTrainFilter();
        //browser.setTimeout({'implicit': 5000});
        browser.pause(5000);
        expect(FlightsResultPage.getResultList()).toBeDisplayed();
    });

    it('should book a flight', () => {
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
        browser.fullscreenWindow();
        browser.setTimeout({'pageLoad': 10000});
        FlightsResultPage.bookBtnClick();
        browser.pause(10000);
        BookFlightPage.setPassengerValues(passengerInfo.email, passengerInfo.phone, passengerInfo.name, 
                                          passengerInfo.surname,passengerInfo.birthDay, passengerInfo.birthYear, 
                                          passengerInfo.passport, passengerInfo.expirationDay, passengerInfo.expirationYear);
        BookFlightPage.getContinueBtn().click();
        browser.pause(10000);
        expect(BookFlightPage.getTicketFareRef()).toHaveAttribute('aria-disabled','false');
    });

});


