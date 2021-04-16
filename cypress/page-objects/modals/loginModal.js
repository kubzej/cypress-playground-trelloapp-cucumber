export class LoginModal{

    getLoginModal(){
        return cy.get('.LoginModule')
    }

    getSignUpHereButton(){
        return cy.contains('Sign up here')
    }

    clickOnSignUpHereButton(){
        this.getSignUpHereButton().click()
    }

}

export const onLoginModal = new LoginModal()