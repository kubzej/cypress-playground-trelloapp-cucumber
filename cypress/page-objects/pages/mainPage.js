
export class MainPage{

    getBoardItem(){
        return cy.contains('.background_title', 'My Boards').next().find('.board_item')
    }

    getBoardTitle(){
        return cy.contains('.background_title', 'My Boards').next().find('.board_item > .board_title')
    }

    getStarredBoardTitle(){
        return cy.contains('.background_title', 'My Starred').next().find('.board_item > .board_title')
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

    getStarButtonOfNonStarredBoard(){
        return cy.contains('.background_title', 'My Boards').next().find('.Star')
    }

    getStarButtonOfAlreadyStarredBoard(){
        return cy.contains('.background_title', 'My Starred').next().find('.Star')
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

    createMoreNewBoards(number){
        for (let i = 0; i < number; i++) {
            let name = Math.random().toString(36).substring(3)
            cy.request('POST', '/api/boards', {'name': name})
        }
    }

    navigate(){
        cy.visit('/')
    }

    openBoard(){
        this.getBoardTitle().first().click()
    }

    stareBoard(){
        this.getStarButtonOfNonStarredBoard().click({force: true})
    }

    stareMoreBoards(number){
        for (let i = 0; i < number; i++) {
            this.getStarButtonOfNonStarredBoard().eq(i).click({force: true})
        }

    }

    unstareBoard(){
        this.getStarButtonOfAlreadyStarredBoard().click({force: true})
    }

}

export const onMainPage = new MainPage()