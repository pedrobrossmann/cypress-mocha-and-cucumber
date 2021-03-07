/// <reference types="cypress" />

Cypress.Commands.add("login", (email, password) => {
   cy.get('#email').type(email)
   cy.get('#passwd').type(password)
   cy.get('#SubmitLogin').click()
})

Cypress.Commands.add("create_account_begin", (email) => {
   cy.get('#email_create').type(email)
   cy.get('#SubmitCreate').click()
})

Cypress.Commands.add("create_account_personal_information", (first_name, last_name, email, password, days_birth, months_birth, years_birth) => {
   cy.get('#customer_firstname').type(first_name)
   cy.get('#customer_lastname').type(last_name)
   cy.get('#email').should('have.value', email)
   cy.get('#passwd').type(password)
   cy.get('#days').select(days_birth)
   cy.get('#months').select(months_birth)
   cy.get('#years').select(years_birth)
})

Cypress.Commands.add("create_account_gender", (gender) => {
   if (gender == 'female'){
     cy.get('#id_gender2').check()
  } else {
     cy.get('#id_gender1').check()
  }
})

Cypress.Commands.add("create_account_newsletter_true", () => {
   cy.get('#newsletter').check()
})

Cypress.Commands.add("create_account_recieve_offers_true", () => {
   cy.get('#optin').check()
})

Cypress.Commands.add("create_account_address", (first_name, last_name, company, street, street_complement, city, state, postal_code, add_info, home_phone, mobile_phone, address_reference) => {
   cy.get('#firstname').should('have.value', first_name)
   cy.get('#lastname').should('have.value', last_name)
   cy.get('#company').type(company)
   cy.get('#address1').type(street)
   cy.get('#address2').type(street_complement)
   cy.get('#city').type(city)
   cy.get('#id_state').select(state)
   cy.get('#postcode').type(postal_code)
   cy.get('#other').type(add_info)
   cy.get('#phone').type(home_phone)
   cy.get('#phone_mobile').type(mobile_phone)
   cy.get('#alias').should('have.value', 'My address')
   cy.get('#submitAccount').click()
})

Cypress.Commands.add("assertion_user_Logged", (name) => {
   cy.get('[class="account"]').should('have.text', name)
   cy.get('[title="Orders"]').should('have.text', 'Order history and details')
   cy.get('[title="Credit slips"]').should('have.text', 'My credit slips')
   cy.get('[title="Addresses"]').should('have.text', 'My addresses')
   cy.get('[title="Information"]').should('have.text', 'My personal information')
   cy.get('[class="logout"]').should('be.visible')
})