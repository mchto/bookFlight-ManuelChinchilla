const SearchPage = require('..\pageobjects/search.page');

describe('My booking application', () => {
    
    before(()=> {
        browser.url('https://www.kiwi.com/');
    })

    it('should explore flights', () => {
        SearchPage.limpiarOrigen();
        
        
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


