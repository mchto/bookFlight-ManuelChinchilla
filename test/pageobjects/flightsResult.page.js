const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class flightsResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    //get resultsContainer () { return $('(//div[@data-test="ResultCardWrapper"])[1]') }
    get resultsContainer () { return $('//div[@data-test="ResultList"]')}
    get flightFilter () { return $('[data-test=TransportOptionCheckbox-aircraft]')}
    get busFilter() { return $('[data-test=TransportOptionCheckbox-bus]')}
    get trainFilter() { return $('[data-test=TransportOptionCheckbox-train]')}
    get noResultsContainer () { return $('//div[@class="NoResultsstyled__NoResultsFiltersWrapper-sc-9bkg22-5 iqJlfI"]')}
    get bookBtn () { return $('[data-test=BookingButton]')}

    getResultList (){
        return this.resultsContainer;
    }

    uncheckFilters (){
        browser.execute("arguments[0].click()",this.flightFilter);
        browser.pause(3000);
        browser.execute("arguments[0].click()",this.trainFilter);
    }

    getNoResultContainer (){
        return this.noResultsContainer;
    }

    selectTrainFilter (){
        this.flightFilter.scrollIntoView();
        browser.execute("arguments[0].click()",this.trainFilter);
        browser.pause(10000);
    }

    bookBtnClick(){
        return this.bookBtn.click();
    }

}

module.exports = new flightsResultPage();
