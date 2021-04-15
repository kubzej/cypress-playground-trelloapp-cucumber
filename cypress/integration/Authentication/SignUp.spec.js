const { onLoginModal } = require("../../support/page_objects/modals/loginModal")
const { onSignUpModal } = require("../../support/page_objects/modals/signUpModal")

When('I click on Sign up button', () => {
    onLoginModal.clickOnSignUpButton()
})

Then('Sign up modal is shown', () => {
    cy.contains(onLoginModal.LOGIN_MODULE, onSignUpModal.SIGNUP_TITLE).should('be.visible')
})