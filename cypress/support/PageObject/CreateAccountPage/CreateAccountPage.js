require('cypress-xpath')

class CreatePage {

    getFirstNameInput () {
        return cy.xpath('//input[@id="customer_firstname"]');
    }

    getLastNameInput () {
        return cy.xpath('//input[@id="customer_lastname"]');
    }

    getEmailInput () {
        return cy.xpath('//input[@id="email"]');
    }

    getPasswordInput () {
        return cy.xpath('//input[@id="passwd"]');
    }

    getCompanyInput () {
        return cy.xpath('//input[@id="company"]')
    }

    getAddress1Input () {
        return cy.xpath('//input[@id="address1"]')
    }

    getCityInput () {
        return cy.xpath('//input[@id="city"]');
    }

    getPostcodeInput () {
        return cy.xpath('//input[@id="postcode"]');
    }

    getCountrySelect () {
        return cy.xpath('//select[@id="id_country"]');
    }

    getOtherTextArea () {
        return cy.xpath('//textarea[@id="other"]');
    }

    getPhoneInput () {
        return cy.xpath('//input[@id="phone"]');
    }

    getPhoneMobileInput () {
        return cy.xpath('//input[@id="phone_mobile"]');
    }

    getAliasInput () {
        return cy.xpath('//input[@id="alias"]');
    }

    getSubmitButton () {
        return cy.xpath('//button[@id="submitAccount"]');
    }
}
export default CreatePage;