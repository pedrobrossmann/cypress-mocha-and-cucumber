/// <reference types="cypress" />
const faker = require('faker-br');

context('Register', () => {
    let user = {
        email: faker.internet.email(),
        gender: 'female',
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        passwd: faker.internet.password(),
        day: '24',
        month: '12',
        year: '1992',
        company: faker.company.companyName(),
        street: faker.address.streetName(),
        street_complement: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: 'Florida',
        postal_code: Math.floor(10000.99999),
        add_info: 'Informação adicional',
        home_phone: faker.phone.phoneNumber(),
        mobile_phone: faker.phone.phoneNumber()
    }

    beforeEach(() =>{
        cy.visit('/index.php?controller=authentication&back=my-account')
    })
    
    it('Register user successfully', () => {
        cy.create_account_begin(user.email)
        cy.create_account_gender(user.gender)
        cy.create_account_personal_information(user.first_name, user.last_name, user.email, user.passwd, user.day, user.month, user.year)
        cy.create_account_newsletter_true()
        cy.create_account_recieve_offers_true()
        cy.create_account_address(user.first_name, user.last_name, user.company, user.street, user.street_complement, user.city, user.state, user.postal_code, user.add_info, user.home_phone, user.mobile_phone)

        cy.assertion_user_Logged(`${user.first_name}${' '}${user.last_name}`)        
    });
});