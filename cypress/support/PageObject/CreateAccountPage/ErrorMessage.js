require('cypress-xpath')

class ErrorMessage {

    getErrorTitle () {
        return cy.xpath('//div[@class="alert alert-danger"]/p');
    }

    getErrorNumberOne () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[01]')
    }

    getErrorNumberTwo () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[02]')
    }

    getErrorNumberThree () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[03]')
    }

    getErrorNumberFour () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[04]')
    }

    getErrorNumberFive () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[05]')
    }

    getErrorNumberSix () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[06]')
    }

    getErrorNumberSeven () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[07]')
    }

    getErrorNumberEight () {
        return cy.xpath('//div[@class="alert alert-danger"]/ol/li[08]')
    }
}
export default ErrorMessage;