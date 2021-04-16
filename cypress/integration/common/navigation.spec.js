const { onMainPage } = require("../../page-objects/pages/mainPage")

Given('I open main page', () => {
    onMainPage.navigate()
})
