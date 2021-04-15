const { onLoginModal } = require("../../support/page_objects/modals/loginModal")
const { onMainPage } = require("../../support/page_objects/pages/mainPage")

When('I click on Login button', () => {
   onMainPage.openLoginModal()
})

Then('Login modal is shown', () => {
   cy.contains(onLoginModal.LOGIN_MODULE ,onLoginModal.LOGIN_TITLE).should('be.visible')
})