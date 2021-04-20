export class Board{

    getBoardTitle(){
        return cy.get('.boardDetail_title')
    }

    getDeleteButton(){
        return cy.contains('Delete board')
    }

    getDropdown(){
        return cy.get('.dropdown').eq(1)
    }

    getMyBoardButton(){
        return cy.contains('My Boards')
    }

// ------------------------------------------------------------ END OF GET

    clickOnMyBoardsButton(){
        this.getMyBoardButton().click()
    }

    createNewBoardWithRequest(name){
        cy.request('POST', '/api/boards', {'name': name})
        
    }

    deleteBoard(){
        this.getDropdown().click()
        this.getDeleteButton().click()
    }

    editNameofBoard(name){
        this.getBoardTitle().then(title => {
            cy.wrap(title).clear()
            cy.wrap(title).type(name)
        })
    }
    

}

export const onBoard = new Board()