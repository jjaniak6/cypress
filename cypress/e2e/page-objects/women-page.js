export class WomenPage{

    static openAutomationPracticeWomenPage(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    };

    static checkIfWomenCategoryisOpen(){
        cy.get(".page-heading").contains("Women")
    };

    static addToCard2(productName){
        let price = cy.get(".product_list").find(productName).then(() => {
            cy.get(".content_price > span")
            .invoke("text").then(sometext => {
                const cena = sometext;
                cy.log("Cena: ", cena)
                price = cena;
            }); 
        })
        cy.get(".product-list").find(productName).contains("Add to cart").click();
        return price;
    }

    static continueShopping(){
        cy.get("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span").contains("Continue shopping").click();
    }

    static addElementToCart(number){
        cy.get(".product_list>:nth-child("+number+")").contains('Add to cart').click();
        cy.get(".product_list>:nth-child("+number+") > div > div.right-block >  div.content_price > span")
        .invoke("text").then(sometext => {
            const cena = sometext;
            cy.log("Cena: ",cena);
            cy.readFile("./cypress/fixtures/prices.json").then((list) => {
                list.push({price: cena.trim()})
                cy.writeFile("./cypress/fixtures/prices.json", list);

            })
        })
    }    

}