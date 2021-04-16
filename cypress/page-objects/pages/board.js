export class Board{

    getBoardTitle(){
        return cy.get('.boardDetail_title')
    }

}

export const onBoard = new Board()