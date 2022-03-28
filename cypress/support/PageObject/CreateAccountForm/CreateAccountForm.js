require('cypress-xpath')

class LoginPageCreateTag {
    // get input Email on form create
    getEmailInputCreate() {
        return cy.xpath('//form[@id="create-account_form"]/div/div//input[@data-validate="isEmail"]');
    }
    // get button register on form create
    getRegisterButton() {
        return cy.xpath('//button[@id="SubmitCreate"]');
    }
    getErrorMessage() {
        return cy.xpath('//div[@id="create_account_error"]//ol//li');
    }
}
export default LoginPageCreateTag;