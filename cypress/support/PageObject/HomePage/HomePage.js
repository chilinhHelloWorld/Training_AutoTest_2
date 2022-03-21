require('cypress-xpath')

class HomePage{
    // get button sigin on homepage go to sigin page
    getSiginButton () {
        return cy.xpath('//div[@class="header_user_info"]/a');
    }
}
export default HomePage;