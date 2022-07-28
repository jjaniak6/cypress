export class WomenPage{

    static openAutomationPracticeWomenPage(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    };

    static checkIfWomenCategoryisOpen(){
        cy.get('.page-heading').contains("Women")
    };

    static addToCard(product_name){
        cy.get('.product-name').contains(product_name);
        cy.get('.button-container').contains("Add to cart").click();
    }

}