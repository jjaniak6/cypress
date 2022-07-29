export class ShoppingCartPage {

    static openAutomationPracticeShoppingCartPage(){
        cy.visit("http://automationpractice.com/index.php?controller=order");
    };

    static checkIfShoppingCartIsOpen() {
        cy.get("#cart_title").contains("Shopping-cart summary")
    }

    // static checkPrice(number) {
    //     cy.get("td.cartunit>:nth-child("+number+") > span  > span").should("have.text", "$27.00");
    // }

    static checkPrice1(price) {
        cy.get("#product_price_2_7_0 > span").should("have.text", price);
    }

    static checkPrice2() {
        cy.get("#product_price_3_13_0 > span").should("have.text", "$26.00");
    }

    static checkTotal() {
        cy.get("#total_price").should("have.text", "$55.00");
    }



}