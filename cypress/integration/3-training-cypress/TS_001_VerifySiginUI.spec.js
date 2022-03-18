/// <reference types="cypress" />
require('cypress-xpath')
import LoginPageTagSigin from '../../support/PageObject/LoginForm/LoginForm'
import LoginPageCreateTag from '../../support/PageObject/CreateAccountForm/CreateAccountForm'
import HomePage from '../../support/PageObject/HomePage/HomePage'

describe('Testing UI Sigin', ()=> {
  var sigin = new LoginPageTagSigin();
  var create = new LoginPageCreateTag();
  var home = new HomePage();
  beforeEach(()=>{
    cy.visit('http://automationpractice.com/index.php')
    home.getSiginButton().click();
  })

  it('TC_001_CheckAvailabilityAllObjectivesLoginTag', () => {
    sigin.getPasswordInput().should("be.visible");
    sigin.getPasswordInput().should("be.visible");
    sigin.getSiginButton().should("be.visible");
  })
  it('TC_002_CheckAvailabilityAllObjectivesCreateAnAccountTag', () => {
    create.getEmailInputCreate().should("be.visible");
    create.getRegisterButton().should("be.visible");
  })
  it('TC_003_CheckEnableButton', () => {
    sigin.getSiginButton().should("be.enabled");
    create.getRegisterButton().should("be.enabled");
  })
})