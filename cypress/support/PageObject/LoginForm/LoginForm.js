require('cypress-xpath')

class LoginPageTagSigin {
    // get input email on form sigin
    getEmailInput() {
        return cy.xpath('//form[@id="login_form"]/div/div//input[@data-validate="isEmail"]');
    }
    // get input password on form sigin
    getPasswordInput() {
        return cy.xpath('//form[@id="login_form"]/div/div//input[@data-validate="isPasswd"]');
    }
    // get button sigin on form sigin
    getSiginButton() {
        return cy.xpath('//button[@id="SubmitLogin"]');
    }
}
export default LoginPageTagSigin;
