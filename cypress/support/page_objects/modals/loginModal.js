export class LoginModal{

    LOGIN_MODULE = '.LoginModule'
    LOGIN_TITLE = 'Log in to your account'
    BUTTON_SIGNUP = '.LoginModule_logSignSwitch'

    clickOnSignUpButton(){
        cy.get(this.BUTTON_SIGNUP).first().click()
    }

}

export const onLoginModal = new LoginModal()