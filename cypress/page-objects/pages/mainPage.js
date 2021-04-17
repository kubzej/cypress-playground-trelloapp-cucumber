
export class MainPage{

    getBoardItem(){
        return cy.get('.board_item')
    }

    getBoardTitle(){
        return cy.get('.board_item > .board_title')
    }

    getEmailButton(){
        return cy.get('[class="Nav_user Nav_button"]').eq(1)
    }

    getErrorMessage(){
        return cy.get('#errorMessage')
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

    getXButton(){
        return cy.get('.board_options > .Cancel')
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

    clickOnNewBoardButton(){
        this.getNewBoardButton().click()
    }

    clickOnSaveBoardButton(){
        this.getSaveBoardButton().click()
    }

    clickOnXButton(){
        this.getXButton().click()
    }

    createNewBoard(boardName){
        this.getNewBoardButton().click()
        this.getNewBoardNameTextBox().type(boardName)
        this.getSaveBoardButton().click()
    }

    navigate(){
        cy.visit('/')
    }

    openBoard(){
        this.getBoardTitle().first().click()
    }

}

export const onMainPage = new MainPage()