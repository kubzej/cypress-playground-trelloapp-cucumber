
export class MainPage{

    getEmailButton(){
        return cy.get('[class="Nav_user Nav_button"]').eq(1)
    }

    getLoginButton(){
        return cy.get('[class="Nav_user Nav_button"]').first()
    }

    getLogOutButton(){
        return cy.contains('Log out')
    }

    getNewBoardButton(){
        return cy.get('#new-board')
    }

    getNewBoardNameTextBox(){
        return cy.get('.board_addBoard')
    }

    getSaveBoardButton(){
        return cy.contains('.Button', 'Save')
    }

// ------------------------------------------------------------ END OF GETS

    clickOnEmail(){
        this.getEmailButton().click()
    }

    clickOnLoginButton() {
        this.getLoginButton().click()
    }

    clickOnLogOutButton(){
        this.getLogOutButton().click()
    }

    createNewBoard(boardName){
        this.getNewBoardButton().click()
        this.getNewBoardNameTextBox().type(boardName)
        this.getSaveBoardButton().click()
    }

    navigate(){
        cy.visit('/')
    }

}

export const onMainPage = new MainPage()