const { onBoard } = require("../../page-objects/pages/boardPage")
const { onMainPage } = require("../../page-objects/pages/mainPage")


Given('Board {string} created by request', function(name){
    onBoard.createNewBoardWithRequest(name)
})

Given('Stubbed error {int}', function(errorNumber){
    cy.intercept('POST', '/api/boards', {statusCode: errorNumber}).as('errorRequest')
})

// ------------------------------------------------------------ END OF GIVEN

When('I create new board called {string}', function(name) {
    onMainPage.createNewBoard(name)
})

When('I click on new board button', () => {
    onMainPage.clickOnNewBoardButton()
})

When('I click on Save board button', () => {
    onMainPage.clickOnSaveBoardButton()
})

When('I click on My Boards button', () => {
    onBoard.clickOnMyBoardsButton()
})

When('I click on X button', () => {
    onMainPage.clickOnXButton()
})

When('I open board', () => {
    onMainPage.openBoard()
})

When('I edit name of board to {string}', function(name){
    onBoard.editNameofBoard(name + '{enter}')
})

When('I delete board', () => {
    onBoard.deleteBoard()
})

// ------------------------------------------------------------ END OF WHEN

Then('New board {string} is created',function(name) {
    onBoard.getBoardTitle().should('have.value', name)
})

Then('No board is created', () => {
    onBoard.getBoardTitle().should('not.exist')
})

Then('{int} boards should be existing', function(number){
    
    onMainPage.getBoardItem().then(boards => {
        expect(boards).to.have.length(number)
    })
})

Then('All boards should have name {string}', function(name){
    onMainPage.getBoardTitle().each(title => {
        expect(title).to.have.text(name)
    })
})

Then('No board is existing', () => {
    onMainPage.getBoardTitle().should('not.exist')
})

Then('Error message {int} is shown', function(errorCode){
    onMainPage.getErrorMessage().should('be.visible')
    switch(errorCode){
        case 500:
            onMainPage.getErrorMessage().should('have.text', 'There was an error creating board')
            break
        default:
            onMainPage.getErrorMessage().should('have.text', 'There was an error creating board')
    }
})

Then('Name of board is {string}', function(name){
    onBoard.getBoardTitle().should('have.value', name)
})
