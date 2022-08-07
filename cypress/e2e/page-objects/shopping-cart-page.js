export class ShoppingCartPage {

    static openAutomationPracticeShoppingCartPage() {
        cy.visit("http://automationpractice.com/index.php?controller=order");
    };

    static checkIfShoppingCartIsOpen() {
        cy.url().should("eq", "http://automationpractice.com/index.php?controller=order")
    }

    static checkPrices() {
        cy.fixture("prices.json").then(pricesData =>{
            cy.get('tbody > :nth-child(1) > .cart_unit').should("contain", pricesData[0].price);
            cy.get('tbody > :nth-child(2) > .cart_unit').should("contain", pricesData[1].price);
        })
    }

}