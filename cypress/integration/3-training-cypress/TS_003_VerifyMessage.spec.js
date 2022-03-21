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
  beforeEach(()=>{
    cy.visit('http://automationpractice.com/index.php')
    home.getSiginButton().click();
    create.getEmailInputCreate().type('nguyenchilinhfanpage7@gmail.com');
    create.getRegisterButton().click();
  })

  it('TC_006_CheckMessageWarningNotHaveInput', () => {
    cy.wait(8000);
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 8 errors').should('be.visible');
    error.getErrorNumberOne().contains('You must register at least one phone number.').should('be.visible');
    error.getErrorNumberTwo().contains('lastname is required.').should('be.visible');
    error.getErrorNumberThree().contains('firstname is required.').should('be.visible');
    error.getErrorNumberFour().contains('passwd is required.').should('be.visible');
    error.getErrorNumberFive().contains('address1 is required.').should('be.visible');
    error.getErrorNumberSix().contains('city is required.').should('be.visible');
    error.getErrorNumberSeven().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberEight().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_007_CheckMessageWarningHave'FirstName'", () => {
    // cy.wait(8000);
    createPage.getFirstNameInput().type('linh');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 7 errors').should('be.visible');
    error.getErrorNumberOne().contains('You must register at least one phone number.').should('be.visible');
    error.getErrorNumberTwo().contains('lastname is required.').should('be.visible');
    error.getErrorNumberThree().contains('passwd is required.').should('be.visible');
    error.getErrorNumberFour().contains('address1 is required.').should('be.visible');
    error.getErrorNumberFive().contains('city is required.').should('be.visible');
    error.getErrorNumberSix().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberSeven().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_008_CheckMessageWarningHave'FirstName','LastName'", () => {
    cy.wait(8000);
    createPage.getFirstNameInput().type('Linh');
    createPage.getLastNameInput().type('Nguyen');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 6 errors').should('be.visible');
    error.getErrorNumberOne().contains('You must register at least one phone number.').should('be.visible');
    error.getErrorNumberTwo().contains('passwd is required.').should('be.visible');
    error.getErrorNumberThree().contains('address1 is required.').should('be.visible');
    error.getErrorNumberFour().contains('city is required.').should('be.visible');
    error.getErrorNumberFive().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberSix().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_009_CheckMessageWarningHave'FirstName','LastName','Password'", () => {
    cy.wait(8000);
    createPage.getFirstNameInput().type('Linh');
    createPage.getLastNameInput().type('Nguyen');
    createPage.getPasswordInput().type('123456789');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 5 errors').should('be.visible');
    error.getErrorNumberOne().contains('You must register at least one phone number.').should('be.visible');
    error.getErrorNumberTwo().contains('address1 is required.').should('be.visible');
    error.getErrorNumberThree().contains('city is required.').should('be.visible');
    error.getErrorNumberFour().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberFive().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_010_CheckMessageWarningHave'FirstName','LastName','Password','MobilePhone'", () => {
    cy.wait(8000);
    createPage.getFirstNameInput().type('Linh');
    createPage.getLastNameInput().type('Nguyen');
    createPage.getPasswordInput().type('123456789');
    createPage.getPhoneMobileInput().type('0987654321');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 4 errors').should('be.visible');
    error.getErrorNumberOne().contains('address1 is required.').should('be.visible');
    error.getErrorNumberTwo().contains('city is required.').should('be.visible');
    error.getErrorNumberThree().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberFour().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_011_CheckMessageWarningHave'FirstName','LastName','Password','MobilePhone', 'Address'", () => {
    cy.wait(8000);
    createPage.getFirstNameInput().type('Linh');
    createPage.getLastNameInput().type('Nguyen');
    createPage.getPasswordInput().type('123456789');
    createPage.getPhoneMobileInput().type('0987654321');
    createPage.getAddress1Input().type('kanto');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 3 errors').should('be.visible');
    error.getErrorNumberOne().contains('city is required.').should('be.visible');
    error.getErrorNumberTwo().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberThree().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_012_CheckMessageWarningHave'FirstName','LastName','Password','MobilePhone','Address','City'", () => {
    cy.wait(8000);
    createPage.getFirstNameInput().type('Linh');
    createPage.getLastNameInput().type('Nguyen');
    createPage.getPasswordInput().type('123456789');
    createPage.getPhoneMobileInput().type('0987654321');
    createPage.getAddress1Input().type('Kanto');
    createPage.getCityInput().type('Kanto');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There are 2 errors').should('be.visible');
    error.getErrorNumberOne().contains("The Zip/Postal code you've entered is invalid. It must follow this format: 00000").should('be.visible');
    error.getErrorNumberTwo().contains('This country requires you to choose a State.').should('be.visible');
  })
  it("TC_013_CheckMessageWarningHave'FirstName','LastName','Password','MobilePhone','Address','City','Zip Code'", () => {
    cy.wait(8000);
    createPage.getFirstNameInput().type('Linh');
    createPage.getLastNameInput().type('Nguyen');
    createPage.getPasswordInput().type('123456789');
    createPage.getPhoneMobileInput().type('0987654321');
    createPage.getAddress1Input().type('Kanto');
    createPage.getCityInput().type('Kanto');
    createPage.getPostcodeInput().type('90000');
    createPage.getSubmitButton().click();
    cy.wait(2000);
    error.getErrorTitle().contains('There is 1 error').should('be.visible');
    error.getErrorNumberOne().contains('This country requires you to choose a State.').should('be.visible');
  })
})