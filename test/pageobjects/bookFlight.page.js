class BookFlightPage {

    get emailInput () { return $('[name=email]')}
    get phoneInput () { return $('[name=phone]')}
    get nameInput () { return $('[name=firstname]')}
    get surnameInput () { return $('[name=lastname]')}
    get nationalityOption () { return $('[name=nationality]').$('[value=us]')}
    get genderOption () { return $('[name=title]').$('[value=mr]')}
    get birthMonthOption () { return $('[name=birthMonth]').$('//option[@value="01"]')}
    get birthDayInput () { return $('[name=birthDay]')}
    get birthYearInput () { return $('[name=birthYear]')}
    get passportInput () { return $('[name=idNumber]')}
    get expirationMonthOption () { return $('[name=idExpirationMonth]')}
    get expirationDay () { return $('[name=idExpirationDay]')}
    get expirationYear () { return $('[name=idExpirationYear]')}
    get continueBtn () { return $('[data-test=StepControls-passengers-next]')}
    get ticketFareRef () { return $('span*=2. ')}

    setPassengerValues (email, phone, name, surname, birthDay, birthYear, passport, expirationDay, expirationYear){
        this.emailInput.scrollIntoView();
        this.emailInput.setValue(email);
        this.phoneInput.setValue(phone);
        this.nameInput.setValue(name);
        this.surnameInput.setValue(surname);
        this.selectNationality();
        this.selectGender();
        this.selectBirthMonth();
        this.birthDayInput.setValue(birthDay);
        this.birthYearInput.setValue(birthYear);
        this.passportInput.scrollIntoView();
        this.passportInput.setValue(passport);
        this.expirationMonthOption.scrollIntoView();
        this.selectExpirationMonth();
        this.expirationDay.setValue(expirationDay);
        this.expirationYear.setValue(expirationYear);
    }

    selectNationality (){
        return this.nationalityOption.click();
    }

    selectGender (){
        return this.genderOption.click();
    }

    selectBirthMonth (){
        return this.birthMonthOption.click();
    }

    selectExpirationMonth(){
        return this.expirationMonthOption.selectByIndex(1);
    }

    getTicketFareRef() {
         return this.ticketFareRef;
    }

    getContinueBtn() {
        return this.continueBtn;
    }

}

module.exports = new BookFlightPage();