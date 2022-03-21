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

// describe('My First Cypress Test', function() {
//   it('Visits the ToolsQA Demo Page and check the menu items', function() {
//   //Visit the Demo QA Website
//   cy.visit("https://demoqa.com/");
  
//  // Clicking on Widget Menu Item
//   cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();

//   //Verify number of items present under the Widget Tab
//   cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);

//   //Verify the number of span items under the Widgets Tab
//   cy.get(':nth-child(4) > .element-list > .menu-list > li').find('span').should('have.length',9).then(() => { 
//     //Handling Async behavior using then method 
//     console.log('Using Mocha Log'); 
//   })
//   cy.log('Using Cypress Log');
//   cy.then(() => {
//     cy.wrap(10).then(() => {
//         return 42;
//     });
// }).should('eq', 42);
// const getName = () => {
//   return 'Jane Lane'
// }

// cy.wrap({ name: getName }).invoke('name').then((e) => {
//   console.log(e);
// })
// })
// })
