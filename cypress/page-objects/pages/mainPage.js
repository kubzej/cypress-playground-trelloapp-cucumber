
export class MainPage{

    getEmailButton(){
        return cy.get('[class="Nav_user Nav_button"]').eq(1)
    }

    getLoginButton(){
        return cy.get('[class="Nav_user Nav_button"]').first()
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

    clickOnLoginButton() {
        this.getLoginButton().click()
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