require('cypress-xpath')

class HomePage{
    getSiginButton () {
        return cy.xpath('//div[@class="header_user_info"]/a');
    }
}
export default HomePage;