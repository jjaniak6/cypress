export class LoginPage{

    static openAutomationPracticeSignInPage(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    static login() {
        cy.fixture("login.json").then(signInData => {
            cy.get("#email").type(signInData.email)
            cy.get("#passwd").type(signInData.password)
        })
    }

    static clickSubmitButton() {
        cy.get("#SubmitLogin").click()
    }

    static checkIfMyAccountIsOpen() {
        cy.get(".page-heading").contains("My account")
    }

}