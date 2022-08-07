export class LoginPage{

    static inputEmail(email) {
            cy.get("#email").type(email)
    }

    static inputPassword(password) {
        cy.get("#passwd").type(password)
    }

    static submitLogin() {
        cy.get("#SubmitLogin").contains("Sign in").click()
    }

    static signOut() {
        cy.get(".logout").contains("Sign out").click()
    }

    static checkIfMyAccountIsOpen() {
        cy.url().should("eq", "http://automationpractice.com/index.php?controller=my-account")
    }
}