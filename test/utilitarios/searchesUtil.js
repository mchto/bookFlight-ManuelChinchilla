const SearchPage = require('../pageobjects/search.page');
const Page = require('../pageobjects/page');

class SearchesUtil extends Page{

    selectCities(origen, destino){
        //selecciono origen
        SearchPage.inputOrigen.setValue(origen);
        
        SearchPage.airportSalidaResult.click();
        //selecciono destino
        SearchPage.inputDestino.setValue(destino);
        browser.pause(3000);
        SearchPage.airportRegresoResult.click();
    }

    selectPassengers(){
        SearchPage.passengersBtn.click();
        SearchPage.adultSumBtn.click();
        SearchPage.passengersConfirmBtn.click();
    }

    selectDates(){
        SearchPage.inputSalida.click();
        SearchPage.fechaSalida.click();
        SearchPage.inputRegreso.click();
        SearchPage.fechaRegreso.click();
        SearchPage.btnEstablecerFechas.click();

    }

}

module.exports = new SearchesUtil();