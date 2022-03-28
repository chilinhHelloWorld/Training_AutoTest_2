/// <reference types="cypress" />
require('cypress-xpath')
import LoginPageCreateTag from '../../support/PageObject/CreateAccountForm/CreateAccountForm'
import HomePage from '../../support/PageObject/HomePage/HomePage'

describe('Testing UI Sigin', ()=> {
  var createAcc = new LoginPageCreateTag();
  var home = new HomePage();
  var messageData;
  var datapathMessage= '/MessageError';
  var newAccountData;
  var datapathAccount = '/CreateAccount';
  before(function () {
    cy.fixture(datapathMessage).then(function (messageJsonFile) {
        messageData = messageJsonFile;
    })
    cy.fixture(datapathAccount).then(function (accoutJsonFile) {
      newAccountData = accoutJsonFile;
  })
  })
  beforeEach(()=>{
    cy.visit('/')
    home.getSiginButton().click();
  })

  it('TC_Login_004_Check message warning when creating an already existing interval', () => {
    var message = messageData[0];
    var account = newAccountData[1];
    createAcc.getEmailInputCreate().type(account.accountExsit);
    createAcc.getRegisterButton().click();
    createAcc.getErrorMessage().should('contain.text', message.errorAccountExist);
  })
  it('TC_Login_005_Check messagewarning when entered invalid email', () => {
    var message = messageData[0];
    var account = newAccountData[1];
    createAcc.getEmailInputCreate().type(account.accountInvalid);
    createAcc.getRegisterButton().click();
    cy.wait(2000);
    createAcc.getErrorMessage().should('contain.text', message.errorEmailValid);
  })
  it('TC_Login_006_Check message warning when entered valid email ', () => {
    var account = newAccountData[1];
    createAcc.getEmailInputCreate().type(account.accountValid);
    createAcc.getRegisterButton().click();
    cy.wait(2000);
    cy.url().should('contain', '#account-creation')
  })
})