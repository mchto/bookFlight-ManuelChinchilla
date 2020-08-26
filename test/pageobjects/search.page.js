//const Page = require('./page');
const Util = require('../utilitarios/searchesUtil');
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
    get inputOrigen () { return $('[data-test=SearchPlaceField-origin]').$('[data-test=SearchField-input]') }
    get inputDestino () { return $('[data-test=SearchPlaceField-destination]').$('[data-test=SearchField-input]') }
    get airportSalidaResult () { return $('[data-test=PlacepickerModalOpened-origin]').$('[data-test=PlacePickerRow-station]')};
    get airportRegresoResult () { return $('[data-test=PlacepickerModalOpened-destination]').$('//div[@class="PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo"]')};
    get defaultCitySelected () { return $('[data-test=PlacepickerModalOpened-origin]').$('[data-test=PlacePickerRow-city]')}
    //interacción con las fechas
    get inputSalida () { return $('[data-navigation=DepartureRangeHeading]').$('[data-test=DateValue]') }
    get inputRegreso () { return $('[data-test=ReturnRangeHeading]').$('[data-test=DateValue]') }
    get fechaSalida () { return $('[data-test=CalendarDay-departureRange]').$('[data-value=2020-11-09]')}
    get fechaRegreso () { return $('[data-test=CalendarDay-returnRange]').$('[data-value=2020-11-14]')}
    get btnEstablecerFechas () { return $('[data-test=SearchFormDoneButton]')}
    //boton de buscar
    get btnExplorar () { return $('[data-test=LandingSearchButton]') }
    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    limpiar (){
        this.inputOrigen.click();
        browser.pause(3000);
        this.defaultCitySelected.click();
    }

     explorar (origen, destino) {
        //Util.selectCities(origen, destino);
        this.inputOrigen.setValue(origen);
        this.airportSalidaResult.click();
        //selecciono destino
        this.inputDestino.setValue(destino);
        browser.pause(3000);
        this.airportRegresoResult.click();

        //selecciono cantidad de pasajeros
        //Util.selectPassengers();
        this.passengersBtn.click();
        this.adultSumBtn.click();
        this.passengersConfirmBtn.click();
        browser.pause(10000);
        //seleccionar las fechas
        //Util.selectDates();
        this.inputSalida.click();
        this.fechaSalida.click();
        this.inputRegreso.click();
        this.fechaRegreso.click();
        this.btnEstablecerFechas.click();
        //realizar la búsqueda
        this.btnExplorar.click();
    }

}

module.exports = new SearchPage();
