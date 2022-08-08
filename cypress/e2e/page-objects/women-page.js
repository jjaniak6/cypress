export class WomenPage{

    static openAutomationPracticeWomenPage() {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    };

    static checkIfWomenCategoryisOpen() {
        cy.get(".page-heading").should("contain", "Women")
    };

    static clickContinueShopping() {
        cy.get("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span").contains("Continue shopping").click();
    }   

    static clickProceedToCheckout() {
        cy.get("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span").contains("Proceed to checkout").click();
    }

    static addProductToCartByName(productName) {
        cy.get(".product_list").find(".product-container").contains(productName).parents(".product-container").contains('Add to cart').click();
    }

    static getProductPriceAndWriteItToJSONfile(productName) {
        cy.get(".product_list").find(".product-container").contains(productName).parents(".product-container").find(" div.content_price > span")
        .invoke("text").then(sometext => {
            const cena = sometext.trim().slice(0,8).trim();
            cy.log("Cena: ", cena);
            cy.readFile("./cypress/fixtures/prices.json").then((list) => {
                list.push({price: cena})
                cy.writeFile("./cypress/fixtures/prices.json", list);

            })
        })
    }

}