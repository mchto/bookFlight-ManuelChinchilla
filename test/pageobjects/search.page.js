const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page{
    /**
     * define selectors using getter methods
     */
    //interacción con los pasajeros
    get passengersBtn () { return $('//div[@data-test="PassengersField"]//button[@type="button"]')}
    get adultSumBtn () { return $('//div[@data-test="PassengersRow-adults"]//button[@aria-label="increment"]')}
    get passengersConfirmBtn () { return $('[data-test=PassengersFieldFooter-done]')}
    //interacción con las ciudades a buscar
    get inputDeparture () { return $('[data-test=SearchPlaceField-origin]').$('[data-test=SearchField-input]') }
    get inputReturn () { return $('[data-test=SearchPlaceField-destination]').$('[data-test=SearchField-input]') }
    get airportDepartureResult () { return $('[data-test=PlacepickerModalOpened-origin]').$('[data-test=PlacePickerRow-station]')};
    get airportReturnResult () { return $('[data-test=PlacepickerModalOpened-destination]').$('//div[@class="PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo"]')};
    get defaultCitySelected () { return $('[data-test=PlacepickerModalOpened-origin]').$('[data-test=PlacePickerRow-city]')}
    //interacción con las fechas
    get inputDepartureDate () { return $('[name=search-outboundDate]') }
    get inputReturnDate () { return $('[name=search-inboundDate]') }
    get departureDate () { return $('//div[@data-value="2020-09-15"]') }
    get returnDate () { return $('//div[@data-value="2020-09-30"]')}
    get setDateBtn () { return $('[data-test=SearchFormDoneButton]')}
    //boton de buscar
    get searchBtn () { return $('[data-test=LandingSearchButton]') }
    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    clearDeparture (){
        this.inputDeparture.click();
        browser.pause(3000);
        this.defaultCitySelected.click();
    }

    selectCities(departure, _return){
        this.inputDeparture.setValue(departure);
        this.airportDepartureResult.click();
        //selecciono destino
        this.inputReturn.setValue(_return);
        browser.pause(3000);
        this.airportReturnResult.click();
    }

    selectPassengers(){
        this.passengersBtn.click();
        this.adultSumBtn.click();
        this.passengersConfirmBtn.click();
    }

    selectDates(){
        this.inputDepartureDate.click();
        browser.pause(2000);
        this.departureDate.click();
        this.setDateBtn.click();
        browser.pause(2000);
        this.inputReturnDate.click();
        this.returnDate.click();
        this.setDateBtn.click();
    }

    getExploreBtn(){
        return this.searchBtn.click();
    }

}

module.exports = new SearchPage();