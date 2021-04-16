const { onLoginModal } = require("../../page-objects/modals/loginModal")
const { onSignUpModal } = require("../../page-objects/modals/signUpModal")
const { onMainPage } = require("../../page-objects/pages/mainPage")

Given('I open register modal', () => {
    onMainPage.clickOnLoginButton()
    onLoginModal.clickOnSignUpHereButton()
})

Given('I open login modal', () => {
    onMainPage.clickOnLoginButton()
})

Given('I register user via request with email {string}', function(email){
    cy.request('POST', '/signup', {
        "email": "test@test.cz",
        "password": "password123"
      })
})

Given('Logged random user', () => {
    cy.intercept('POST', '/signup').as('signUpRequest')
    onMainPage.clickOnLoginButton()
    onLoginModal.clickOnSignUpHereButton()
    onSignUpModal.fillEmailTextBox('test@test.cz')
    onSignUpModal.fillPasswordTextBox('password123')
    onSignUpModal.clickOnSignUpButton()
    cy.wait('@signUpRequest')
})
    
// ------------------------------------------------------------ END OF GIVEN

When('I click on Login button on mainpage', () => {
    onMainPage.clickOnLoginButton()
})

When('I click on Sign up switch button', () => {
    onLoginModal.clickOnSignUpHereButton()
})

When('I insert email {string} and password {string} as registration credentials', function(email, password) {
    onSignUpModal.fillEmailTextBox(email)
    onSignUpModal.fillPasswordTextBox(password)
})

When('I insert email {string} and password {string} as login credentials', function(email, password) {
    onLoginModal.fillEmailTextBox(email)
    onLoginModal.fillPasswordTextBox(password)
})

When('I click on Sign up button', () => {
    cy.intercept('POST', '/signup').as('signUpRequest')
    onSignUpModal.clickOnSignUpButton()
})

When('I click on Login button', () => {
    cy.intercept('POST', '/login').as('loginRequest')
    onLoginModal.clickOnLoginButton()
})

When('I log out', () => {
    onMainPage.clickOnEmail()
    onMainPage.clickOnLogOutButton()
})


// ------------------------------------------------------------ END OF WHEN

Then('Login modal is shown', () => {
    onLoginModal.getLoginModal().should('be.visible')
})

Then('Sign up modal is shown', () => {
    onSignUpModal.getSignUpModal().should('be.visible')
})

Then('Registration with email {string} was successful', (email) => {
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

Then('Registration failed because of empty credentials', () => {
    cy.wait('@signUpRequest').then(signUp => {
        expect(signUp.response.statusCode).to.equal(400)
        expect(signUp.response.body).to.contain('Email and password are required')
    })
})

Then('Login with email {string} was successful', function(email){
    cy.wait('@loginRequest').then(r => {
        expect(r.response.statusCode).eq(200)
    })
    onMainPage.getEmailButton().should('have.prop', 'outerText', ' ' + email)
})

Then('Login failed because of non existing email', () => {
    cy.wait('@loginRequest').then(login => {
        expect(login.response.statusCode).to.equal(400)
        expect(login.response.body).to.contain('Cannot find user')
    })
})

Then('Login failed because of invalid password', () => {
    cy.wait('@loginRequest').then(login => {
        expect(login.response.statusCode).to.equal(400)
        expect(login.response.body).to.contain('Incorrect password')
    })
})

Then('Login failed because of empty credentials', () => {
    cy.wait('@loginRequest').then(login => {
        expect(login.response.statusCode).to.equal(400)
        expect(login.response.body).to.contain('Email and password are required')
    })
})

Then('No user is logged', () => {
    onMainPage.getLoginButton().should('be.visible')
})