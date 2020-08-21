const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputOrigen () { return $('[data-test=SearchPlaceField-origin]') }
    get inputDestino () { return $('[data-test=SearchPlaceField-destination]') }
    get inputSalida () { return $('//div[@class="Stack__StyledStack-sc-1t576ow-0 gPGFFN"]').$('[data-test=DateValue')[0] }
    get inputRegreso () { return $('//div[@class="Stack__StyledStack-sc-1t576ow-0 gPGFFN"]').$('[data-test=DateValue')[1] }
    get btnExplorar () { return $('[data-test=LandingSearchButton]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
     limpiarOrigen () {
        inputOrigen.clearValue();
     }

     explorar (origen, destino, salida, regreso) {
        this.inputOrigen.setValue(origen);
        this.inputDestino.setValue(destino);
        this.inputSalida.setValue(salida);
        this.inputRegreso.setValue(regreso);
        this.btnExplorar.click(); 
    }

}

module.exports = new SearchPage();
