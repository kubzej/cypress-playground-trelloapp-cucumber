const { onLoginModal } = require("../../page-objects/modals/loginModal")
const { onSignUpModal } = require("../../page-objects/modals/signUpModal")
const { onMainPage } = require("../../page-objects/pages/mainPage")

Given('I open register modal', () => {
    onMainPage.clickOnLoginButton()
    onLoginModal.clickOnSignUpHereButton()
})

Given('I registered user via request with email {string}', function(email){
    cy.request('POST', '/signup', {
        "email": "test@test.cz",
        "password": "password123"
      })
})

When('I click on Login button', () => {
    onMainPage.clickOnLoginButton()
})

When('I click on Sign up switch button', () => {
    onLoginModal.clickOnSignUpHereButton()
})

When('I insert email {string} and password {string} as registration credentials', function(email, password) {
    onSignUpModal.fillEmailTextBox(email)
    onSignUpModal.fillPasswordTextBox(password)
})

When('I click on Sign up button', () => {
    cy.intercept('POST', '/signup').as('signUpRequest')
    onSignUpModal.clickOnSignUpButton()
})

Then('Login modal is shown', () => {
    onLoginModal.getLoginModal().should('be.visible')
})

Then('Sign up modal is shown', () => {
    onSignUpModal.getSignUpModal().should('be.visible')
})

Then('Registration with email {string} was succesfull', (email) => {
    cy.wait('@signUpRequest').then(r => {
        expect(r.response.statusCode).eq(201)
    })
    onMainPage.getEmailButton().should('have.prop', 'outerText', ' ' + email)
})

Then('Registration failed because of invalid email', () => {
    cy.wait('@signUpRequest').then(signUp => {
        expect(signUp.response.statusCode).to.equal(400)
        expect(signUp.response.body).to.contain('Email format is invalid')
    })
})

Then('Registration failed because of short password', () => {
    cy.wait('@signUpRequest').then(signUp => {
        expect(signUp.response.statusCode).to.equal(400)
        expect(signUp.response.body).to.contain('Password is too short')
    })
})

Then('Registration failed becase of already existing email', () => {
    cy.wait('@signUpRequest').then(signUp => {
        expect(signUp.response.statusCode).to.equal(400)
        expect(signUp.response.body).to.contain('Email already exists')
    })
})