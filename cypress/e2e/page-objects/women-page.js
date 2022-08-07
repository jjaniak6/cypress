export class WomenPage{

    static openAutomationPracticeWomenPage() {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    };

    static checkIfWomenCategoryisOpen() {
        cy.get(".page-heading").should("eq", "Women")
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
        cy.get(".product_list").find(".product-container").contains(productName).parent(".product-container").then(() => {cy.get(".content_price")
        .invoke("text").then(sometext => {
            const cena = sometext;
            cy.log("Cena: ",cena);
            cy.readFile("./cypress/fixtures/prices.json").then((list) => {
                list.push({price: cena.trim()})
                cy.writeFile("./cypress/fixtures/prices.json", list);

            })
        })
    })
    }

}