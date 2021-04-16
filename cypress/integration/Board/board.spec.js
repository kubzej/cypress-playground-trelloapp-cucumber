const { onBoard } = require("../../page-objects/pages/board")
const { onMainPage } = require("../../page-objects/pages/mainPage")

When('I create new board called {string}', function(name) {
    onMainPage.createNewBoard(name)
})


Then('New board {string} is created',function(name) {
    onBoard.getBoardTitle().should('have.value', name)
})

