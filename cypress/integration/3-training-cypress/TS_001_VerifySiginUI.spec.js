/// <reference types="cypress" />
require('cypress-xpath')
import LoginPageTagSigin from '../../support/PageObject/LoginForm/LoginForm'
import LoginPageCreateTag from '../../support/PageObject/CreateAccountForm/CreateAccountForm'
import HomePage from '../../support/PageObject/HomePage/HomePage'

describe('Testing UI Sigin', ()=> {
  var sigin = new LoginPageTagSigin();
  var createAcc = new LoginPageCreateTag();
  var home = new HomePage();
  beforeEach(()=>{
    cy.visit('/')
    home.getSiginButton().click();
  })

  it('TC_Login_001_Check Availability All Objectives Login Tag', () => {
    sigin.getPasswordInput().should("be.visible");
    sigin.getPasswordInput().should("be.visible");
    sigin.getSiginButton().should("be.visible");
  })
  it('TC_Login_002_Check Availability AllObjectives Create An Account Tag', () => {
    createAcc.getEmailInputCreate().should("be.visible");
    createAcc.getRegisterButton().should("be.visible");
  })
  it('TC_Login_003_Check Enable Button', () => {
    sigin.getSiginButton().should("be.enabled");
    createAcc.getRegisterButton().should("be.enabled");
  })
})


