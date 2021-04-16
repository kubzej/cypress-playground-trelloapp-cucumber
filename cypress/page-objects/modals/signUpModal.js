export class SignUpModal{

    getSignUpModal(){
        return cy.get('.LoginModule')
    }

    getEmailTextBox(){
        return cy.get('#signupEmail')
    }

    getPasswordTextBox(){
        return cy.get('#signupPassword')
    }

    getSignUpButton(){
        return cy.get('.Button').eq(1)
    }

    fillEmailTextBox(email){
        this.getEmailTextBox().type(email)
    }

    fillPasswordTextBox(password){
        this.getPasswordTextBox().type(password)
    }

    clickOnSignUpButton(){
        this.getSignUpButton().click()
    }

}

export const onSignUpModal = new SignUpModal()