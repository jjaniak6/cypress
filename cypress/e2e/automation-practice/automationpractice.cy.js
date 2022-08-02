/// <reference types="cypress" />
import { LoginPage } from "../page-objects/login-page";
import {MainPage} from "../page-objects/main-page"
import { ShoppingCartPage } from "../page-objects/shopping-cart-page";
import { WomenPage } from "../page-objects/women-page";
// import {WomenPage} from "../page_objects/women-page"
// import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })


    describe('log in', () => {

        beforeEach(function(){
            cy.fixture('login.json').then(function(signInData){
               this.signInData = signInData
            })
         });

         it('should not login', function() {
            MainPage.logIn();
            LoginPage.login(this.signInData[1].email, this.signInData[1].password);
            LoginPage.clickSubmitButton();
            LoginPage.checkIfLoginFailed();
        })

        it('should login', function() {
            MainPage.logIn();
            LoginPage.login(this.signInData[0].email, this.signInData[0].password);
            LoginPage.clickSubmitButton();
            LoginPage.checkIfMyAccountIsOpen();
        });



    })

    // describe('add to card', () => {

    //     it('should add item to cart', () => {
    //         MainPage.clickCategory('Women');
    //         WomenPage.checkIfWomenCategoryisOpen();
    //         let price1 = WomenPage.addToCard(2);
    //         cy.log(price1);
    //         // let price1 = WomenPage.addToCard2("Blouse");
    //         WomenPage.continueShopping();
    //         // let price2 = WomenPage.addToCard(3);
    //         let price2 = WomenPage.addToCard2("Printed Dress");
    //         WomenPage.continueShopping();
    //         MainPage.clickShoppingCart();
    //         ShoppingCartPage.checkIfShoppingCartIsOpen(); 
    //         ShoppingCartPage.checkPrice1(price1);
    //         ShoppingCartPage.checkPrice2(price2);
    //         ShoppingCartPage.checkTotal();
    //     })

    // })


})
