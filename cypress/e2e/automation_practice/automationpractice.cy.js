/// <reference types="cypress" />
import { LoginPage } from "../page-objects/login-page";
import {MainPage} from "../page-objects/main-page"
import { ShoppingCartPage } from "../page-objects/shopping-cart-page";
import { WomenPage } from "../page-objects/women-page";

context('e-shop go to', () => {

    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('log in', () => {

        let signInData;

        beforeEach(function(){
            cy.fixture('login.json').then((data) => {
               signInData = data
            })
         });

        it('should sign in and sign out', function() {

            signInData.forEach((user) => {
                MainPage.clickSignIn();
                cy.wait(6000);
                LoginPage.inputEmail(user.email);
                LoginPage.inputPassword(user.password);
                LoginPage.submitLogin();
                cy.wait(6000);
                LoginPage.checkIfMyAccountIsOpen();
                cy.wait(6000);
                LoginPage.signOut();
            })
        });
    })

    describe('add to card', () => {

        beforeEach( () => {
            cy.writeFile("./cypress/fixtures/prices.json", [])
        });

        it('should add 2 items to cart', () => {
            MainPage.clickCategory('Women');
            cy.wait(6000);
            WomenPage.checkIfWomenCategoryisOpen();
            WomenPage.addProductToCartByName("Faded Short Sleeve T-shirts");
            WomenPage.getProductPriceAndWriteItToJSONfile("Faded Short Sleeve T-shirts");
            cy.wait(6000);
            WomenPage.clickContinueShopping();
            cy.wait(6000);
            WomenPage.addProductToCartByName("Printed Dress");
            WomenPage.getProductPriceAndWriteItToJSONfile("Printed Dress");
            cy.wait(6000);
            WomenPage.clickProceedToCheckout();
            cy.wait(6000);
            ShoppingCartPage.checkIfShoppingCartIsOpen(); 
            ShoppingCartPage.checkPrices();
        })
    })
})
