/// <reference types="cypress" />
context('Login', () => {
    beforeEach(() =>{
        cy.visit('/index.php?controller=authentication&back=my-account')
    })

    it('Login successfully', () => {
        
        cy.login(Cypress.env('user'), Cypress.env('pwd'))
        //Assertion
        cy.assertion_user_Logged(Cypress.env('name'))
    });

    it('Login unsuccessfully', () => {
        
        cy.login(Cypress.env('user'), 'PWD_ERROR')
        //Assertion
        cy.get('[class="alert alert-danger"]').contains('There is 1 error')
        cy.get('[class="alert alert-danger"]').contains('Authentication failed.')
    });
});