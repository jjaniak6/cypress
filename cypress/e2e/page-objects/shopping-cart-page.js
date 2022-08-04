export class ShoppingCartPage {

    static openAutomationPracticeShoppingCartPage(){
        cy.visit("http://automationpractice.com/index.php?controller=order");
    };

    static checkIfShoppingCartIsOpen() {
        cy.get("#cart_title").contains("Shopping-cart summary")
    }

    static checkPrices() {
        cy.fixture("prices.json").then(pricesData =>{
            cy.get("#product_price_2_7_0 > span").should("have.text", pricesData[0].price);
            cy.get("#product_price_3_13_0 > span").should("have.text", pricesData[1].price);
        })
    }

}