const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class flightsResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultsContainer () { return $('[data-test=ResultList-results]') }

    getResultList (){
        return this.resultsContainer;
    }
}

module.exports = new flightsResultPage();
