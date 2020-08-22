const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputOrigen () { return $('[data-test=SearchPlaceField-origin]').$('[data-test=SearchField-input]') }
    get inputDestino () { return $('[data-test=SearchPlaceField-destination]').$('[data-test=SearchField-input]') }
    get inputSalida () { return $('//div[@class="Inputsstyled__Value-hexk8g-3 llFeJD"]')[0] }
    get inputRegreso () { return $('//div[@class="Stack__StyledStack-sc-1t576ow-0 gPGFFN"]').$('[data-test=DateValue')[1] }
    get btnExplorar () { return $('[data-test=LandingSearchButton]') }
    get airportSalidaResult () { return $('[data-test=PlacepickerModalOpened-origin]').$('[data-test=PlacePickerRow-station]')};
    get airportRegresoResult () { return $('[data-test=PlacepickerModalOpened-destination]').$('//div[@class="PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo"]')};
    get btnFechas () { return $('[data-test=SearchFormDoneButton]')}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     explorar (origen, destino, salida, regreso) {
        this.inputOrigen.setValue(origen);
        this.airportSalidaResult.click();
        browser.setTimeout({'implicit': 15000});
        this.inputDestino.setValue(destino);
        
        this.airportRegresoResult.click();
        /*this.inputSalida.setValue(salida);
        this.inputRegreso.setValue(regreso);
        this.btnFechas.click();
        this.btnExplorar.click(); */
    }

}

module.exports = new SearchPage();
