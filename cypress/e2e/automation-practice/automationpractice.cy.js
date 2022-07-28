/// <reference types="cypress" />
import { LoginPage } from "../page-objects/login-page";
import {MainPage} from "../page-objects/main-page"
import { WomenPage } from "../page-objects/women-page";
// import {WomenPage} from "../page_objects/women-page"
// import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })


    describe('log in', () => {

        it('should login', () => {
            MainPage.logIn();
            LoginPage.login();
            LoginPage.clickSubmitButton();
            LoginPage.checkIfMyAccountIsOpen();
        })

    })

    describe('add to card', () => {

        it('should open category: Women', () => {
            MainPage.clickCategory('Women');
            WomenPage.checkIfWomenCategoryisOpen();
            WomenPage.addToCard("Printed Dress");
        })

        // it('should open cart page', () => {
        //     MainPage.clickShoppingCart();
        //     ShoppingCart.checkIfShoppingCartisOpen(); 
        // })



    })


})
