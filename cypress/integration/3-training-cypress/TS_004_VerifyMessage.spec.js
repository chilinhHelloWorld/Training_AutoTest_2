/// <reference types="cypress" />
require('cypress-xpath')
import CreatePage from '../../support/PageObject/CreateAccountPage/CreateAccountPage'
import LoginPageCreateTag from '../../support/PageObject/CreateAccountForm/CreateAccountForm'
import HomePage from '../../support/PageObject/HomePage/HomePage'
import ErrorMessage from '../../support/PageObject/CreateAccountPage/ErrorMessage'

describe('Check Message Warning', ()=> {
  var create = new LoginPageCreateTag();
  var home = new HomePage();
  var createPage = new CreatePage ();
  var error = new ErrorMessage();
  var newAccountData;
  var datapathAccount = '/CreateAccount';
  var messageData;
  var datapathMessage= '/MessageError';
//   var testSort;
//   var datapathSort = '/sort'
  before(function () {
    cy.fixture(datapathAccount).then(function (accoutJsonFile) {
        newAccountData = accoutJsonFile;
    })
    cy.fixture(datapathMessage).then(function (messageJsonFile) {
        messageData = messageJsonFile;
    })
  })
  beforeEach(()=>{
    cy.visit('http://automationpractice.com/index.php')
    home.getSiginButton().click();
    create.getEmailInputCreate().type('nguyenchilinhfanpage7@gmail.com');
    create.getRegisterButton().click();
  })

  it.only('TC_006_Check Message Warning Not Have Input', () => {
    var message = messageData[0];
    cy.wait(8000);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().should('contain.text', 'There are 8 errors');
    error.getErrorNumberOne().should('contain.text', message.error1);
    error.getErrorNumberTwo().contains(message.error2).should('be.visible');
    error.getErrorNumberThree().contains(message.error3).should('be.visible');
    error.getErrorNumberFour().contains(message.error4).should('be.visible');
    error.getErrorNumberFive().contains(message.error5).should('be.visible');
    error.getErrorNumberSix().contains(message.error6).should('be.visible');
    error.getErrorNumberSeven().contains(message.error7).should('be.visible');
    error.getErrorNumberEight().contains(message.error8).should('be.visible');
  })
  it("TC_007_Check Message Warning Have'FirstName'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 7 errors').should('be.visible');
    error.getErrorNumberOne().contains(message.error1).should('be.visible');
    error.getErrorNumberTwo().contains(message.error2).should('be.visible');
    error.getErrorNumberThree().contains(message.error4).should('be.visible');
    error.getErrorNumberFour().contains(message.error5).should('be.visible');
    error.getErrorNumberFive().contains(message.error6).should('be.visible');
    error.getErrorNumberSix().contains(message.error7).should('be.visible');
    error.getErrorNumberSeven().contains(message.error8).should('be.visible');
  })
  it("TC_008_Check Message Warning Have'FirstName','LastName'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getLastNameInput().type(account.lastName);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 6 errors').should('be.visible');
    error.getErrorNumberOne().contains(message.error1).should('be.visible');
    error.getErrorNumberTwo().contains(message.error4).should('be.visible');
    error.getErrorNumberThree().contains(message.error5).should('be.visible');
    error.getErrorNumberFour().contains(message.error6).should('be.visible');
    error.getErrorNumberFive().contains(message.error7).should('be.visible');
    error.getErrorNumberSix().contains(message.error8).should('be.visible');
  })
  it("TC_009_Check Message Warning Have'FirstName','LastName','Password'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getLastNameInput().type(account.lastName);
    createPage.getPasswordInput().type(account.password);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 5 errors').should('be.visible');
    error.getErrorNumberOne().contains(message.error1).should('be.visible');
    error.getErrorNumberTwo().contains(message.error5).should('be.visible');
    error.getErrorNumberThree().contains(message.error6).should('be.visible');
    error.getErrorNumberFour().contains(message.error7).should('be.visible');
    error.getErrorNumberFive().contains(message.error8).should('be.visible');
  })
  it("TC_010_Check Message Warning Have'FirstName','LastName','Password','MobilePhone'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getLastNameInput().type(account.lastName);
    createPage.getPasswordInput().type(account.password);
    createPage.getPhoneMobileInput().type(account.phoneMobile);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 4 errors').should('be.visible');
    error.getErrorNumberOne().contains(message.error5).should('be.visible');
    error.getErrorNumberTwo().contains(message.error6).should('be.visible');
    error.getErrorNumberThree().contains(message.error7).should('be.visible');
    error.getErrorNumberFour().contains(message.error8).should('be.visible');
  })
  it("TC_011_Check Message Warning Have'FirstName','LastName','Password','MobilePhone', 'Address'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getLastNameInput().type(account.lastName);
    createPage.getPasswordInput().type(account.password);
    createPage.getPhoneMobileInput().type(account.phoneMobile);
    createPage.getAddress1Input().type(account.address1);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 3 errors').should('be.visible');
    error.getErrorNumberOne().contains(message.error6).should('be.visible');
    error.getErrorNumberTwo().contains(message.error7).should('be.visible');
    error.getErrorNumberThree().contains(message.error8).should('be.visible');
  })
  it("TC_012_Check Message Warning Have'FirstName','LastName','Password','MobilePhone','Address','City'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getLastNameInput().type(account.lastName);
    createPage.getPasswordInput().type(account.password);
    createPage.getPhoneMobileInput().type(account.phoneMobile);
    createPage.getAddress1Input().type(account.address1);
    createPage.getCityInput().type(account.city);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 2 errors').should('be.visible');
    error.getErrorNumberOne().contains(message.error7).should('be.visible');
    error.getErrorNumberTwo().contains(message.error8).should('be.visible');
  })
  it("TC_013_Check Message Warning Have'FirstName','LastName','Password','MobilePhone','Address','City','Zip Code'", () => {
    var message = messageData[0];
    var account = newAccountData[0];
    cy.wait(8000);
    createPage.getFirstNameInput().type(account.firstName);
    createPage.getLastNameInput().type(account.lastName);
    createPage.getPasswordInput().type(account.password);
    createPage.getPhoneMobileInput().type(account.phoneMobile);
    createPage.getAddress1Input().type(account.address1);
    createPage.getCityInput().type(account.city);
    createPage.getPostcodeInput().type(account.postCode);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There is 1 error').should('be.visible');
    error.getErrorNumberOne().contains(message.error8).should('be.visible');
  })
})