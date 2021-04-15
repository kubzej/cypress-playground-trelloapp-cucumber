

export class MainPage{

    BUTTON_LOGIN = '.Nav > :nth-child(3)'

    openMainPage(){
        cy.visit('/')
    }

    openLoginModal(){
        cy.get(this.BUTTON_LOGIN).click()
    }

}

export const onMainPage = new MainPage()