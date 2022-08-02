export class LoginPage{

    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    static login(email, password) {
            cy.get("#email").type(email)
            cy.get("#passwd").type(password)
    }

    static clickSubmitButton() {
        cy.get("#SubmitLogin").click()
    }

    static checkIfMyAccountIsOpen() {
        cy.get(".page-heading").contains("My account")
    }

    static checkIfLoginFailed() {
        cy.get("#center_column > div.alert.alert-danger > ol > li").should("have.text", "Authentication failed.")
    }

}