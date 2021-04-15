const { onMainPage } = require("../../support/page_objects/pages/mainPage")

Given('I open main page', () => {
    onMainPage.openMainPage()
})