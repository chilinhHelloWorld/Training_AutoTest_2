/// <reference types="cypress" />
require('cypress-xpath')
import CreatePage from '../../support/PageObject/CreateAccountPage/CreateAccountPage'
import LoginPageCreateTag from '../../support/PageObject/CreateAccountForm/CreateAccountForm'
import HomePage from '../../support/PageObject/HomePage/HomePage'

describe('Testing UI Sigin', ()=> {
  var create = new LoginPageCreateTag();
  var home = new HomePage();
  var createPage = new CreatePage ()
  beforeEach(()=>{
    cy.visit('http://automationpractice.com/index.php')
    home.getSiginButton().click();
    create.getEmailInputCreate().type('nguyenchilinhfanpage7@gmail.com');
    create.getRegisterButton().click();
  })

  it('TC_004_CheckAvailabilityAllObjectivesCreatePage', () => {
    createPage.getFirstNameInput().should('be.visible');
    createPage.getLastNameInput().should('be.visible');
    createPage.getEmailInput().should('be.visible');
    createPage.getPasswordInput().should('be.visible');
    createPage.getCompanyInput().should('be.visible');
    createPage.getAddress1Input().should('be.visible');
    createPage.getCityInput().should('be.visible');
    createPage.getPostcodeInput().should('be.visible');
    createPage.getCountrySelect().should('be.enabled');
    createPage.getOtherTextArea().should('be.visible');
    createPage.getPhoneInput().should('be.visible');
    createPage.getPhoneMobileInput().should('be.visible');
    createPage.getAliasInput().should('be.visible');
    createPage.getSubmitButton().should('be.visible');
  })
  it('TC_005_CheckEnableButtonRegister', () => {
    createPage.getSubmitButton().should('be.enabled');
  })
})