export class MainPage {

    static openAutomationPracticePage(){
        cy.visit("http://automationpractice.com/index.php");
    }

    static clickCategory(name){
        cy.get("#block_top_menu").contains(name).click();
    }

    static clickShoppingCart(){
        cy.get(".shopping_cart").contains("Cart").click();
    }

    static clickSignIn(){
        cy.get(".login").contains("Sign in").click()
    }

}