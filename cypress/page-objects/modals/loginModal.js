export class LoginModal{

    getLoginModal(){
        return cy.get('.LoginModule')
    }

    getSignUpHereButton(){
        return cy.contains('Sign up here')
    }

    getEmailTextBox(){
        return cy.get('#loginEmail')
    }

    getPasswordTextBox(){
        return cy.get('#loginPassword')
    }

    getLoginButton(){
        return cy.get('.Button').first()
    }


    clickOnSignUpHereButton(){
        this.getSignUpHereButton().click()
    }

    fillEmailTextBox(email){
        this.getEmailTextBox().type(email)
    }

    fillPasswordTextBox(password){
        this.getPasswordTextBox().type(password)
    }

    clickOnLoginButton(){
        this.getLoginButton().click()
    }

}

export const onLoginModal = new LoginModal()